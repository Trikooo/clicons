import React from 'react';
import config from '../config';

interface SteakIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SteakIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/steak)
 * @see {@link https://clicons.dev/icon/steak} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SteakIcon = React.forwardRef<SVGSVGElement, SteakIconProps>(
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

    const iconData = [["path", { d: "M17 16C19.7614 16 22 13.7614 22 11C22 9.87418 21.6279 8.83526 21 7.99951C18.8745 5.17054 16 4 12 4C8 4 2 6.86508 2 10.5C2 11.8807 3.11929 13 4.5 13H8C9.32374 12.9675 12 13.5 14.2356 15.167C15.0274 15.6933 15.9779 16 17 16Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2 10.5V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17C9.32374 16.9675 12 17.5 14.2356 19.167C15.0274 19.6933 15.9779 20 17 20C19.7614 20 22 17.7614 22 15V11", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M18.5 11C18.5 11.8284 17.8284 12.5 17 12.5C16.1716 12.5 15.5 11.8284 15.5 11C15.5 10.1716 16.1716 9.5 17 9.5C17.8284 9.5 18.5 10.1716 18.5 11Z", stroke: "currentColor", strokeWidth: "1.5", key: "2" }]];

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

SteakIcon.displayName = 'SteakIcon';
export default SteakIcon;
