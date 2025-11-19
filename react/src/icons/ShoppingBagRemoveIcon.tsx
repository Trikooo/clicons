import React from 'react';
import config from '../config';

interface ShoppingBagRemoveIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ShoppingBagRemoveIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/shopping-bag-remove)
 * @see {@link https://clicons.dev/icon/shopping-bag-remove}
 */
const ShoppingBagRemoveIcon = React.forwardRef<SVGSVGElement, ShoppingBagRemoveIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 6.5C8 8.15685 9.34315 9.5 11 9.5C12.6569 9.5 14 8.15685 14 6.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 16.5L21 21.5M16 21.5L21 16.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.1084 20.5H9.89162C6.02422 20.5 4.09052 20.5 2.89731 19.1594C1.70411 17.8189 1.91058 16.0497 2.32352 12.5113C2.6739 9.50898 3.18586 7.25784 3.66063 5.65851C4.04994 4.34711 4.24459 3.69141 5.04283 3.0957C5.84107 2.5 6.65697 2.5 8.28876 2.5H13.7113C15.3431 2.5 16.159 2.5 16.9572 3.0957C17.7554 3.69141 17.9501 4.34711 18.3394 5.65851C18.8142 7.25784 19.3261 9.50898 19.6765 12.5113C19.7169 12.8574 19.7553 13.1865 19.7906 13.5'
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

ShoppingBagRemoveIcon.displayName = 'ShoppingBagRemoveIcon';
export default ShoppingBagRemoveIcon;
