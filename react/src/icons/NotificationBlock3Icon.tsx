import React from 'react';
import config from '../config';

interface NotificationBlock3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name NotificationBlock3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/notification-block3)
 * @see {@link https://clicons.dev/icon/notification-block3}
 */
const NotificationBlock3Icon = React.forwardRef<SVGSVGElement, NotificationBlock3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.5 19.0011L18.328 11.5M3.5 19.0011L5.15098 8.43407C5.63971 5.30601 8.33398 3 11.5 3'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 19C19.5 17.3431 15.9183 16 11.5 16C7.08172 16 3.5 17.3431 3.5 19C3.5 20.6569 7.08172 22 11.5 22C15.9183 22 19.5 20.6569 19.5 19Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 19H10.5'
    }
  ],
  [
    'path',
    {
      d: 'M15 3.5L19 7.5M20.5 5.5C20.5 3.567 18.933 2 17 2C15.067 2 13.5 3.567 13.5 5.5C13.5 7.433 15.067 9 17 9C18.933 9 20.5 7.433 20.5 5.5Z'
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

NotificationBlock3Icon.displayName = 'NotificationBlock3Icon';
export default NotificationBlock3Icon;
