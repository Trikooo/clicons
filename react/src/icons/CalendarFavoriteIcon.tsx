import React from 'react';
import config from '../config';

interface CalendarFavoriteIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CalendarFavoriteIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/calendar-favorite)
 * @see {@link https://clicons.dev/icon/calendar-favorite}
 */
const CalendarFavoriteIcon = React.forwardRef<SVGSVGElement, CalendarFavoriteIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16 2V6M8 2V6'
    }
  ],
  [
    'path',
    {
      d: 'M21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H12'
    }
  ],
  [
    'path',
    {
      d: 'M3 10H21'
    }
  ],
  [
    'path',
    {
      d: 'M18.1047 15.5055L18.7206 16.7475C18.8046 16.9204 19.0286 17.0862 19.2175 17.118L20.3339 17.305C21.0478 17.425 21.2158 17.9472 20.7014 18.4624L19.8335 19.3374C19.6865 19.4856 19.606 19.7715 19.6515 19.9761L19.9 21.0594C20.096 21.9168 19.6445 22.2485 18.8921 21.8004L17.8457 21.1758C17.6567 21.0629 17.3453 21.0629 17.1528 21.1758L16.1064 21.8004C15.3575 22.2485 14.9025 21.9133 15.0985 21.0594L15.347 19.9761C15.3925 19.7715 15.312 19.4856 15.165 19.3374L14.2971 18.4624C13.7861 17.9472 13.9506 17.425 14.6646 17.305L15.7809 17.118C15.9664 17.0862 16.1904 16.9204 16.2744 16.7475L16.8903 15.5055C17.2263 14.8315 17.7722 14.8315 18.1047 15.5055Z'
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

CalendarFavoriteIcon.displayName = 'CalendarFavoriteIcon';
export default CalendarFavoriteIcon;
