import React from 'react';
import config from '../config';

interface BitcoinFlashdiskIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BitcoinFlashdiskIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bitcoin-flashdisk)
 * @see {@link https://clicons.dev/icon/bitcoin-flashdisk}
 */
const BitcoinFlashdiskIcon = React.forwardRef<SVGSVGElement, BitcoinFlashdiskIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.5088 22C9.57782 22 9.11235 22 8.72528 21.9231C7.13574 21.6075 5.89317 20.3671 5.57699 18.7804C5.5 18.394 5.5 17.9293 5.5 17V11.5C5.5 9.61438 5.5 8.67157 6.08681 8.08579C6.67362 7.5 7.61808 7.5 9.507 7.5H11.5105C13.3994 7.5 14.3439 7.5 14.9307 8.08579C15.3355 8.48987 15.4611 9.06385 15.5 10'
    }
  ],
  [
    'path',
    {
      d: 'M13.625 20.5L13.625 14.5M15.5 14.5V13M15.5 22V20.5M13.625 17.5H17.375M17.375 17.5C17.9963 17.5 18.5 18.0037 18.5 18.625V19.375C18.5 19.9963 17.9963 20.5 17.375 20.5H12.5M17.375 17.5C17.9963 17.5 18.5 16.9963 18.5 16.375V15.625C18.5 15.0037 17.9963 14.5 17.375 14.5H12.5'
    }
  ],
  [
    'path',
    {
      d: 'M14 7.5V5.5C14 4.09554 14 3.39331 13.6629 2.88886C13.517 2.67048 13.3295 2.48298 13.1111 2.33706C12.6067 2 11.9045 2 10.5 2C9.09554 2 8.39331 2 7.88886 2.33706C7.67048 2.48298 7.48298 2.67048 7.33706 2.88886C7 3.39331 7 4.09554 7 5.5V7.5'
    }
  ],
  [
    'path',
    {
      d: 'M10 4.5H11'
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

BitcoinFlashdiskIcon.displayName = 'BitcoinFlashdiskIcon';
export default BitcoinFlashdiskIcon;
