import React from 'react';
import config from '../config';

interface Resize01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Resize01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/resize01)
 * @see {@link https://clicons.dev/icon/resize01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Resize01Icon = React.forwardRef<SVGSVGElement, Resize01IconProps>(
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

    const iconData = [["path", { d: "M17 4H21M17 4C17 4.56018 18.4943 5.60678 19 6M17 4C17 3.43982 18.4943 2.39322 19 2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M7 4H3M7 4C7 3.43982 5.5057 2.39322 5 2M7 4C7 4.56018 5.5057 5.60678 5 6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M9.8348 22L9.8348 21.0513C9.8348 20.4058 9.6261 19.7775 9.23964 19.2595L5.58206 14.3566C5.16022 13.7911 4.8233 13.0896 5.1018 12.4419C5.55264 11.3935 6.82458 10.7124 8.38144 12.2843L9.97865 13.9937L9.97865 3.57057C10.0349 1.52742 13.3229 1.42614 13.4635 3.57057L13.4635 9.5106C14.9435 9.31946 21.9155 10.3629 20.8993 14.7831C20.851 14.9931 20.8028 15.2063 20.7557 15.4165C20.5501 16.3353 19.9422 17.9727 19.2719 18.93C18.5741 19.9266 18.8203 20.9192 18.8203 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

Resize01Icon.displayName = 'Resize01Icon';
export default Resize01Icon;
