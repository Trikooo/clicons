import React from 'react';
import config from '../config';

interface CalendarSettingIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CalendarSettingIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/calendar-setting)
 * @see {@link https://clicons.dev/icon/calendar-setting}
 */
const CalendarSettingIcon = React.forwardRef<SVGSVGElement, CalendarSettingIconProps>(
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
      d: 'M21 12.5V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22'
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
      d: 'M17.5 20.5C18.4293 20.5 19.2402 19.993 19.671 19.2404M17.5 20.5C16.5707 20.5 15.7598 19.993 15.329 19.2404M17.5 20.5L17.5 22M17.5 15.5C18.4292 15.5 19.24 16.0069 19.6709 16.7593M17.5 15.5C16.5708 15.5 15.76 16.0069 15.3291 16.7593M17.5 15.5L17.5 14M21 15.9998L19.6709 16.7593M14 19.9998L15.329 19.2404M21 19.9998L19.671 19.2404M14 15.9998L15.3291 16.7593M19.6709 16.7593C19.8803 17.1249 20 17.5485 20 18C20 18.4514 19.8804 18.8749 19.671 19.2404M15.329 19.2404C15.1196 18.8749 15 18.4514 15 18C15 17.5485 15.1197 17.1249 15.3291 16.7593'
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

CalendarSettingIcon.displayName = 'CalendarSettingIcon';
export default CalendarSettingIcon;
