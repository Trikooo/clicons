#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_ICONS_DIR = path.join(__dirname, "..", "svg-icons");
const REACT_SRC_DIR = path.join(__dirname, "src", "icons");
const OUTPUT_INDEX = path.join(__dirname, "src", "index.ts");

const DEFAULT_SIZE = 24;
const DEFAULT_STROKE_WIDTH = 2;
const DEFAULT_ABSOLUTE_STROKE_WIDTH = false;
const DEFAULT_COLOR = "currentColor";

// Create directories
if (!fs.existsSync(REACT_SRC_DIR)) {
  fs.mkdirSync(REACT_SRC_DIR, { recursive: true });
}

function parseSVGFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const svgMatch = content.match(/<svg[^>]*>/);
  if (!svgMatch) return null;

  const svgTag = svgMatch[0];

  // Extract attributes from root SVG
  const viewBoxMatch = svgTag.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

  const strokeMatch = svgTag.match(/stroke="([^"]*)"/);
  const fillMatch = svgTag.match(/fill="([^"]*)"/);
  const strokeWidthMatch = svgTag.match(/stroke-width="([^"]*)"/);
  const strokeLinecapMatch = svgTag.match(/stroke-linecap="([^"]*)"/);
  const strokeLinejoinMatch = svgTag.match(/stroke-linejoin="([^"]*)"/);

  // Extract content between svg tags
  const contentMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  const svgContent = contentMatch ? contentMatch[1].trim() : "";

  return {
    content: svgContent,
    viewBox,
    rootAttrs: {
      stroke: strokeMatch ? strokeMatch[1] : null,
      fill: fillMatch ? fillMatch[1] : null,
      strokeWidth: strokeWidthMatch ? strokeWidthMatch[1] : null,
      strokeLinecap: strokeLinecapMatch ? strokeLinecapMatch[1] : null,
      strokeLinejoin: strokeLinejoinMatch ? strokeLinejoinMatch[1] : null,
    },
  };
}

function parseAttributes(attrsString) {
  const attrs = {};
  const attrRegex = /(\w+(?:-\w+)*)="([^"]*)"/g;
  let match;

  while ((match = attrRegex.exec(attrsString)) !== null) {
    const attrName = match[1];
    const attrValue = match[2];

    // Skip data attributes, class attributes, and attributes containing 'bstatus'
    if (
      attrName.startsWith("data-") ||
      attrName === "class" ||
      attrName.includes("bstatus")
    ) {
      continue;
    }

    // Convert kebab-case to camelCase
    const camelName = attrName.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    attrs[camelName] = attrValue;
  }

  return attrs;
}

function parseSVGElements(svgContent) {
  const elements = [];
  let position = 0;

  while (position < svgContent.length) {
    // Find next opening tag
    const tagMatch = svgContent.slice(position).match(/<(\w+)([^>]*?)(\/?)>/);
    if (!tagMatch) break;

    const fullMatch = tagMatch[0];
    const tagName = tagMatch[1];
    const attrsString = tagMatch[2];
    const isSelfClosing = tagMatch[3] === "/";

    position +=
      svgContent.slice(position).indexOf(fullMatch) + fullMatch.length;

    const attrs = parseAttributes(attrsString);

    if (isSelfClosing) {
      elements.push([tagName, attrs]);
    } else {
      // Find closing tag
      const closingTag = `</${tagName}>`;
      const closingIndex = svgContent.indexOf(closingTag, position);

      if (closingIndex !== -1) {
        const innerContent = svgContent.slice(position, closingIndex).trim();
        position = closingIndex + closingTag.length;

        // Check if inner content has nested elements
        if (innerContent.includes("<")) {
          const nestedElements = parseSVGElements(innerContent);
          elements.push([tagName, attrs, nestedElements]);
        } else if (innerContent) {
          elements.push([tagName, attrs, innerContent]);
        } else {
          elements.push([tagName, attrs]);
        }
      } else {
        // No closing tag found, treat as self-closing
        elements.push([tagName, attrs]);
      }
    }
  }

  return elements;
}

