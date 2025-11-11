import React from 'react';
import config from '../config';

interface WifiConnected01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name WifiConnected01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/wifi-connected01)
 * @see {@link https://clicons.dev/icon/wifi-connected01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const WifiConnected01Icon = React.forwardRef<SVGSVGElement, WifiConnected01IconProps>(
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

    const iconData = [["path", { d: "M12 20.5C11.0173 20.5 10.2863 19.503 8.82421 17.509L3.48742 9.73059C2.40801 8.25847 1.86831 7.52241 2.02741 6.57659C2.18651 5.63078 2.81754 5.2161 4.07962 4.38675C6.38289 2.87318 9.0958 2 12 2C14.9042 2 17.6171 2.87318 19.9204 4.38675C21.1825 5.2161 21.8135 5.63078 21.9726 6.57659C22.1317 7.52241 21.592 8.25847 20.5126 9.73059L16 16", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M19 13C14.6871 10.3333 9.31293 10.3333 5 13", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M21 10C15.4548 6 8.54519 6 3 10", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M16 16C13.465 14.6667 10.535 14.6667 8 16", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M14 19C14 19 15 19 16 21C16 21 19.1765 16 22 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]];

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

WifiConnected01Icon.displayName = 'WifiConnected01Icon';
export default WifiConnected01Icon;
