import React from 'react';
import config from '../config';

interface BitcoinSafeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BitcoinSafeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bitcoin-safe)
 * @see {@link https://clicons.dev/icon/bitcoin-safe}
 */
const BitcoinSafeIcon = React.forwardRef<SVGSVGElement, BitcoinSafeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 2H13C17.2426 2 19.364 2 20.682 3.31802C22 4.63604 22 6.75736 22 11C22 15.2426 22 17.364 20.682 18.682C19.364 20 17.2426 20 13 20H11C6.75736 20 4.63604 20 3.31802 18.682C2 17.364 2 15.2426 2 11C2 6.75736 2 4.63604 3.31802 3.31802C4.63604 2 6.75736 2 11 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 15C6 14.4692 6 13.6148 6 11.9062V10.0938C6 8.38516 6 7.53082 7 7'
    }
  ],
  [
    'path',
    {
      d: 'M18 22V20'
    }
  ],
  [
    'path',
    {
      d: 'M6 22V20'
    }
  ],
  [
    'path',
    {
      d: 'M12.9375 13.6667L12.9375 8.33333M14.5 8.33333V7M14.5 15V13.6667M12.9375 11H16.0625M16.0625 11C16.5803 11 17 11.4477 17 12V12.6667C17 13.219 16.5803 13.6667 16.0625 13.6667H12M16.0625 11C16.5803 11 17 10.5523 17 10V9.33333C17 8.78105 16.5803 8.33333 16.0625 8.33333H12'
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

BitcoinSafeIcon.displayName = 'BitcoinSafeIcon';
export default BitcoinSafeIcon;
