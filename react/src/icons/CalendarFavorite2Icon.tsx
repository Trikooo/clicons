import React from 'react';
import config from '../config';

interface CalendarFavorite2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CalendarFavorite2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/calendar-favorite2)
 * @see {@link https://clicons.dev/icon/calendar-favorite2}
 */
const CalendarFavorite2Icon = React.forwardRef<SVGSVGElement, CalendarFavorite2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
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
      d: 'M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z'
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
      d: 'M12.5183 13.4333L13.0462 14.4979C13.1182 14.6461 13.3102 14.7882 13.4722 14.8154L14.4291 14.9757C15.041 15.0786 15.185 15.5262 14.744 15.9677L14.0001 16.7178C13.8741 16.8448 13.8051 17.0898 13.8441 17.2652L14.0571 18.1937C14.2251 18.9287 13.8381 19.213 13.1932 18.8289L12.2963 18.2936C12.1343 18.1968 11.8674 18.1968 11.7024 18.2936L10.8055 18.8289C10.1636 19.213 9.77359 18.9257 9.94158 18.1937L10.1546 17.2652C10.1935 17.0898 10.1246 16.8448 9.99857 16.7178L9.25465 15.9677C8.8167 15.5262 8.95768 15.0786 9.56962 14.9757L10.5265 14.8154C10.6855 14.7882 10.8775 14.6461 10.9495 14.4979L11.4774 13.4333C11.7654 12.8556 12.2333 12.8556 12.5183 13.4333Z'
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

CalendarFavorite2Icon.displayName = 'CalendarFavorite2Icon';
export default CalendarFavorite2Icon;
