import React from 'react';
import config from '../config';

interface VolleyballIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name VolleyballIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/volleyball)
 * @see {@link https://clicons.dev/icon/volleyball}
 */
const VolleyballIcon = React.forwardRef<SVGSVGElement, VolleyballIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.12046 3C7.67458 4.61905 7.76376 8.58571 11.6875 11.5M11.6875 11.5C16.6295 10.17 20.125 10.65 22 12.3498M11.6875 11.5C12.2525 16.1881 8.875 19.15 7 20'
    }
  ],
  [
    'path',
    {
      d: 'M9 8C11.087 6.11368 16.3261 5.12819 20.5 7.01432'
    }
  ],
  [
    'path',
    {
      d: 'M16.8885 11C17.4777 13.8947 15.7144 19.1883 12 22'
    }
  ],
  [
    'path',
    {
      d: 'M10 17C7.37458 15.7396 4.15837 10.9595 4 6'
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

VolleyballIcon.displayName = 'VolleyballIcon';
export default VolleyballIcon;
