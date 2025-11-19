import React from 'react';
import config from '../config';

interface ShoppingBasketFavorite3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ShoppingBasketFavorite3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/shopping-basket-favorite3)
 * @see {@link https://clicons.dev/icon/shopping-basket-favorite3}
 */
const ShoppingBasketFavorite3Icon = React.forwardRef<SVGSVGElement, ShoppingBasketFavorite3IconProps>(
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
      d: 'M18.5 21C18.5 21 15 18.8824 15 16.8333C15 15.8208 15.7368 15 16.75 15C17.275 15 17.8 15.1765 18.5 15.8824C19.2 15.1765 19.725 15 20.25 15C21.2632 15 22 15.8208 22 16.8333C22 18.8824 18.5 21 18.5 21Z'
    }
  ],
  [
    'path',
    {
      d: 'M13 20H9.58276C7.15525 20 5.94149 20 5.10226 19.2891C4.26302 18.5781 4.06348 17.3809 3.6644 14.9864L2.5 8H21.5L20.8333 12'
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

ShoppingBasketFavorite3Icon.displayName = 'ShoppingBasketFavorite3Icon';
export default ShoppingBasketFavorite3Icon;
