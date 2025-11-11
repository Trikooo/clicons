import React from 'react';
import config from '../config';

interface SpaghettiIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SpaghettiIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/spaghetti)
 * @see {@link https://clicons.dev/icon/spaghetti} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SpaghettiIcon = React.forwardRef<SVGSVGElement, SpaghettiIconProps>(
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

    const iconData = [["path", { d: "M21.2916 13H2.70845C1.18885 13 2.48394 15.238 3.16941 15.581L5.53031 16.7625C5.76629 16.8806 5.88428 16.9396 5.98205 17.026C6.86002 17.8017 7.02027 19.169 8.12986 19.7633C8.57168 20 9.09521 20 10.1423 20H13.8577C14.9048 20 15.4283 20 15.8701 19.7633C16.9797 19.169 17.14 17.8017 18.018 17.026C18.1157 16.9396 18.2337 16.8806 18.4697 16.7625L20.8306 15.581C21.5161 15.238 22.8112 13 21.2916 13Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M21 13C21 10.2386 18.7749 8 16.03 8C15.1061 8 14.2411 8.25382 13.5 8.69575", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M7 12.2222C7 10.9949 7.89543 10 9 10C10.1046 10 11 10.9949 11 12.2222V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M9 6.55561C9.43124 4.79022 11.3282 3.68242 13.2369 4.08128C15.1456 4.48014 16.3434 6.23461 15.9121 8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]];

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

SpaghettiIcon.displayName = 'SpaghettiIcon';
export default SpaghettiIcon;
