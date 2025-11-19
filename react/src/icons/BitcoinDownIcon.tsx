import React from 'react';
import config from '../config';

interface BitcoinDownIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BitcoinDownIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bitcoin-down)
 * @see {@link https://clicons.dev/icon/bitcoin-down}
 */
const BitcoinDownIcon = React.forwardRef<SVGSVGElement, BitcoinDownIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 2C8.41015 2 5.5 4.91015 5.5 8.5C5.5 12.0898 8.41015 15 12 15C15.5898 15 18.5 12.0899 18.5 8.5C18.5 4.91015 15.5898 2 12 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 19.5C9.99153 20.0057 11.2998 22 12 22M14.5 19.5C14.0085 20.0057 12.7002 22 12 22M12 22V17.5'
    }
  ],
  [
    'path',
    {
      d: 'M10.4375 11.1667L10.4375 5.83333M12 5.83333V4.5M12 12.5V11.1667M10.4375 8.5H13.5625M13.5625 8.5C14.0803 8.5 14.5 8.94772 14.5 9.5V10.1667C14.5 10.719 14.0803 11.1667 13.5625 11.1667H9.5M13.5625 8.5C14.0803 8.5 14.5 8.05228 14.5 7.5V6.83333C14.5 6.28105 14.0803 5.83333 13.5625 5.83333H9.5'
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

BitcoinDownIcon.displayName = 'BitcoinDownIcon';
export default BitcoinDownIcon;
