import React from 'react';
import config from '../config';

interface ThermometerColdIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ThermometerColdIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/thermometer-cold)
 * @see {@link https://clicons.dev/icon/thermometer-cold}
 */
const ThermometerColdIcon = React.forwardRef<SVGSVGElement, ThermometerColdIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.5 22C19.7091 22 21.5 20.2091 21.5 18C21.5 16.9335 21.0827 15.9646 20.4024 15.2475C19.8957 14.7134 19.6423 14.4463 19.5712 14.2679C19.5 14.0895 19.5 13.8535 19.5 13.3815V4C19.5 2.89543 18.6046 2 17.5 2C16.3954 2 15.5 2.89543 15.5 4V13.3815C15.5 13.8535 15.5 14.0895 15.4288 14.2679C15.3577 14.4463 15.1043 14.7134 14.5976 15.2475C13.9173 15.9646 13.5 16.9335 13.5 18C13.5 20.2091 15.2909 22 17.5 22Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.04545 5V8.65625M9.04545 8.65625V14.3438M9.04545 8.65625L11.0909 6.625M9.04545 8.65625L7 6.625M9.04545 14.3438L9.04546 18M9.04545 14.3438L7 16.375M9.04545 14.3438L11.0909 16.375M4.13636 9.46875L6.18182 11.5M6.18182 11.5L4.13636 13.5312M6.18182 11.5H11.5M6.18182 11.5H2.5'
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

ThermometerColdIcon.displayName = 'ThermometerColdIcon';
export default ThermometerColdIcon;
