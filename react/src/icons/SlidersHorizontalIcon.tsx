import React from 'react';
import config from '../config';

interface SlidersHorizontalIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SlidersHorizontalIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sliders-horizontal)
 * @see {@link https://clicons.dev/icon/sliders-horizontal}
 */
const SlidersHorizontalIcon = React.forwardRef<SVGSVGElement, SlidersHorizontalIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.99963 5.00055L9.99963 5.00031'
    }
  ],
  [
    'path',
    {
      d: 'M12.9996 5.00031L19.9996 5.00031'
    }
  ],
  [
    'path',
    {
      d: 'M15.9996 9.00031L15.9996 15.0003'
    }
  ],
  [
    'path',
    {
      d: 'M9.99963 2.00031L9.99963 8.00031'
    }
  ],
  [
    'path',
    {
      d: 'M11.9996 16.0003L11.9996 22.0003'
    }
  ],
  [
    'path',
    {
      d: 'M15.9996 12.0001L19.9996 12.0003'
    }
  ],
  [
    'path',
    {
      d: 'M3.99963 12.0005L12.9996 12.0003'
    }
  ],
  [
    'path',
    {
      d: 'M11.9996 19.0003L19.9996 19.0003'
    }
  ],
  [
    'path',
    {
      d: 'M3.99963 19.0005L8.99963 19.0003'
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

SlidersHorizontalIcon.displayName = 'SlidersHorizontalIcon';
export default SlidersHorizontalIcon;
