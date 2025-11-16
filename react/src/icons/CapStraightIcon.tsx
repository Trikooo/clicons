import React from 'react';
import config from '../config';

interface CapStraightIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CapStraightIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cap-straight)
 * @see {@link https://clicons.dev/icon/cap-straight}
 */
const CapStraightIcon = React.forwardRef<SVGSVGElement, CapStraightIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21 5L11.3026 5C8.56425 5 7.19508 5 6.34438 5.87868C5.6596 6.58599 5.52605 7.64032 5.5 9.5M21 19L11.3026 19C8.56424 19 7.19508 19 6.34438 18.1213C5.6596 17.414 5.52605 16.3597 5.5 14.5'
    }
  ],
  [
    'path',
    {
      d: 'M8 12C8 13.3807 6.88071 14.5 5.5 14.5C4.11929 14.5 3 13.3807 3 12C3 10.6193 4.11929 9.5 5.5 9.5C6.88071 9.5 8 10.6193 8 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 12H21'
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

CapStraightIcon.displayName = 'CapStraightIcon';
export default CapStraightIcon;
