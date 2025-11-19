import React from 'react';
import config from '../config';

interface CalendarSetting2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CalendarSetting2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/calendar-setting2)
 * @see {@link https://clicons.dev/icon/calendar-setting2}
 */
const CalendarSetting2Icon = React.forwardRef<SVGSVGElement, CalendarSetting2IconProps>(
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
      d: 'M12 18L12 19.5M12 18C12.737 18 13.3809 17.6013 13.7278 17.0079M12 18C11.263 18 10.6191 17.6013 10.2722 17.0079M12 14L12 12.5M12 14C12.737 14 13.3809 14.3987 13.7278 14.9921M12 14C11.263 14 10.6191 14.3987 10.2722 14.9921M15 14.25L13.7278 14.9921M9 17.75L10.2722 17.0079M15 17.75L13.7278 17.0079M9 14.25L10.2722 14.9921M13.7278 17.0079C13.9009 16.7119 14 16.3676 14 16C14 15.6324 13.9009 15.288 13.7278 14.9921M10.2722 14.9921C10.0992 15.288 10 15.6324 10 16C10 16.3676 10.0991 16.712 10.2722 17.0079'
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

CalendarSetting2Icon.displayName = 'CalendarSetting2Icon';
export default CalendarSetting2Icon;
