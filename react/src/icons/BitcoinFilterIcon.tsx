import React from 'react';
import config from '../config';

interface BitcoinFilterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BitcoinFilterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bitcoin-filter)
 * @see {@link https://clicons.dev/icon/bitcoin-filter}
 */
const BitcoinFilterIcon = React.forwardRef<SVGSVGElement, BitcoinFilterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.23433 7C4.60404 7 3.7889 7 3.32795 7.49503C2.86701 7.99006 2.96811 8.7569 3.17033 10.2906C3.22938 10.7385 3.3276 10.9928 3.62734 11.3402C4.59564 12.4627 6.36901 14.4592 8.85746 16.2744C9.08486 16.4402 9.23409 16.7113 9.25927 17.0112C9.34268 18.0054 9.42401 18.9059 9.5007 19.71C9.62524 21.0158 9.68751 21.6687 10.1633 21.9159C10.639 22.163 11.2333 21.8467 12.4219 21.2141L13.4884 20.6465C13.9287 20.4122 14.1489 20.295 14.2852 20.0974C14.4216 19.8998 14.4494 19.6615 14.5051 19.1851C14.577 18.5699 14.6529 17.8503 14.7307 17.0112C14.7583 16.714 14.907 16.446 15.1326 16.2816C17.6261 14.4642 19.403 12.4641 20.3726 11.3402C20.6724 10.9928 20.7706 10.7385 20.8297 10.2906C21.0319 8.7569 21.133 7.99006 20.672 7.49503C20.2111 7 19.396 7 17.7657 7'
    }
  ],
  [
    'path',
    {
      d: 'M9.625 9.5L9.625 3.5M11.5 3.5V2M11.5 11V9.5M9.625 6.5H13.375M13.375 6.5C13.9963 6.5 14.5 7.00368 14.5 7.625V8.375C14.5 8.99632 13.9963 9.5 13.375 9.5H8.5M13.375 6.5C13.9963 6.5 14.5 5.99632 14.5 5.375V4.625C14.5 4.00368 13.9963 3.5 13.375 3.5H8.5'
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

BitcoinFilterIcon.displayName = 'BitcoinFilterIcon';
export default BitcoinFilterIcon;
