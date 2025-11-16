import React from 'react';
import config from '../config';

interface StructureAddIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name StructureAddIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/structure-add)
 * @see {@link https://clicons.dev/icon/structure-add}
 */
const StructureAddIcon = React.forwardRef<SVGSVGElement, StructureAddIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.002 5C15.002 3.58579 15.002 2.87868 15.5144 2.43934C16.0267 2 16.8515 2 18.5008 2C20.1502 2 20.975 2 21.4873 2.43934C21.9997 2.87868 21.9997 3.58579 21.9997 5C21.9997 6.41421 21.9997 7.12132 21.4873 7.56066C20.975 8 20.1502 8 18.5008 8C16.8515 8 16.0267 8 15.5144 7.56066C15.002 7.12132 15.002 6.41421 15.002 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.002 19C15.002 17.5858 15.002 16.8787 15.5144 16.4393C16.0267 16 16.8515 16 18.5008 16C20.1502 16 20.975 16 21.4873 16.4393C21.9997 16.8787 21.9997 17.5858 21.9997 19C21.9997 20.4142 21.9997 21.1213 21.4873 21.5607C20.975 22 20.1502 22 18.5008 22C16.8515 22 16.0267 22 15.5144 21.5607C15.002 21.1213 15.002 20.4142 15.002 19Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.0224 9.99988L7.0224 14M9.01297 12L4.98828 12'
    }
  ],
  [
    'path',
    {
      d: 'M7.02803 17.0364C9.80494 17.0364 12.0561 14.7846 12.0561 12.0068C12.0561 9.22901 9.80494 6.97717 7.02803 6.97717M7.02803 17.0364C4.25113 17.0364 2 14.7846 2 12.0068C2 9.22901 4.25113 6.97717 7.02803 6.97717M7.02803 17.0364C6.95809 19.1663 8.56235 19.9524 9.67527 19.9932H12.0021M7.02803 6.97717C6.95737 4.8171 8.54755 4.05751 9.67528 4.00977H12.0021'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

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
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

StructureAddIcon.displayName = 'StructureAddIcon';
export default StructureAddIcon;
