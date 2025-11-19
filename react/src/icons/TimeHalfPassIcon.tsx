import React from 'react';
import config from '../config';

interface TimeHalfPassIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TimeHalfPassIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/time-half-pass)
 * @see {@link https://clicons.dev/icon/time-half-pass}
 */
const TimeHalfPassIcon = React.forwardRef<SVGSVGElement, TimeHalfPassIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.76938 2.5C8.4973 2.59728 8.23058 2.70543 7.96979 2.8239M5.42501 4.46566C5.19851 4.66428 4.98106 4.87255 4.77334 5.08979M3.03178 7.56476C2.84599 7.93804 2.68313 8.32421 2.54498 8.72152M2.01608 11.3914C1.99387 11.7808 1.99471 12.1778 2.01835 12.5673M2.56845 15.2658C2.70147 15.6396 2.85641 16.0035 3.03178 16.3558M4.69086 18.7435C4.93508 19.005 5.19323 19.2539 5.46415 19.4891M7.77635 21.0064C8.17073 21.1954 8.57927 21.3606 9 21.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2'
    }
  ],
  [
    'path',
    {
      d: 'M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5M12 13.5V16M12 10.5V6'
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

TimeHalfPassIcon.displayName = 'TimeHalfPassIcon';
export default TimeHalfPassIcon;
