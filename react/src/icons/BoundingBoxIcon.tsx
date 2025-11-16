import React from 'react';
import config from '../config';

interface BoundingBoxIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BoundingBoxIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bounding-box)
 * @see {@link https://clicons.dev/icon/bounding-box}
 */
const BoundingBoxIcon = React.forwardRef<SVGSVGElement, BoundingBoxIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 4H10M4 10V6M12 6V10M6 12H10M14 12H18M20 14V18M12 14V18M14 20H18'
    }
  ],
  [
    'circle',
    {
      cx: '4',
      cy: '4',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '4',
      cy: '12',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '4',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '12',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '20',
      cy: '12',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '20',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '20',
      cy: '20',
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

BoundingBoxIcon.displayName = 'BoundingBoxIcon';
export default BoundingBoxIcon;
