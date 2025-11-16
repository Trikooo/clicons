import React from 'react';
import config from '../config';

interface BitcoinCloudIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BitcoinCloudIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bitcoin-cloud)
 * @see {@link https://clicons.dev/icon/bitcoin-cloud}
 */
const BitcoinCloudIcon = React.forwardRef<SVGSVGElement, BitcoinCloudIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.5 17.5C19.9853 17.5 22 15.4853 22 13C22 10.5147 19.9853 8.5 17.5 8.5C17.4925 8.5 17.485 8.50002 17.4776 8.50005M17.4776 8.50005C17.4924 8.33536 17.5 8.16856 17.5 8C17.5 4.96243 15.0376 2.5 12 2.5C9.12324 2.5 6.76233 4.70862 6.52042 7.5227M17.4776 8.50005C17.3753 9.6345 16.9286 10.6696 16.2428 11.5M6.52042 7.5227C3.98398 7.76407 2 9.90034 2 12.5C2 15.0997 3.98398 17.2359 6.52042 17.4773M6.52042 7.5227C6.67826 7.50768 6.83823 7.5 7 7.5C8.12582 7.5 9.16474 7.87209 10.0005 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M10.125 20L10.125 14M12 14V12.5M12 21.5V20M10.125 17H13.875M13.875 17C14.4963 17 15 17.5037 15 18.125V18.875C15 19.4963 14.4963 20 13.875 20H9M13.875 17C14.4963 17 15 16.4963 15 15.875V15.125C15 14.5037 14.4963 14 13.875 14H9'
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

BitcoinCloudIcon.displayName = 'BitcoinCloudIcon';
export default BitcoinCloudIcon;
