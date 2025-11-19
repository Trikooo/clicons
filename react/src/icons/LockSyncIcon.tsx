import React from 'react';
import config from '../config';

interface LockSyncIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LockSyncIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/lock-sync)
 * @see {@link https://clicons.dev/icon/lock-sync}
 */
const LockSyncIcon = React.forwardRef<SVGSVGElement, LockSyncIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.5433 10.5L22 11C21.497 5.94668 17.2229 2 12.0247 2C6.48823 2 1.99999 6.47715 1.99999 12C1.99999 17.5228 6.48823 22 12.0247 22C16.1355 22 19.6684 19.5318 21.2153 16'
    }
  ],
  [
    'path',
    {
      d: 'M10.3371 10.88C9.25713 10.88 8.71713 11.66 8.59713 12.14C8.47713 12.62 8.47713 14.36 8.54913 15.08C8.78913 15.98 9.38913 16.352 9.97713 16.472C10.5171 16.52 12.7971 16.502 13.4571 16.502C14.4171 16.52 15.1371 16.16 15.4371 15.08C15.4971 14.72 15.5571 12.74 15.4071 12.14C15.0891 11.18 14.2971 10.88 13.6971 10.88H10.3371Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.25 10.4585C10.25 10.3985 10.2582 10.0531 10.2596 9.61854C10.2609 9.22145 10.226 8.83854 10.4156 8.48814C11.126 7.07454 13.166 7.21854 13.67 8.65854C13.7573 8.89562 13.7626 9.27146 13.76 9.61854C13.7567 10.062 13.766 10.4585 13.766 10.4585'
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

LockSyncIcon.displayName = 'LockSyncIcon';
export default LockSyncIcon;
