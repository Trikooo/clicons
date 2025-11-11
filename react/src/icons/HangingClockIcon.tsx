import React from 'react';
import config from '../config';

interface HangingClockIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HangingClockIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hanging-clock)
 * @see {@link https://clicons.dev/icon/hanging-clock} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HangingClockIcon = React.forwardRef<SVGSVGElement, HangingClockIconProps>(
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

    const iconData = [["circle", { cx: "17.5", cy: "4.5", r: "1.5", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["circle", { cx: "17.5", cy: "15.5", r: "4.5", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M2 8H20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "bevel", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M17.5 6V11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "bevel", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M2 6V21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "bevel", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M2 20C2 13.3726 7.37258 8 14 8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "bevel", strokeWidth: "1.5", key: "5" }],
  ["path", { d: "M18.5 16.5L17.5 16V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "6" }]];

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

HangingClockIcon.displayName = 'HangingClockIcon';
export default HangingClockIcon;
