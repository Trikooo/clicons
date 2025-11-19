import React from 'react';
import config from '../config';

interface BatteryEcoChargingIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BatteryEcoChargingIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/battery-eco-charging)
 * @see {@link https://clicons.dev/icon/battery-eco-charging}
 */
const BatteryEcoChargingIcon = React.forwardRef<SVGSVGElement, BatteryEcoChargingIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 19H13C15.8284 19 17.2426 19 18.1213 18.1213C19 17.2426 19 15.8284 19 13C19 11.1366 19 9.887 18.7488 8.99997M5.5 7.0383C4.24209 7.10888 3.44798 7.30933 2.87868 7.87863C2 8.75731 2 10.1715 2 13C2 15.2437 2 16.5975 2.43866 17.5'
    }
  ],
  [
    'path',
    {
      d: 'M19 10.5L20.0272 10.6712C20.7085 10.7847 21.0491 10.8415 21.3076 11.0066C21.5618 11.169 21.7612 11.4044 21.8796 11.6818C22 11.9639 22 12.3093 22 13C22 13.6906 22 14.036 21.8796 14.3181C21.7612 14.5955 21.5618 14.8309 21.3076 14.9933C21.0491 15.1584 20.7085 15.2152 20.0272 15.3287L19 15.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.03319 20C4.54502 14.6 9.00032 13.5 11.0002 11M11.0339 15.8353C13.5787 15.1243 15.2108 13.4224 15.8162 10.8483C16.502 7.93305 15.2725 3.96327 12.1026 4.00026C12.1026 4.00026 12.4253 5.25961 12.143 5.8764C11.1022 8.15057 7.50025 7.99259 6.3325 10.8769C5.63711 12.4908 6.05765 14.2938 7.36616 15.3279C8.18838 15.9778 9.81192 16.1767 11.0339 15.8353Z'
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

BatteryEcoChargingIcon.displayName = 'BatteryEcoChargingIcon';
export default BatteryEcoChargingIcon;