function isValidStrokeOrFill(value) {
  if (!value) return false;
  if (value === "none") return false;
  if (value === "0") return false;
  return true;
}

function analyzeIconCapabilities(elements, rootAttrs) {
  let hasStroke = false;
  let hasFill = false;
  let hasStrokeWidth = false;
  let detectedStrokeLinecap = null;
  let detectedStrokeLinejoin = null;
  let maxStrokeWidth = 0;
  let hasAnyExplicitStyling = false;
  let strokeCount = 0;
  let fillCount = 0;

  // Check root strokeWidth first to determine if stroke should be ignored
  let rootStrokeWidth = 0;
  if (rootAttrs.strokeWidth) {
    rootStrokeWidth = parseFloat(rootAttrs.strokeWidth);
  }

  // Check root attributes
  if (isValidStrokeOrFill(rootAttrs.stroke)) {
    hasStroke = true;
    hasAnyExplicitStyling = true;
    hasStrokeWidth = true;
  }
  if (isValidStrokeOrFill(rootAttrs.fill)) {
    hasFill = true;
    hasAnyExplicitStyling = true;
  }
  if (rootStrokeWidth > 0) {
    hasStrokeWidth = true;
    maxStrokeWidth = Math.max(maxStrokeWidth, rootStrokeWidth);
  }
  if (rootAttrs.strokeLinecap) detectedStrokeLinecap = rootAttrs.strokeLinecap;
  if (rootAttrs.strokeLinejoin)
    detectedStrokeLinejoin = rootAttrs.strokeLinejoin;

  // Recursively check all elements
  function checkElement(el) {
    const attrs = el[1];

    // Check strokeWidth for this element
    let elemStrokeWidth = 0;
    if (attrs.strokeWidth) {
      elemStrokeWidth = parseFloat(attrs.strokeWidth);
    }

    if (isValidStrokeOrFill(attrs.stroke)) {
      hasStroke = true;
      hasAnyExplicitStyling = true;
      hasStrokeWidth = true;
      strokeCount++;
    }
    if (isValidStrokeOrFill(attrs.fill)) {
      hasFill = true;
      hasAnyExplicitStyling = true;
      fillCount++;
    }
    if (elemStrokeWidth > 0) {
      hasStrokeWidth = true;
      maxStrokeWidth = Math.max(maxStrokeWidth, elemStrokeWidth);
    }
    if (attrs.strokeLinecap && !detectedStrokeLinecap)
      detectedStrokeLinecap = attrs.strokeLinecap;
    if (attrs.strokeLinejoin && !detectedStrokeLinejoin)
      detectedStrokeLinejoin = attrs.strokeLinejoin;

    // Check nested elements
    if (el[2] && Array.isArray(el[2])) {
      el[2].forEach(checkElement);
    }
  }

  elements.forEach(checkElement);

  // If no explicit styling found anywhere, default to fill
  if (!hasAnyExplicitStyling) {
    hasFill = true;
  }

  // Detect mixed styling (some elements have stroke, others have fill)
  const hasMixedStyling = strokeCount > 0 && fillCount > 0;

  return {
    hasStroke,
    hasFill,
    hasStrokeWidth,
    strokeLinecap: detectedStrokeLinecap,
    strokeLinejoin: detectedStrokeLinejoin,
    defaultStrokeWidth: DEFAULT_STROKE_WIDTH,
    hasMixedStyling,
  };
}

