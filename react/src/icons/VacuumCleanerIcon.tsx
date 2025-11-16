import React from 'react';
import config from '../config';

interface VacuumCleanerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name VacuumCleanerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/vacuum-cleaner)
 * @see {@link https://clicons.dev/icon/vacuum-cleaner}
 */
const VacuumCleanerIcon = React.forwardRef<SVGSVGElement, VacuumCleanerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17C7.10457 17 8 17.8954 8 19C8 20.1046 7.10457 21 6 21Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 21H11.9743C12.6141 21 13.0976 20.435 12.9832 19.8211L12.0696 14.9206C11.5383 12.0712 8.99368 10 6.0241 10C5.4585 10 5 10.4472 5 10.9988V14.5'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 21L12.8579 6.93429C11.7236 4.53225 9.3055 3 6.64911 3C4.08148 3 2 5.08148 2 7.64911V7.83772C2 9.7262 3.20843 11.4028 5 12'
    }
  ],
  [
    'path',
    {
      d: 'M22 21H16.5'
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

VacuumCleanerIcon.displayName = 'VacuumCleanerIcon';
export default VacuumCleanerIcon;
