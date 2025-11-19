import React from 'react';
import config from '../config';

interface WalletNotFound2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WalletNotFound2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/wallet-not-found2)
 * @see {@link https://clicons.dev/icon/wallet-not-found2}
 */
const WalletNotFound2Icon = React.forwardRef<SVGSVGElement, WalletNotFound2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 2L22 22'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 8.5H15C17.8284 8.5 19.2426 8.5 20.1213 9.37868C21 10.2574 21 11.6716 21 14.5V17'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 8.5H3V15.5C3 18.3284 3 19.7426 3.87868 20.6213C4.75736 21.5 6.17157 21.5 9 21.5H15C17.8284 21.5 19.2426 21.5 20.1213 20.6213'
    }
  ],
  [
    'path',
    {
      d: 'M14.9998 8.5V4.11803C14.9998 3.22442 14.2754 2.5 13.3818 2.5C13.1306 2.5 12.8829 2.55848 12.6582 2.67082L8.6665 4.66667'
    }
  ],
  [
    'path',
    {
      d: 'M3 8.5C3 7.88713 3.34626 7.32687 3.89443 7.05279L6 6'
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

WalletNotFound2Icon.displayName = 'WalletNotFound2Icon';
export default WalletNotFound2Icon;
