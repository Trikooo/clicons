import React from 'react';
import config from '../config';

interface CoinsBitcoinIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CoinsBitcoinIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/coins-bitcoin)
 * @see {@link https://clicons.dev/icon/coins-bitcoin}
 */
const CoinsBitcoinIcon = React.forwardRef<SVGSVGElement, CoinsBitcoinIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z'
    }
  ],
  [
    'path',
    {
      d: 'M3.1004 11C2.4033 12.1065 2 13.4168 2 14.8212C2 18.7859 5.21417 22 9.17905 22C10.5834 22 11.8935 21.5968 13 20.8998'
    }
  ],
  [
    'path',
    {
      d: 'M12 10H15.5M12 10V6.5H14M12 10V13.5H14M15.5 10C16.3284 10 17 9.2165 17 8.25C17 7.2835 16.3284 6.5 15.5 6.5H14M15.5 10C16.3284 10 17 10.7835 17 11.75C17 12.7165 16.3284 13.5 15.5 13.5H14M14 13.5V14.5M14 6.5V5.5'
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

CoinsBitcoinIcon.displayName = 'CoinsBitcoinIcon';
export default CoinsBitcoinIcon;
