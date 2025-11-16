import React from 'react';
import config from '../config';

interface WifiOffIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WifiOffIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/wifi-off)
 * @see {@link https://clicons.dev/icon/wifi-off}
 */
const WifiOffIcon = React.forwardRef<SVGSVGElement, WifiOffIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.5 14.5C9.62137 13.3944 10.9643 12.887 12.5 13.0212'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 11.5C17.0073 10.1794 15.2848 9.27433 13.5 9.00012'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 11.4999C6.59299 10.589 7.778 9.91294 9 9.49988'
    }
  ],
  [
    'path',
    {
      d: 'M22 8.49989C18.0717 5.18273 13.7362 3.92879 9.5 4.73808'
    }
  ],
  [
    'path',
    {
      d: 'M2 8.5C3.22409 7.46632 4.5 6.5 5.5 6'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '18',
      r: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 2L22 22'
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

WifiOffIcon.displayName = 'WifiOffIcon';
export default WifiOffIcon;
