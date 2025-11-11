import React from 'react';
import config from '../config';

interface WorkoutKickingIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name WorkoutKickingIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/workout-kicking)
 * @see {@link https://clicons.dev/icon/workout-kicking} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const WorkoutKickingIcon = React.forwardRef<SVGSVGElement, WorkoutKickingIconProps>(
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

    const iconData = [["path", { d: "M7 5.5C7 6.32843 6.32843 7 5.5 7C4.67157 7 4 6.32843 4 5.5C4 4.67157 4.67157 4 5.5 4C6.32843 4 7 4.67157 7 5.5Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M8.94848 14H8.13896C7.326 14 6.91951 14 6.63846 13.763C6.3574 13.526 6.29058 13.127 6.15693 12.3288L6.08019 11.8705C6.00839 11.4417 5.97249 11.2273 6.02497 11.0231C6.07746 10.8188 6.21238 10.6479 6.48221 10.3061L7.73131 8.72371M9.78571 6L8.69731 7.5L7.73131 8.72371M9.78571 6L11.9625 3M9.78571 6L14.2859 9.5M14.2859 9.5L20 3M14.2859 9.5L12.9672 12.5M7.73131 8.72371L12.9672 12.5M12.9672 12.5V21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

WorkoutKickingIcon.displayName = 'WorkoutKickingIcon';
export default WorkoutKickingIcon;
