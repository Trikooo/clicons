import React from 'react';
import config from '../config';

interface KoFiIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name KoFiIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ko-fi)
 * @see {@link https://clicons.dev/icon/ko-fi} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const KoFiIcon = React.forwardRef<SVGSVGElement, KoFiIconProps>(
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

    const iconData = [["path", { d: "M17 5.5H4C3.05719 5.5 2.58579 5.5 2.29289 5.79289C2 6.08579 2 6.55719 2 7.5V14.5C2 16.3856 2 17.3284 2.58579 17.9142C3.17157 18.5 4.11438 18.5 6 18.5H13C13.9319 18.5 14.3978 18.5 14.7654 18.3478C15.2554 18.1448 15.6448 17.7554 15.8478 17.2654C16 16.8978 16 16.4319 16 15.5H17C19.7614 15.5 22 13.2614 22 10.5C22 7.73858 19.7614 5.5 17 5.5Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17 13H16V8H17C18.3807 8 19.5 9.11929 19.5 10.5C19.5 11.8807 18.3807 13 17 13Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M5.58579 9.10051C6.36683 8.29983 7.63317 8.29983 8.41421 9.10051L9 9.70101L9.58579 9.10051C10.3668 8.29983 11.6332 8.29983 12.4142 9.10051C13.1953 9.90118 13.1953 11.1993 12.4142 12L9 15.5L5.58579 12C4.80474 11.1993 4.80474 9.90118 5.58579 9.10051Z", stroke: "currentColor", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

KoFiIcon.displayName = 'KoFiIcon';
export default KoFiIcon;
