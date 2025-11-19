import React from 'react';
import config from '../config';

interface PrayerRug2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PrayerRug2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/prayer-rug2)
 * @see {@link https://clicons.dev/icon/prayer-rug2}
 */
const PrayerRug2Icon = React.forwardRef<SVGSVGElement, PrayerRug2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.5 4H8.5C7.08579 4 6.37868 4 5.93934 4.43934C5.5 4.87868 5.5 5.58579 5.5 7V17C5.5 18.4142 5.5 19.1213 5.93934 19.5607C6.37868 20 7.08579 20 8.5 20H16.5C17.9142 20 18.6213 20 19.0607 19.5607C19.5 19.1213 19.5 18.4142 19.5 17V7C19.5 5.58579 19.5 4.87868 19.0607 4.43934C18.6213 4 17.9142 4 16.5 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.88664 11.3202C8.74404 9.27033 10.3773 8.37134 11.6311 7.4973C12.1067 7.16578 12.3444 7.00002 12.4986 7C12.6529 6.99998 12.8907 7.16572 13.3664 7.49718C14.6208 8.37135 16.2559 9.27044 15.114 11.3209C14.9138 11.6804 14.8137 11.8602 14.7804 11.9887C14.7471 12.1172 14.747 12.2672 14.7469 12.5674L14.7454 15.978C14.7452 16.4598 14.7451 16.7007 14.5987 16.8503C14.4523 17 14.2167 17 13.7454 17H11.2543C10.7829 17 10.5472 17 10.4007 16.8503C10.2543 16.7005 10.2543 16.4596 10.2543 15.9776V12.5684C10.2543 12.2678 10.2543 12.1175 10.2209 11.9888C10.1876 11.8601 10.0873 11.6801 9.88664 11.3202Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 4V2'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 4V2'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 4V2'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 4V2'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 22V20'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 22V20'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 22V20'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 22V20'
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

PrayerRug2Icon.displayName = 'PrayerRug2Icon';
export default PrayerRug2Icon;
