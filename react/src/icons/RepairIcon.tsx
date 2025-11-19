import React from 'react';
import config from '../config';

interface RepairIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RepairIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/repair)
 * @see {@link https://clicons.dev/icon/repair}
 */
const RepairIcon = React.forwardRef<SVGSVGElement, RepairIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 11L6 6'
    }
  ],
  [
    'path',
    {
      d: 'M5 7.5L7.5 5L4.5 3.5L3.5 4.5L5 7.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M19.9749 8.97487C20.9858 7.96391 21.2491 6.48836 20.7645 5.23548L19.3425 6.65748H17.3425V4.65748L18.7645 3.23548C17.5116 2.75095 16.0361 3.01416 15.0251 4.02513C14.0138 5.03647 13.7507 6.51274 14.236 7.76593L7.76593 14.236C6.51275 13.7507 5.03647 14.0138 4.02513 15.0251C3.01416 16.0361 2.75095 17.5116 3.23548 18.7645L4.65748 17.3425L6.65748 17.3425L6.65748 19.3425L5.23548 20.7645C6.48836 21.2491 7.96391 20.9858 8.97487 19.9749C9.98546 18.9643 10.2489 17.4895 9.76507 16.2369L16.2369 9.76507C17.4895 10.2489 18.9643 9.98546 19.9749 8.97487Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.797 14.5L17.401 20.1041C17.9288 20.6319 18.7846 20.6319 19.3124 20.1041L20.1041 19.3124C20.632 18.7845 20.632 17.9288 20.1041 17.401L14.5001 11.7969'
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

RepairIcon.displayName = 'RepairIcon';
export default RepairIcon;
