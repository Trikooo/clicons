#!/usr/bin/env node

/**
 * Icon Generator Script for Svelte
 * Converts SVG files into individual Svelte components (Svelte 5 syntax)
 * Usage: node generate-icons-svelte.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_ICONS_DIR = path.join(__dirname, "..", "svg-icons");
const SVELTE_SRC_DIR = path.join(__dirname, "src", "lib", "icons");
const OUTPUT_INDEX = path.join(__dirname, "src", "lib", "index.ts");

const DEFAULT_SIZE = 16;
const DEFAULT_STROKE_WIDTH = 1.8;
const DEFAULT_ABSOLUTE_STROKE_WIDTH = false;
const DEFAULT_COLOR = "currentColor";

if (!fs.existsSync(SVELTE_SRC_DIR)) {
  fs.mkdirSync(SVELTE_SRC_DIR, { recursive: true });
}

/**
 * Parse an SVG file to extract its content and viewBox
 */
function parseSVGFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  const svgMatch = content.match(/<svg[^>]*>/);
  if (!svgMatch) return null;

  const viewBoxMatch = svgMatch[0].match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

  const contentMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!contentMatch) return null;

  return {
    content: contentMatch[1].trim(),
    viewBox,
  };
}

/**
 * Convert icon name to kebab-case for URL
 */
function toKebabCase(str) {
  return str
    .replace(/Icon$/, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

/**
 * Parse SVG elements into structured data
 */
function parseSVGElements(svgContent) {
  const elements = [];
  const elementRegex = /<(\w+)([^>]*?)(\/?)>/g;
  let match;

  while ((match = elementRegex.exec(svgContent)) !== null) {
    const tag = match[1];
    const attrsString = match[2];
    const isSelfClosing = match[3] === "/";
    const matchEnd = match.index + match[0].length;

    const attrs = {};
    const attrRegex = /(\w+(?:-\w+)*)="([^"]*)"/g;
    let attrMatch;

    while ((attrMatch = attrRegex.exec(attrsString)) !== null) {
      let attrName = attrMatch[1];
      const attrValue = attrMatch[2];

      // Skip invalid/custom data attributes
      if (attrName.startsWith("data--") || attrName.includes("bstatus")) {
        continue;
      }

      // Convert camelCase to kebab-case for Svelte
      attrName = attrName.replace(/([A-Z])/g, "-$1").toLowerCase();

      attrs[attrName] = attrValue;
    }

    let children = null;
    if (!isSelfClosing) {
      const closingTagRegex = new RegExp(`</${tag}>`);
      const closingMatch = closingTagRegex.exec(svgContent.slice(matchEnd));
      if (closingMatch) {
        const contentStart = matchEnd;
        const contentEnd = matchEnd + closingMatch.index;
        const innerContent = svgContent.slice(contentStart, contentEnd).trim();

        if (innerContent) {
          children = innerContent;
        }

        elementRegex.lastIndex = contentEnd + closingMatch[0].length;
      }
    }

    if (children) {
      elements.push({ tag, attrs, children });
    } else {
      elements.push({ tag, attrs });
    }
  }

  return elements;
}

/**
 * Check if icon uses stroke or fill
 */
function analyzeIconType(elements) {
  let hasStroke = false;
  let hasFill = false;
  let hasStrokeWidth = false;

  for (const element of elements) {
    const attrs = element.attrs;
    if (attrs.stroke) hasStroke = true;
    if (attrs.fill) hasFill = true;
    if (attrs["stroke-width"]) hasStrokeWidth = true;
  }

  return { hasStroke, hasFill, hasStrokeWidth };
}

/**
 * Generate Svelte component from SVG content
 */
