import React from 'react';
import config from '../config';

interface ShoppingCartCheckOut2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ShoppingCartCheckOut2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/shopping-cart-check-out2)
 * @see {@link https://clicons.dev/icon/shopping-cart-check-out2}
 */
const ShoppingCartCheckOut2Icon = React.forwardRef<SVGSVGElement, ShoppingCartCheckOut2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6'
    }
  ],
  [
    'path',
    {
      d: 'M6 6H8M22 6H19'
    }
  ],
  [
    'path',
    {
      d: 'M11 5.5C11.4915 4.9943 12.7998 3 13.5 3M16 5.5C15.5085 4.9943 14.2002 3 13.5 3M13.5 3V11'
    }
  ],
  [
    'circle',
    {
      cx: '6',
      cy: '20',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '17',
      cy: '20',
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M8 20L15 20'
    }
  ],
  [
    'path',
    {
      d: 'M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18'
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

ShoppingCartCheckOut2Icon.displayName = 'ShoppingCartCheckOut2Icon';
export default ShoppingCartCheckOut2Icon;
