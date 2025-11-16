import React from 'react';
import config from '../config';

interface WallLampIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WallLampIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/wall-lamp)
 * @see {@link https://clicons.dev/icon/wall-lamp}
 */
const WallLampIcon = React.forwardRef<SVGSVGElement, WallLampIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.99847 14.0034V21.9997'
    }
  ],
  [
    'path',
    {
      d: 'M3.99847 18.3026L7.95839 19.8479C10.4759 20.8303 11.7348 21.3216 12.6312 20.7699C13.5277 20.2182 13.5277 18.9524 13.5277 16.4205V8.0061'
    }
  ],
  [
    'path',
    {
      d: 'M13.5512 2.99895V2.00024'
    }
  ],
  [
    'path',
    {
      d: 'M7.07806 8.00604H20.0015M9.34851 6.21058C8.70062 6.81563 8.57262 6.90994 8.39517 7.07597C8.14082 7.31396 8.0538 7.67835 8.14236 8.01464L10.196 15.8126C10.3301 16.3218 10.751 16.7057 11.2719 16.7938C12.7667 17.0466 14.2916 17.0556 15.786 16.7918C16.2798 16.7046 16.6788 16.3416 16.8109 15.8596L18.9668 7.98768C19.0519 7.67688 18.9918 7.33475 18.7674 7.10279C18.5846 6.91382 18.4566 6.84432 17.7779 6.21058C17.0255 5.50786 16.3052 4.23972 16.001 3.85472C15.6968 3.46971 15.4628 3.28072 15.0767 3.19345C14.0804 2.96823 13.0461 2.96823 12.0497 3.19345C11.6637 3.28072 11.4646 3.42312 11.1255 3.85472C10.7863 4.28631 10.101 5.50786 9.34851 6.21058Z'
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

WallLampIcon.displayName = 'WallLampIcon';
export default WallLampIcon;
