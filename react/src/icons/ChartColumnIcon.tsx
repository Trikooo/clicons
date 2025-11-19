import React from 'react';
import config from '../config';

interface ChartColumnIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChartColumnIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chart-column)
 * @see {@link https://clicons.dev/icon/chart-column}
 */
const ChartColumnIcon = React.forwardRef<SVGSVGElement, ChartColumnIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 20H6'
    }
  ],
  [
    'path',
    {
      d: 'M18 20H21'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 20H13.5'
    }
  ],
  [
    'path',
    {
      d: 'M3 16L6 16'
    }
  ],
  [
    'path',
    {
      d: 'M18 16H21'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 16H13.5'
    }
  ],
  [
    'path',
    {
      d: 'M3 12H6'
    }
  ],
  [
    'path',
    {
      d: 'M18 12H21'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 12H13.5'
    }
  ],
  [
    'path',
    {
      d: 'M3 8H6'
    }
  ],
  [
    'path',
    {
      d: 'M18 8H21'
    }
  ],
  [
    'path',
    {
      d: 'M3 4L6 4'
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

ChartColumnIcon.displayName = 'ChartColumnIcon';
export default ChartColumnIcon;
