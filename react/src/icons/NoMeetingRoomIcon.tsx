import React from 'react';
import config from '../config';

interface NoMeetingRoomIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name NoMeetingRoomIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/no-meeting-room)
 * @see {@link https://clicons.dev/icon/no-meeting-room} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const NoMeetingRoomIcon = React.forwardRef<SVGSVGElement, NoMeetingRoomIconProps>(
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
      d: 'M2.00024 2L22.0002 22',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.0005 21H8.00049C5.64347 21 4.46495 21 3.73272 20.2678C3.00049 19.5355 3.00049 18.357 3.00049 16V8C3.00049 5.64298 3.00049 4.46447 3.73272 3.73223M12.0005 21C14.3575 21 15.536 21 16.2683 20.2678C16.889 19.647 16.9835 18.7056 16.9979 16.9974M12.0005 21H17.0005C18.8861 21 19.8289 21 20.4147 20.4142M21.0005 16.9974V10C21.0005 8.11438 21.0005 7.17157 20.4147 6.58579C19.8289 6 18.8861 6 17.0005 6M17.0005 13.1109V8C17.0005 5.64298 17.0005 4.46447 16.2683 3.73223C15.536 3 14.3575 3 12.0005 3H8.00049C7.5983 3 7.23042 3 6.89321 3.00364',
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

NoMeetingRoomIcon.displayName = 'NoMeetingRoomIcon';
export default NoMeetingRoomIcon;
