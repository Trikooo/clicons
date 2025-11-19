import React from 'react';
import config from '../config';

interface NotificationSquareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name NotificationSquareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/notification-square)
 * @see {@link https://clicons.dev/icon/notification-square}
 */
const NotificationSquareIcon = React.forwardRef<SVGSVGElement, NotificationSquareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11.5 3.5H10.5C6.72876 3.5 4.84315 3.5 3.67157 4.67157C2.5 5.84315 2.5 7.72876 2.5 11.5V13.5C2.5 17.2712 2.5 19.1569 3.67157 20.3284C4.84315 21.5 6.72876 21.5 10.5 21.5L12.5 21.5C16.2712 21.5 18.1569 21.5 19.3284 20.3284C20.5 19.1569 20.5 17.2712 20.5 13.5V12.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 6C21.5 7.933 19.933 9.5 18 9.5C16.067 9.5 14.5 7.933 14.5 6C14.5 4.067 16.067 2.5 18 2.5C19.933 2.5 21.5 4.067 21.5 6Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 12.5H11.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 16.5H15.5'
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

NotificationSquareIcon.displayName = 'NotificationSquareIcon';
export default NotificationSquareIcon;
