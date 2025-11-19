import React from 'react';
import config from '../config';

interface ShoppingBasketSecure3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ShoppingBasketSecure3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/shopping-basket-secure3)
 * @see {@link https://clicons.dev/icon/shopping-basket-secure3}
 */
const ShoppingBasketSecure3Icon = React.forwardRef<SVGSVGElement, ShoppingBasketSecure3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 12V16'
    }
  ],
  [
    'path',
    {
      d: 'M8 12V16'
    }
  ],
  [
    'path',
    {
      d: 'M22.5 8H1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18 8L15 3'
    }
  ],
  [
    'path',
    {
      d: 'M6 8L9 3'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 20H9.58276C7.15525 20 5.94149 20 5.10226 19.2891C4.26302 18.5781 4.06348 17.3809 3.6644 14.9864L2.5 8H21.5L21 11'
    }
  ],
  [
    'path',
    {
      d: 'M21.2363 14.5234C20.6055 14.1938 19.8336 14 19 14C18.1664 14 17.3945 14.1938 16.7637 14.5234C16.4544 14.685 16.2997 14.7658 16.1499 15.0198C16 15.2739 16 15.5199 16 16.0118V17.233C16 19.2222 17.5141 20.3281 18.391 20.8018C18.6356 20.9339 18.7578 21 19 21C19.2422 21 19.3644 20.9339 19.609 20.8018C20.4859 20.3281 22 19.2222 22 17.233L22 16.0119C22 15.5199 22 15.2739 21.8501 15.0198C21.7003 14.7658 21.5456 14.685 21.2363 14.5234Z'
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

ShoppingBasketSecure3Icon.displayName = 'ShoppingBasketSecure3Icon';
export default ShoppingBasketSecure3Icon;