function shouldPreserveAttribute(attrName, attrValue, capabilities) {
  // Preserve fillRule, clipRule, and other non-color attributes
  const preserveAttrs = [
    "fillRule",
    "clipRule",
    "clipPath",
    "opacity",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeMiterlimit",
  ];
  if (preserveAttrs.includes(attrName)) return true;

  // For mixed styling icons, preserve original stroke/fill to maintain element-specific styling
  if (
    capabilities.hasMixedStyling &&
    (attrName === "stroke" || attrName === "fill")
  ) {
    return true;
  }

  // For non-mixed styling, always remove stroke/fill to let component apply finalColor
  if (
    !capabilities.hasMixedStyling &&
    (attrName === "stroke" || attrName === "fill")
  ) {
    return false;
  }

  return false;
}

function cleanAttributes(elements, capabilities) {
  function cleanElement(el) {
    const tag = el[0];
    const attrs = { ...el[1] };
    const children = el[2];

    // Remove attributes that will be uniformly applied
    const attrsToCheck = [
      "stroke",
      "fill",
      "strokeWidth",
      "strokeLinecap",
      "strokeLinejoin",
    ];

    attrsToCheck.forEach((attr) => {
      if (
        attrs[attr] &&
        !shouldPreserveAttribute(attr, attrs[attr], capabilities)
      ) {
        delete attrs[attr];
      }
    });

    if (children && Array.isArray(children)) {
      return [tag, attrs, children.map(cleanElement)];
    } else if (children) {
      return [tag, attrs, children];
    } else {
      return [tag, attrs];
    }
  }

  return elements.map(cleanElement);
}

function generateRenderLogic(capabilities) {
  const {
    hasStroke,
    hasFill,
    hasStrokeWidth,
    strokeLinecap,
    strokeLinejoin,
    hasMixedStyling,
  } = capabilities;

  const parts = [];

  parts.push(`    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {`);

  if (hasMixedStyling) {
    // For mixed styling, only apply color to existing attributes, don't add new ones
    parts.push(
      `        // Mixed styling: preserve element-specific stroke/fill`
    );
    parts.push(
      `        if (processedAttrs.stroke === 'currentColor') processedAttrs.stroke = finalColor;`
    );
    parts.push(
      `        if (processedAttrs.fill === 'currentColor') processedAttrs.fill = finalColor;`
    );
  } else {
    // Uniform styling: apply to all elements
    // Handle stroke
    if (hasStroke) {
      parts.push(
        `        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;`
      );
    }

    // Handle fill
    if (hasFill) {
      parts.push(
        `        if (!processedAttrs.fill) processedAttrs.fill = finalColor;`
      );
    } else if (hasStroke) {
      parts.push(
        `        if (!processedAttrs.fill) processedAttrs.fill = 'none';`
      );
    }
  }

  // Handle strokeWidth
  if (hasStrokeWidth) {
    parts.push(`
        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }`);
  }

  // Handle strokeLinecap
  if (strokeLinecap) {
    parts.push(
      `        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = '${strokeLinecap}';`
    );
  }

  // Handle strokeLinejoin
  if (strokeLinejoin) {
    parts.push(
      `        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = '${strokeLinejoin}';`
    );
  }

  parts.push(`      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };`);

  return parts.join("\n");
}