function generateComponent(iconName, svgData) {
  const { content: svgContent, viewBox } = svgData;
  const kebabName = toKebabCase(iconName);
  const iconUrl = `https://clicons.dev/icon/${kebabName}`;

  const elements = parseSVGElements(svgContent);
  const { hasStroke, hasFill, hasStrokeWidth } = analyzeIconType(elements);

  const elementsCode = elements
    .map(({ tag, attrs, children }) => {
      const attrsEntries = Object.entries(attrs);
      const attrsStr = attrsEntries
        .map(([key, value]) => {
          if (key === "stroke" && value === "currentColor") {
            return `stroke={finalColor}`;
          } else if (key === "stroke" && value !== "currentColor") {
            return `stroke=${JSON.stringify(value)}`;
          } else if (key === "fill" && value === "currentColor") {
            return `fill={finalColor}`;
          } else if (key === "fill" && value !== "currentColor") {
            return `fill=${JSON.stringify(value)}`;
          } else if (key === "stroke-width") {
            return `stroke-width={finalAbsoluteStrokeWidth ? finalStrokeWidth : (typeof finalStrokeWidth !== 'undefined' ? finalStrokeWidth : ${JSON.stringify(
              value
            )})}`;
          } else {
            return `${key}=${JSON.stringify(value)}`;
          }
        })
        .join(" ");

      // Add fill={finalColor} if no fill or stroke present
      const needsDefaultFill =
        !hasStroke &&
        !hasFill &&
        (tag === "path" ||
          tag === "circle" ||
          tag === "rect" ||
          tag === "polygon" ||
          tag === "polyline" ||
          tag === "ellipse");
      const finalAttrsStr = needsDefaultFill
        ? `${attrsStr} fill={finalColor}`
        : attrsStr;

      if (children) {
        return `  <${tag} ${finalAttrsStr}>${children}</${tag}>`;
      } else {
        return `  <${tag} ${finalAttrsStr} />`;
      }
    })
    .join("\n");

  const componentCode = `<script lang="ts">
  import config from '../config';

  /**
   * @component ${iconName}
   * @description SVG icon component from Clicons, renders SVG Element with children.
   * @preview ![img](${iconUrl})
   * @see {@link ${iconUrl}} - Icon preview
   * @see {@link https://clicons.dev} - Clicons documentation
   */

  interface Props {
    /** Size of the icon in pixels */
    size?: number;
    /** Color of the icon */
    color?: string;${
      hasStrokeWidth
        ? `
    /** Stroke width of the icon */
    strokeWidth?: number;
    /** Use absolute stroke width, ignores scaling */
    absoluteStrokeWidth?: boolean;`
        : ""
    }
    /** CSS class name */
    class?: string;
    [key: string]: any;
  }

  let {
    size,
    color,${
      hasStrokeWidth
        ? `
    strokeWidth,
    absoluteStrokeWidth,`
        : ""
    }
    class: className = '',
    ...restProps
  }: Props = $props();

  let finalSize = $derived(size ?? config.defaultSize ?? ${DEFAULT_SIZE});${
    hasStrokeWidth
      ? `
  let finalStrokeWidth = $derived(strokeWidth ?? config.defaultStrokeWidth ?? ${DEFAULT_STROKE_WIDTH});
  let finalAbsoluteStrokeWidth = $derived(absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? ${DEFAULT_ABSOLUTE_STROKE_WIDTH});`
      : ""
  }
  let finalColor = $derived(color ?? config.defaultColor ?? '${DEFAULT_COLOR}');
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={finalSize}
  height={finalSize}
  viewBox="${viewBox}"
  fill="none"
  class={className}
  {...restProps}
>
${elementsCode}
</svg>
`;

  return componentCode;
}

/**
 * Get the proper component name from filename
 */
function getComponentName(filename) {
  return filename.replace(".svg", "");
}

/**
 * Main generator function
 */
async function generateIcons() {
  console.log("🚀 Starting icon generation...");
  console.log(`📂 Reading from: ${SVG_ICONS_DIR}`);
  console.log(`📝 Writing to: ${SVELTE_SRC_DIR}`);

  try {
    const files = fs
      .readdirSync(SVG_ICONS_DIR)
      .filter((f) => f.endsWith("Icon.svg"))
      .sort();

    console.log(`\n📊 Found ${files.length} icons to generate\n`);

    const exports = [];
    let successCount = 0;
    let skipCount = 0;

    for (let i = 0; i < files.length; i++) {
      const filename = files[i];
      const filepath = path.join(SVG_ICONS_DIR, filename);
      const componentName = getComponentName(filename);

      const svgData = parseSVGFile(filepath);
      if (!svgData) {
        console.log(`⚠️  Skipped: ${componentName} (could not parse)`);
        skipCount++;
        continue;
      }

      try {
        const componentCode = generateComponent(componentName, svgData);
        const componentPath = path.join(
          SVELTE_SRC_DIR,
          `${componentName}.svelte`
        );
        fs.writeFileSync(componentPath, componentCode);

        exports.push({
          name: componentName,
          path: `./icons/${componentName}.svelte`,
        });

        successCount++;
        if ((i + 1) % 100 === 0) {
          console.log(
            `✅ Progress: ${i + 1}/${files.length} components generated`
          );
        }
      } catch (error) {
        console.error(`❌ Error generating ${componentName}:`, error.message);
        skipCount++;
      }
    }

    console.log("\n📦 Generating index file...");
    generateIndexFile(exports);

    console.log(`\n✨ Generation complete!`);
    console.log(`   ✅ Generated: ${successCount} components`);
    console.log(`   ⏭️  Skipped: ${skipCount} components`);
    console.log(`   📦 Total exports: ${exports.length}`);
  } catch (error) {
    console.error("❌ Error during generation:", error);
    process.exit(1);
  }
}

/**
 * Generate the index.ts file with all exports
 */
function generateIndexFile(exports) {
  const indexContent = exports
    .map(
      ({ name, path: importPath }) =>
        `export { default as ${name} } from '${importPath}';\nexport { default as ${name.replace(
          /Icon$/,
          ""
        )} } from '${importPath}';`
    )
    .join("\n");

  fs.writeFileSync(OUTPUT_INDEX, indexContent + "\n");
  console.log(`✅ Created ${OUTPUT_INDEX}`);
}

generateIcons().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
