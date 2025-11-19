import React from 'react';
import config from '../config';

interface ChartRelationshipIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChartRelationshipIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chart-relationship)
 * @see {@link https://clicons.dev/icon/chart-relationship}
 */
const ChartRelationshipIcon = React.forwardRef<SVGSVGElement, ChartRelationshipIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 5L18 5'
    }
  ],
  [
    'path',
    {
      d: 'M10 10L14.5 14.5'
    }
  ],
  [
    'path',
    {
      d: 'M5 11L5 18'
    }
  ],
  [
    'circle',
    {
      cx: '6.44444',
      cy: '6.44444',
      r: '4.44444'
    }
  ],
  [
    'circle',
    {
      cx: '5',
      cy: '20',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '16',
      cy: '16',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '20',
      cy: '5',
      r: '2'
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

ChartRelationshipIcon.displayName = 'ChartRelationshipIcon';
export default ChartRelationshipIcon;
