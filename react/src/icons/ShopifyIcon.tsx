import React from 'react';
import config from '../config';

interface ShopifyIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ShopifyIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/shopify)
 * @see {@link https://clicons.dev/icon/shopify}
 */
const ShopifyIcon = React.forwardRef<SVGSVGElement, ShopifyIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16 23V4L4 7.5L3 20.5L16 23Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 5.14833L16 4V23L21 21.5C21 18.8371 20.7998 16.178 20.4012 13.5451L19.1298 5.14833H17.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.0016 4.87502C13.0092 2.85785 12.239 1.26304 11.0023 1.02911C9.44084 0.73373 7.72699 2.71982 7.17435 5.46517C7.09535 5.85761 7.04435 6.24433 7.01953 6.61979'
    }
  ],
  [
    'path',
    {
      d: 'M14.8665 4.33083C14.5732 3.14854 13.9527 2.31296 13.1092 2.14837C11.7258 1.8784 10.2195 3.50662 9.55469 5.8801'
    }
  ],
  [
    'path',
    {
      d: 'M12.7896 9.42437C11.7896 9.0035 9.19076 8.24627 8.50372 10.266C8.1332 11.3553 8.79795 12.5183 10.2171 13.6331C12.2041 15.1939 11.867 16.524 11.5033 17.0001C10.2176 18.6837 7.64621 17.7016 6.78906 17.0001'
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

ShopifyIcon.displayName = 'ShopifyIcon';
export default ShopifyIcon;
