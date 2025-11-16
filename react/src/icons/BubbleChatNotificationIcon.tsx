import React from 'react';
import config from '../config';

interface BubbleChatNotificationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BubbleChatNotificationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bubble-chat-notification)
 * @see {@link https://clicons.dev/icon/bubble-chat-notification}
 */
const BubbleChatNotificationIcon = React.forwardRef<SVGSVGElement, BubbleChatNotificationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.5045 12H12.5135M16.5 12H16.509M8.509 12H8.51797'
    }
  ],
  [
    'path',
    {
      d: 'M22 5C22 6.38071 20.8807 7.5 19.5 7.5C18.1193 7.5 17 6.38071 17 5C17 3.61929 18.1193 2.5 19.5 2.5C20.8807 2.5 22 3.61929 22 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.7896 10.0023C21.9274 10.6464 22 11.3147 22 12C22 17.2467 17.7467 21.5 12.5 21.5C10.8719 21.5 9.3394 21.0904 8 20.3687C6.13177 19.362 4.87462 20.2979 3.76592 20.4658C3.59774 20.4913 3.43024 20.4302 3.30997 20.31C3.12741 20.1274 3.09266 19.8451 3.1935 19.6074C3.62865 18.5818 4.0282 16.6382 3.48341 15C3.1698 14.057 3 13.0483 3 12C3 6.75329 7.25329 2.5 12.5 2.5C13.1853 2.5 13.8536 2.57256 14.4978 2.71042'
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

BubbleChatNotificationIcon.displayName = 'BubbleChatNotificationIcon';
export default BubbleChatNotificationIcon;
