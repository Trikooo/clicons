import React from 'react';
import config from '../config';

interface AirplaneSeatIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AirplaneSeatIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/airplane-seat)
 * @see {@link https://clicons.dev/icon/airplane-seat}
 */
const AirplaneSeatIcon = React.forwardRef<SVGSVGElement, AirplaneSeatIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.48169 18H17.9722C19.0921 18 20 17.1077 20 16.0071C20 14.5 17.9722 14.0141 17.9722 14.0141C17.9722 14.0141 14.2844 12.5964 10 14C10 14 9.86099 8.87274 7.70985 3.17067C7.28543 2.04566 5.90119 1.66155 4.88539 2.3271C4.21507 2.7663 3.8807 3.55966 4.0387 4.33605L6.49327 16.3979C6.68283 17.3295 7.51507 18 8.48169 18Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 10.5H18'
    }
  ],
  [
    'path',
    {
      d: 'M16 18L13 22M13 22H8M13 22H18'
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

AirplaneSeatIcon.displayName = 'AirplaneSeatIcon';
export default AirplaneSeatIcon;
