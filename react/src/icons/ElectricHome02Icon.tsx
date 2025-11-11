import React from 'react';
import config from '../config';

interface ElectricHome02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ElectricHome02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/electric-home02)
 * @see {@link https://clicons.dev/icon/electric-home02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ElectricHome02Icon = React.forwardRef<SVGSVGElement, ElectricHome02IconProps>(
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

    const iconData = [["path", { d: "M14.0069 10.0034V12.5019M10.0232 12.5019V10.0034M8.53384 13.3827C8.49476 12.9079 8.90282 12.5029 9.4202 12.5029H14.6138C15.1312 12.5029 15.5392 12.9079 15.5002 13.3827L15.3933 14.6799C15.3165 15.6124 14.9805 16.5111 14.4175 17.2895L14.0684 17.7722C13.7389 18.2279 13.1834 18.5017 12.5885 18.5017H11.4455C10.8506 18.5017 10.2952 18.2279 9.96553 17.7722L9.6165 17.2895C9.05345 16.5111 8.7174 15.6124 8.64063 14.6799L8.53384 13.3827Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15.0031 22.001C16.7848 21.9818 17.5484 21.8877 18.4889 21.5011C19.2819 21.1766 19.7798 20.7223 20.2117 19.9159C20.8599 18.7056 21.0761 17.3175 21.2696 15.9572L21.9746 11.0032C22.0261 10.2096 22.0008 9.61796 21.8159 9.03703C21.4627 7.92781 20.5099 7.14484 19.5815 6.4468C15.262 3.1993 13.2318 1.90163 12.0154 2.00492C10.862 1.91375 9.29127 2.84599 4.30666 6.56378C3.47477 7.18426 2.64133 7.86212 2.26246 8.83052C1.73211 10.1861 2.13955 11.7208 2.36292 13.1599C2.62553 14.8517 2.93738 16.9159 3.49765 19.2825C3.53207 19.4279 3.58086 19.5703 3.64641 19.7044C4.14338 20.7217 4.57979 21.1457 5.54185 21.5011C6.54068 21.8701 9.67378 22.1919 11.2453 21.8383C11.7753 21.719 12.0154 21.1928 12.0154 20.6475V18.5017", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

ElectricHome02Icon.displayName = 'ElectricHome02Icon';
export default ElectricHome02Icon;
