import React from 'react';
import config from '../config';

interface BubbleChatNotificationIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Size of the icon in pixels */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Stroke width of the icon */
  strokeWidth?: number;
  /** Use absolute stroke width, ignores scaling */
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BubbleChatNotificationIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/bubble-chat-notification)
 * @see {@link https://clicons.dev/icon/bubble-chat-notification} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BubbleChatNotificationIcon = React.forwardRef<SVGSVGElement, BubbleChatNotificationIconProps>(
  (
    {
      size,
      color,
      strokeWidth,
      absoluteStrokeWidth,
      className = '',
      ...rest
    },
    ref
  ) => {
    const finalSize = size ?? config.defaultSize ?? 16;
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.8;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      d: 'M12.5045 12H12.5135M16.5 12H16.509M8.509 12H8.51797',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
    }
  ],
  [
    'path',
    {
      d: 'M22 5C22 6.38071 20.8807 7.5 19.5 7.5C18.1193 7.5 17 6.38071 17 5C17 3.61929 18.1193 2.5 19.5 2.5C20.8807 2.5 22 3.61929 22 5Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.7896 10.0023C21.9274 10.6464 22 11.3147 22 12C22 17.2467 17.7467 21.5 12.5 21.5C10.8719 21.5 9.3394 21.0904 8 20.3687C6.13177 19.362 4.87462 20.2979 3.76592 20.4658C3.59774 20.4913 3.43024 20.4302 3.30997 20.31C3.12741 20.1274 3.09266 19.8451 3.1935 19.6074C3.62865 18.5818 4.0282 16.6382 3.48341 15C3.1698 14.057 3 13.0483 3 12C3 6.75329 7.25329 2.5 12.5 2.5C13.1853 2.5 13.8536 2.57256 14.4978 2.71042',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ]
];

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
        {iconData.map(([tag, attrs]: any, index: number) => {
          const { key, ...restAttrs } = attrs;

          const mergedAttrs = {
            ...restAttrs,
            ...(tag === 'path' || tag === 'circle' || tag === 'rect' || tag === 'line' || tag === 'polyline' || tag === 'polygon'
              ? {
                  stroke: restAttrs.stroke ? restAttrs.stroke.replace('currentColor', finalColor) : finalColor,
                  fill: restAttrs.fill ? restAttrs.fill.replace('currentColor', finalColor) : restAttrs.fill,
                  strokeWidth: finalAbsoluteStrokeWidth
                    ? finalStrokeWidth
                    : typeof finalStrokeWidth !== 'undefined'
                      ? finalStrokeWidth
                      : restAttrs.strokeWidth,
                }
              : {}),
          };

          const Element = tag as any;
          return <Element key={index} {...mergedAttrs} />;
        })}
      </svg>
    );
  }
);

BubbleChatNotificationIcon.displayName = 'BubbleChatNotificationIcon';
export default BubbleChatNotificationIcon;