function toKebabCase(str) {
  return str
    .replace(/Icon$/, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function generateComponent(iconName, svgData) {
  const { content: svgContent, viewBox, rootAttrs } = svgData;
  const kebabName = toKebabCase(iconName);
  const iconUrl = `https://clicons.dev/icon/${kebabName}`;

  const elements = parseSVGElements(svgContent);
  const capabilities = analyzeIconCapabilities(elements, rootAttrs);

  const { hasStrokeWidth, defaultStrokeWidth } = capabilities;

  // Clean attributes while preserving important non-color attributes
  const cleanedElements = cleanAttributes(elements, capabilities);

  // Generate icon data string
  const iconDataStr = JSON.stringify(cleanedElements, null, 2)
    .replace(/"(\w+)":/g, "$1:")
    .replace(/"/g, "'");

  // Build interface
  const interfaceProps = ["size?: number", "color?: string"];
  if (hasStrokeWidth) {
    interfaceProps.push(
      "strokeWidth?: number",
      "absoluteStrokeWidth?: boolean"
    );
  }

  // Build component props destructuring
  const componentProps = ["size", "color"];
  if (hasStrokeWidth) {
    componentProps.push("strokeWidth", "absoluteStrokeWidth");
  }

  // Build prop assignments
  const propAssignments = [
    `    const finalSize = size ?? config.defaultSize ?? ${DEFAULT_SIZE};`,
    `    const finalColor = color ?? config.defaultColor ?? '${DEFAULT_COLOR}';`,
  ];

  if (hasStrokeWidth) {
    propAssignments.push(
      `    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? ${defaultStrokeWidth};`,
      `    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? ${DEFAULT_ABSOLUTE_STROKE_WIDTH};`
    );
  }

  const renderLogic = generateRenderLogic(capabilities);

  return `import React from 'react';
import config from '../config';

interface ${iconName}Props extends React.SVGAttributes<SVGSVGElement> {
  ${interfaceProps.join(";\n  ")};
}

/**
 * @name ${iconName}
 * @description SVG icon component from Clicons.
 * @preview ![img](${iconUrl})
 * @see {@link ${iconUrl}}
 */
const ${iconName} = React.forwardRef<SVGSVGElement, ${iconName}Props>(
  ({ ${componentProps.join(", ")}, className = '', ...rest }, ref) => {
${propAssignments.join("\n")}

    const iconData = ${iconDataStr};

${renderLogic}

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="${viewBox}"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

${iconName}.displayName = '${iconName}';
export default ${iconName};
`;
}

function getComponentName(filename) {
  return filename.replace(".svg", "");
}

async function generateIcons() {
  // Check if directory exists
  if (!fs.existsSync(SVG_ICONS_DIR)) {
    console.error(`❌ Directory not found: ${SVG_ICONS_DIR}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(SVG_ICONS_DIR)
    .filter((f) => f.endsWith(".svg"))
    .sort();

  if (files.length === 0) {
    console.error(`❌ No SVG files found in ${SVG_ICONS_DIR}`);
    process.exit(1);
  }

  const exportsArr = [];
  let successCount = 0;
  let skipCount = 0;
  const errors = [];

  for (const filename of files) {
    const componentName = getComponentName(filename);

    try {
      const svgData = parseSVGFile(path.join(SVG_ICONS_DIR, filename));

      if (!svgData) {
        skipCount++;
        errors.push(`${filename}: Failed to parse SVG structure`);
        continue;
      }

      const componentCode = generateComponent(componentName, svgData);
      const outputPath = path.join(REACT_SRC_DIR, `${componentName}.tsx`);

      fs.writeFileSync(outputPath, componentCode);

      exportsArr.push({
        name: componentName,
        baseName: componentName.replace(/Icon$/, ""),
        path: `./icons/${componentName}`,
      });

      successCount++;
    } catch (err) {
      skipCount++;
      errors.push(`${filename}: ${err.message}`);
    }
  }

  // Generate index file with intentional duplicate exports
  const indexContent = exportsArr
    .map(
      ({ name, baseName, path }) =>
        `export { default as ${name} } from '${path}';\nexport { default as ${baseName} } from '${path}';`
    )
    .join("\n");

  fs.writeFileSync(OUTPUT_INDEX, indexContent + "\n");

  console.log(`\n✅ Generated: ${successCount} components`);
  console.log(`⏭️  Skipped: ${skipCount} files`);

  if (errors.length > 0) {
    console.log(`\n⚠️  Errors:`);
    errors.forEach((err) => console.log(`   ${err}`));
  }

  console.log(`\n📦 Output: ${REACT_SRC_DIR}`);
  console.log(`📄 Index: ${OUTPUT_INDEX}`);
}

generateIcons().catch((err) => {
  console.error("❌ Fatal error:", err);
  process.exit(1);
});
