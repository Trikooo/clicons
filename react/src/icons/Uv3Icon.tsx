import React from 'react';
import config from '../config';

interface Uv3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Uv3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/uv3)
 * @see {@link https://clicons.dev/icon/uv3}
 */
const Uv3Icon = React.forwardRef<SVGSVGElement, Uv3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13'
    }
  ],
  [
    'path',
    {
      d: 'M11.9998 4H12.0088'
    }
  ],
  [
    'path',
    {
      d: 'M18.3671 6.63268L18.3734 6.63903'
    }
  ],
  [
    'path',
    {
      d: 'M5.63658 6.63978L5.64293 6.63343'
    }
  ],
  [
    'path',
    {
      d: 'M21.0039 12.9959L21.0039 13.0049'
    }
  ],
  [
    'path',
    {
      d: 'M3.00391 12.9959L3.00391 13.0049'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 16V19C6.5 19.9428 6.5 20.4142 6.79289 20.7071C7.08579 21 7.55719 21 8.5 21V21C9.44281 21 9.91421 21 10.2071 20.7071C10.5 20.4142 10.5 19.9428 10.5 19V16'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 16L15.5 21L17.5 16'
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

Uv3Icon.displayName = 'Uv3Icon';
export default Uv3Icon;
