import React from 'react';
import config from '../config';

interface PlaneIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PlaneIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/plane)
 * @see {@link https://clicons.dev/icon/plane}
 */
const PlaneIcon = React.forwardRef<SVGSVGElement, PlaneIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 9C8.89837 9 7.77572 11.6032 7.1393 14.2373C6.33194 17.5789 9.1763 19.0941 12 18.9955C14.8237 19.0941 17.6681 17.5789 16.8607 14.2373C16.2243 11.6032 15.1016 9 12 9Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9998 14H12.0088'
    }
  ],
  [
    'path',
    {
      d: 'M3.99981 21H4.00879'
    }
  ],
  [
    'path',
    {
      d: 'M19.9998 21H20.0088'
    }
  ],
  [
    'path',
    {
      d: 'M7 15L2 17M17 15L22 17'
    }
  ],
  [
    'path',
    {
      d: 'M12 9L12 3'
    }
  ],
  [
    'path',
    {
      d: 'M4 18L4 16.5'
    }
  ],
  [
    'path',
    {
      d: 'M20 18L20 16.5'
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

PlaneIcon.displayName = 'PlaneIcon';
export default PlaneIcon;
