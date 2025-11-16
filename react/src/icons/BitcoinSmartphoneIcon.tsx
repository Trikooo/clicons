import React from 'react';
import config from '../config';

interface BitcoinSmartphoneIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BitcoinSmartphoneIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bitcoin-smartphone)
 * @see {@link https://clicons.dev/icon/bitcoin-smartphone}
 */
const BitcoinSmartphoneIcon = React.forwardRef<SVGSVGElement, BitcoinSmartphoneIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.5988 5C17.4638 4.13105 17.2083 3.5086 16.7249 3.02513C15.6997 2 14.0498 2 10.75 2C7.45017 2 5.80025 2 4.77513 3.02513C3.75 4.05025 3.75 5.70017 3.75 9V15C3.75 18.2998 3.75 19.9497 4.77513 20.9749C5.80025 22 7.45017 22 10.75 22C14.0498 22 15.6997 22 16.7249 20.9749C17.2083 20.4914 17.4638 19.869 17.5988 19'
    }
  ],
  [
    'path',
    {
      d: 'M16.1875 14.6667L16.1875 9.33333M17.75 9.33333V8M17.75 16V14.6667M16.1875 12H19.3125M19.3125 12C19.8303 12 20.25 12.4477 20.25 13V13.6667C20.25 14.219 19.8303 14.6667 19.3125 14.6667H15.25M19.3125 12C19.8303 12 20.25 11.5523 20.25 11V10.3333C20.25 9.78105 19.8303 9.33333 19.3125 9.33333H15.25'
    }
  ],
  [
    'path',
    {
      d: 'M10.75 19H10.759'
    }
  ],
  [
    'path',
    {
      d: 'M9.75 5H11.75'
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

BitcoinSmartphoneIcon.displayName = 'BitcoinSmartphoneIcon';
export default BitcoinSmartphoneIcon;
