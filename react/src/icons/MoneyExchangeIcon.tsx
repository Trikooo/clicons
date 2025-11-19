import React from 'react';
import config from '../config';

interface MoneyExchangeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MoneyExchangeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/money-exchange)
 * @see {@link https://clicons.dev/icon/money-exchange}
 */
const MoneyExchangeIcon = React.forwardRef<SVGSVGElement, MoneyExchangeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.01733 13.5C4.2169 13.5 6.00001 15.2831 6.00001 17.4827'
    }
  ],
  [
    'path',
    {
      d: 'M6.00001 3.51733C6.00001 5.7169 4.2169 7.50001 2.01733 7.50001'
    }
  ],
  [
    'path',
    {
      d: 'M18 3.51733C18 5.69765 19.769 7.46876 21.9423 7.4996'
    }
  ],
  [
    'path',
    {
      d: 'M22 10V9.5C22 6.67157 22 5.25736 21.1213 4.37868C20.2426 3.5 18.8284 3.5 16 3.5H8C5.17157 3.5 3.75736 3.5 2.87868 4.37868C2 5.25736 2 6.67157 2 9.5V11.5C2 14.3284 2 15.7426 2.87868 16.6213C3.75736 17.5 5.17157 17.5 8 17.5H13'
    }
  ],
  [
    'path',
    {
      d: 'M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 15.5C16 14.9477 16.4477 14.5 17 14.5H22L20.5 12.5M22 17.5C22 18.0523 21.5523 18.5 21 18.5H16L17.5 20.5'
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

MoneyExchangeIcon.displayName = 'MoneyExchangeIcon';
export default MoneyExchangeIcon;
