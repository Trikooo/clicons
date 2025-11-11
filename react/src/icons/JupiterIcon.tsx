import React from 'react';
import config from '../config';

interface JupiterIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name JupiterIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/jupiter)
 * @see {@link https://clicons.dev/icon/jupiter} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const JupiterIcon = React.forwardRef<SVGSVGElement, JupiterIconProps>(
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

    const iconData = [["path", { d: "M8 16.5C9.10457 16.5 10 15.8284 10 15C10 14.1716 9.10457 13.5 8 13.5C6.89543 13.5 6 14.1716 6 15C6 15.8284 6.89543 16.5 8 16.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M21.2722 15.7522C17.6645 15.7468 14.7094 16.3604 11.5 18.5C9.91701 19.5553 8.40491 20.2626 7.10825 20.7239M21.2722 15.7522C21.7415 14.5935 22 13.3269 22 12C22 11.7639 21.9918 11.5298 21.9757 11.2978M21.2722 15.7522C19.7882 19.4158 16.1959 22 12 22C10.2231 22 8.55439 21.5365 7.10825 20.7239M21.9757 11.2978C16.9028 14.2476 14.3349 13.112 9 10C6.5627 8.57824 4.2801 8.55737 2.42713 9.09949M21.9757 11.2978C21.9128 10.39 21.7286 9.51555 21.4394 8.69054M21.4394 8.69054C20.0734 4.7941 16.363 2 12 2C9.46517 2 7.15062 2.94313 5.38812 4.49763M21.4394 8.69054C17.3788 8.69054 17.5 4.77488 12 6C8.4 6.8019 6.25875 5.16588 5.38812 4.49763M5.38812 4.49763C4.01187 5.71147 2.97222 7.29807 2.42713 9.09949M2.42713 9.09949C2.14934 10.0175 2 10.9913 2 12C2 15.7459 4.05965 19.0108 7.10825 20.7239", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

JupiterIcon.displayName = 'JupiterIcon';
export default JupiterIcon;
