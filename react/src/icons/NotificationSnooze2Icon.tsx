import React from 'react';
import config from '../config';

interface NotificationSnooze2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name NotificationSnooze2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/notification-snooze2)
 * @see {@link https://clicons.dev/icon/notification-snooze2}
 */
const NotificationSnooze2Icon = React.forwardRef<SVGSVGElement, NotificationSnooze2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 11V18.5M5 18.5V10C5 6.13401 8.13401 3 12 3'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 18.5H3.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 20.5C13.5 21.3284 12.8284 22 12 22M10.5 20.5C10.5 21.3284 11.1716 22 12 22M12 22V20.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.016 2H18.6884C19.4611 2 19.8474 2 19.9503 2.24011C20.0532 2.48023 19.7903 2.76827 19.2646 3.34436L15.8469 6.65564C15.3211 7.23173 14.9131 7.51977 15.016 7.75989C15.1189 8 15.6504 8 16.423 8H20'
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

NotificationSnooze2Icon.displayName = 'NotificationSnooze2Icon';
export default NotificationSnooze2Icon;
