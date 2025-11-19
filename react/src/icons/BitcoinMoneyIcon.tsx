import React from 'react';
import config from '../config';

interface BitcoinMoneyIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BitcoinMoneyIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bitcoin-money)
 * @see {@link https://clicons.dev/icon/bitcoin-money}
 */
const BitcoinMoneyIcon = React.forwardRef<SVGSVGElement, BitcoinMoneyIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16 4H8C5.17157 4 3.75736 4 2.87868 4.93726C2 5.87452 2 7.38301 2 10.4V13.6C2 16.617 2 18.1255 2.87868 19.0627C3.75736 20 5.17157 20 8 20H16C18.8284 20 20.2426 20 21.1213 19.0627C22 18.1255 22 16.617 22 13.6V10.4C22 7.38301 22 5.87452 21.1213 4.93726C20.2426 4 18.8284 4 16 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.87398 4C6.95625 4.31962 7 4.6547 7 5C7 7.20914 5.20914 9 3 9C2.6547 9 2.31962 8.95625 2 8.87398'
    }
  ],
  [
    'path',
    {
      d: 'M22 8.87398C21.6804 8.95625 21.3453 9 21 9C18.7909 9 17 7.20914 17 5C17 4.6547 17.0438 4.31962 17.126 4'
    }
  ],
  [
    'path',
    {
      d: 'M17.126 20C17.0438 19.6804 17 19.3453 17 19C17 16.7909 18.7909 15 21 15C21.3453 15 21.6804 15.0438 22 15.126'
    }
  ],
  [
    'path',
    {
      d: 'M2 15.126C2.31962 15.0438 2.6547 15 3 15C5.20914 15 7 16.7909 7 19C7 19.3453 6.95625 19.6804 6.87398 20'
    }
  ],
  [
    'path',
    {
      d: 'M10.4375 14.6667L10.4375 9.33333M12 9.33333V8M12 16V14.6667M10.4375 12H13.5625M13.5625 12C14.0803 12 14.5 12.4477 14.5 13V13.6667C14.5 14.219 14.0803 14.6667 13.5625 14.6667H9.5M13.5625 12C14.0803 12 14.5 11.5523 14.5 11V10.3333C14.5 9.78105 14.0803 9.33333 13.5625 9.33333H9.5'
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

BitcoinMoneyIcon.displayName = 'BitcoinMoneyIcon';
export default BitcoinMoneyIcon;
