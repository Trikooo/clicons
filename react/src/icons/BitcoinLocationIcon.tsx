import React from 'react';
import config from '../config';

interface BitcoinLocationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BitcoinLocationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bitcoin-location)
 * @see {@link https://clicons.dev/icon/bitcoin-location}
 */
const BitcoinLocationIcon = React.forwardRef<SVGSVGElement, BitcoinLocationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 18.2678C19.2447 18.6638 20 19.184 20 19.7537C20 20.9943 16.4183 22 12 22C7.58172 22 4 20.9943 4 19.7537C4 19.184 4.75527 18.6638 6 18.2678'
    }
  ],
  [
    'path',
    {
      d: 'M10.4375 11.6667L10.4375 6.33333M12 6.33333V5M12 13V11.6667M10.4375 9H13.5625M13.5625 9C14.0803 9 14.5 9.44772 14.5 10V10.6667C14.5 11.219 14.0803 11.6667 13.5625 11.6667H9.5M13.5625 9C14.0803 9 14.5 8.55228 14.5 8V7.33333C14.5 6.78105 14.0803 6.33333 13.5625 6.33333H9.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.3471 18.4619C12.9858 18.8071 12.5028 19 12.0001 19C11.4974 19 11.0144 18.8071 10.653 18.4619C7.34382 15.2821 2.90906 11.7299 5.07176 6.57272C6.24111 3.78428 9.04808 2 12.0001 2C14.9521 2 17.7591 3.78428 18.9284 6.57272C21.0884 11.7234 16.6645 15.293 13.3471 18.4619Z'
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

BitcoinLocationIcon.displayName = 'BitcoinLocationIcon';
export default BitcoinLocationIcon;
