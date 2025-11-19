import React from 'react';
import config from '../config';

interface BitcoinGraphIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BitcoinGraphIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bitcoin-graph)
 * @see {@link https://clicons.dev/icon/bitcoin-graph}
 */
const BitcoinGraphIcon = React.forwardRef<SVGSVGElement, BitcoinGraphIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.5 19.5V11.5C13.5 10.5572 13.5 10.0858 13.2071 9.79289C12.9142 9.5 12.4428 9.5 11.5 9.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V19.5C9.5 20.4428 9.5 20.9142 9.79289 21.2071C10.0858 21.5 10.5572 21.5 11.5 21.5C12.4428 21.5 12.9142 21.5 13.2071 21.2071C13.5 20.9142 13.5 20.4428 13.5 19.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 12.5V19.5C20.5 20.4428 20.5 20.9142 20.2071 21.2071C19.9142 21.5 19.4428 21.5 18.5 21.5C17.5572 21.5 17.0858 21.5 16.7929 21.2071C16.5 20.9142 16.5 20.4428 16.5 19.5V12.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.4375 9.16667L17.4375 3.83333M19 3.83333V2.5M19 10.5V9.16667M17.4375 6.5H20.5625M20.5625 6.5C21.0803 6.5 21.5 6.94772 21.5 7.5V8.16667C21.5 8.71895 21.0803 9.16667 20.5625 9.16667H16.5M20.5625 6.5C21.0803 6.5 21.5 6.05228 21.5 5.5V4.83333C21.5 4.28105 21.0803 3.83333 20.5625 3.83333H16.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 19.5V14.5C6.5 13.5572 6.5 13.0858 6.20711 12.7929C5.91421 12.5 5.44281 12.5 4.5 12.5C3.55719 12.5 3.08579 12.5 2.79289 12.7929C2.5 13.0858 2.5 13.5572 2.5 14.5V19.5C2.5 20.4428 2.5 20.9142 2.79289 21.2071C3.08579 21.5 3.55719 21.5 4.5 21.5C5.44281 21.5 5.91421 21.5 6.20711 21.2071C6.5 20.9142 6.5 20.4428 6.5 19.5Z'
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

BitcoinGraphIcon.displayName = 'BitcoinGraphIcon';
export default BitcoinGraphIcon;
