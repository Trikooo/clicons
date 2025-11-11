import React from 'react';
import config from '../config';

interface SwipeUp05IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SwipeUp05Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/swipe-up05)
 * @see {@link https://clicons.dev/icon/swipe-up05} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SwipeUp05Icon = React.forwardRef<SVGSVGElement, SwipeUp05IconProps>(
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

    const iconData = [["path", { d: "M10.5004 8H11.5004C12.605 8 13.5004 8.89543 13.5004 10M13.5004 10V11M13.5004 10C13.5004 9.44772 13.9481 9 14.5004 9C15.605 9 16.5004 9.89543 16.5004 11M16.5004 11V12M16.5004 11C16.5004 10.4765 16.9705 10.0783 17.4868 10.1644L17.8292 10.2215C18.7936 10.3822 19.5004 11.2166 19.5004 12.1943L19.5 13.6668C19.5 15.8402 19.5 16.9269 19.1689 17.792C18.9769 18.2939 18.4703 18.9339 18.0652 19.3964C17.7148 19.7964 17.5 20.3038 17.5 20.8356V22.0002M10.5002 10V3.5C10.5002 2.67157 9.82864 2 9.00021 2C8.17178 2 7.50021 2.67157 7.50021 3.5L7.5 13.4624L5.8797 11.837C5.16877 11.1239 3.99772 11.1889 3.36965 11.9765C2.88907 12.5791 2.8758 13.4315 3.33738 14.0489L6.93707 18.6471C7.62579 19.5269 8 20.8829 8 22.0002", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M18.5 2L18.5 8M18.5 2C17.7998 2 16.4915 3.9943 16 4.5M18.5 2C19.2002 2 20.5085 3.9943 21 4.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

SwipeUp05Icon.displayName = 'SwipeUp05Icon';
export default SwipeUp05Icon;
