import React from 'react';
import config from '../config';

interface WifiDisconnected3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WifiDisconnected3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/wifi-disconnected3)
 * @see {@link https://clicons.dev/icon/wifi-disconnected3}
 */
const WifiDisconnected3Icon = React.forwardRef<SVGSVGElement, WifiDisconnected3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 18H12.0118'
    }
  ],
  [
    'path',
    {
      d: 'M8.25 15C10.25 13 13.75 13 15.75 15'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 12C18.4235 11.9323 18.3464 11.866 18.2687 11.801M5.5 12C8.06378 9.86352 11.1338 9.0964 14 9.69866'
    }
  ],
  [
    'path',
    {
      d: 'M2 9C5.46566 6.07345 9.24828 4.75279 13 5.03799'
    }
  ],
  [
    'path',
    {
      d: 'M22.0002 5L16.0002 11M22.0002 11L16.0002 5'
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

WifiDisconnected3Icon.displayName = 'WifiDisconnected3Icon';
export default WifiDisconnected3Icon;
