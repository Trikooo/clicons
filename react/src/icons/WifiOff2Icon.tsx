import React from 'react';
import config from '../config';

interface WifiOff2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WifiOff2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/wifi-off2)
 * @see {@link https://clicons.dev/icon/wifi-off2}
 */
const WifiOff2Icon = React.forwardRef<SVGSVGElement, WifiOff2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 18.5H12.0118'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 15.5C10.1286 13.8714 12.502 13.569 14.5 14.5928'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 12.5C7 10.9999 8.42668 10.3535 10 9.99988'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 12.5001C17.0073 11.1795 15.2848 10.2742 13.5 10'
    }
  ],
  [
    'path',
    {
      d: 'M2 9.50002C3.5 8.00012 4.96138 7.16254 6.5 6.50012'
    }
  ],
  [
    'path',
    {
      d: 'M22 9.49989C18.0717 6.18273 13.7362 4.92879 9.5 5.73808'
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

WifiOff2Icon.displayName = 'WifiOff2Icon';
export default WifiOff2Icon;
