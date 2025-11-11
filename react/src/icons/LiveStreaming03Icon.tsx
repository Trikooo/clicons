import React from 'react';
import config from '../config';

interface LiveStreaming03IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name LiveStreaming03Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/live-streaming03)
 * @see {@link https://clicons.dev/icon/live-streaming03} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const LiveStreaming03Icon = React.forwardRef<SVGSVGElement, LiveStreaming03IconProps>(
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

    const iconData = [["path", { d: "M15.5376 18.592C14.4312 19.5 12.7875 19.5 9.5 19.5C6.21252 19.5 4.56878 19.5 3.46243 18.592C3.25989 18.4258 3.07418 18.2401 2.90796 18.0376C2 16.9312 2 15.2875 2 12C2 8.71252 2 7.06878 2.90796 5.96243C3.07418 5.75989 3.25989 5.57418 3.46243 5.40796C4.56878 4.5 6.21252 4.5 9.5 4.5C12.7875 4.5 14.4312 4.5 15.5376 5.40796C15.7401 5.57418 15.9258 5.75989 16.092 5.96243C17 7.06878 17 8.71252 17 12C17 15.2875 17 16.9312 16.092 18.0376C15.9258 18.2401 15.7401 18.4258 15.5376 18.592Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17 13V11L19.6 7.53333C19.8518 7.19759 20.247 7 20.6667 7C21.403 7 22 7.59695 22 8.33333V15.6667C22 16.403 21.403 17 20.6667 17C20.247 17 19.8518 16.8024 19.6 16.4667L17 13Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M9.5 13.5C10.3284 13.5 11 12.8284 11 12C11 11.1716 10.3284 10.5 9.5 10.5M9.5 13.5C8.67157 13.5 8 12.8284 8 12C8 11.1716 8.67157 10.5 9.5 10.5M9.5 13.5V10.5", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

LiveStreaming03Icon.displayName = 'LiveStreaming03Icon';
export default LiveStreaming03Icon;
