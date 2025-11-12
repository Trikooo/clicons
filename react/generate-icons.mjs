#!/usr/bin/env node

/**
 * Icon Generator Script
 * Converts SVG files into individual React components
 * Usage: node generate-icons.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_ICONS_DIR = path.join(__dirname, "..", "svg-icons");
const REACT_SRC_DIR = path.join(__dirname, "src", "icons");
const OUTPUT_INDEX = path.join(__dirname, "src", "index.ts");

const DEFAULT_SIZE = 16;
const DEFAULT_STROKE_WIDTH = 1.8;
const DEFAULT_ABSOLUTE_STROKE_WIDTH = false;
const DEFAULT_COLOR = "currentColor";

// Ensure output directory exists
if (!fs.existsSync(REACT_SRC_DIR)) {
  fs.mkdirSync(REACT_SRC_DIR, { recursive: true });
}

/**
 * Parse an SVG file to extract its content
 */
function parseSVGFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!match) return null;
  return match[1].trim();
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
  const elementRegex = /<(\w+)([^>]*?)\/>/g;
  let match;

  while ((match = elementRegex.exec(svgContent)) !== null) {
    const tag = match[1];
    const attrsString = match[2];

    const attrs = {};
    const attrRegex = /(\w+(?:-\w+)*)="([^"]*)"/g;
    let attrMatch;

    while ((attrMatch = attrRegex.exec(attrsString)) !== null) {
      const attrName = attrMatch[1];
      const attrValue = attrMatch[2];

      // Convert hyphenated attributes to camelCase for React
      const camelCaseAttr = attrName.replace(/-([a-z])/g, (g) =>
        g[1].toUpperCase()
      );
      attrs[camelCaseAttr] = attrValue;
    }

    elements.push([tag, attrs]);
  }

  return elements;
}

/**
 * Generate React component from SVG content
 */
function generateComponent(iconName, svgContent) {
  const kebabName = toKebabCase(iconName);
  const iconUrl = `https://clicons.dev/icon/${kebabName}`;

  const elements = parseSVGElements(svgContent);
  const iconDataStr = JSON.stringify(elements, null, 2)
    .replace(/"(\w+)":/g, "$1:")
    .replace(/"/g, "'");

  const componentCode = `import React from 'react';
import config from '../config';

interface ${iconName}Props extends React.SVGAttributes<SVGSVGElement> {
  /** Size of the icon in pixels */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Stroke width of the icon */
  strokeWidth?: number;
  /** Use absolute stroke width, ignores scaling */
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ${iconName}
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](${iconUrl})
 * @see {@link ${iconUrl}} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ${iconName} = React.forwardRef<SVGSVGElement, ${iconName}Props>(
  (
    {
      size,
      color,
      strokeWidth,
      absoluteStrokeWidth,
      className = '',
      ...rest
    },
    ref
  ) => {
    const finalSize = size ?? config.defaultSize ?? ${DEFAULT_SIZE};
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? ${DEFAULT_STROKE_WIDTH};
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? ${DEFAULT_ABSOLUTE_STROKE_WIDTH};
    const finalColor = color ?? config.defaultColor ?? '${DEFAULT_COLOR}';

    const iconData = ${iconDataStr};

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(([tag, attrs]: any, index: number) => {
          const { key, ...restAttrs } = attrs;

          const mergedAttrs = {
            ...restAttrs,
            ...(tag === 'path' || tag === 'circle' || tag === 'rect' || tag === 'line' || tag === 'polyline' || tag === 'polygon'
              ? {
                  stroke: restAttrs.stroke ? restAttrs.stroke.replace('currentColor', finalColor) : finalColor,
                  fill: restAttrs.fill ? restAttrs.fill.replace('currentColor', finalColor) : restAttrs.fill,
                  strokeWidth: finalAbsoluteStrokeWidth
                    ? finalStrokeWidth
                    : typeof finalStrokeWidth !== 'undefined'
                      ? finalStrokeWidth
                      : restAttrs.strokeWidth,
                }
              : {}),
          };

          const Element = tag as any;
          return <Element key={index} {...mergedAttrs} />;
        })}
      </svg>
    );
  }
);

${iconName}.displayName = '${iconName}';
export default ${iconName};
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
  console.log(`📝 Writing to: ${REACT_SRC_DIR}`);

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

      const svgContent = parseSVGFile(filepath);
      if (!svgContent) {
        console.log(`⚠️  Skipped: ${componentName} (could not parse)`);
        skipCount++;
        continue;
      }

      try {
        const componentCode = generateComponent(componentName, svgContent);
        const componentPath = path.join(REACT_SRC_DIR, `${componentName}.tsx`);
        fs.writeFileSync(componentPath, componentCode);

        exports.push({
          name: componentName,
          path: `./icons/${componentName}`,
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

// Run the generator
generateIcons().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
