import React from 'react';
import config from '../config';

interface ShoppingBasketFavorite2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ShoppingBasketFavorite2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/shopping-basket-favorite2)
 * @see {@link https://clicons.dev/icon/shopping-basket-favorite2}
 */
const ShoppingBasketFavorite2Icon = React.forwardRef<SVGSVGElement, ShoppingBasketFavorite2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10 22C7.66701 22 6.58014 22 5.76809 21.2752C4.95603 20.5505 4.75097 19.3264 4.34085 16.8781L3.17786 9.93557C2.98869 8.8063 2.89411 8.24167 3.18537 7.87083C3.47662 7.5 4.01468 7.5 5.09079 7.5H18.9092C19.9853 7.5 20.5234 7.5 20.8146 7.87083C21.1059 8.24167 21.0113 8.8063 20.8221 9.93557L20.5601 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.1418 14.4418C14.3486 13.7108 15.4018 14.0054 16.0345 14.4747C16.294 14.6671 16.4237 14.7633 16.5 14.7633C16.5763 14.7633 16.706 14.6671 16.9655 14.4747C17.5982 14.0054 18.6514 13.7108 19.8582 14.4418C21.4419 15.4013 21.8002 18.5666 18.1472 21.237C17.4514 21.7457 17.1035 22 16.5 22C15.8965 22 15.5486 21.7457 14.8528 21.237C11.1998 18.5666 11.5581 15.4013 13.1418 14.4418Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 7.5V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V7.5'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 17.5H9.5'
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

ShoppingBasketFavorite2Icon.displayName = 'ShoppingBasketFavorite2Icon';
export default ShoppingBasketFavorite2Icon;
