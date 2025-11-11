import React from 'react';
import config from '../config';

interface Payment02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Payment02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/payment02)
 * @see {@link https://clicons.dev/icon/payment02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Payment02Icon = React.forwardRef<SVGSVGElement, Payment02IconProps>(
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

    const iconData = [["path", { d: "M2 4.5H8.75736C9.55301 4.5 10.3161 4.81607 10.8787 5.37868L14 8.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M5 13.5H2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M8.5 7.5L10.5 9.5C11.0523 10.0523 11.0523 10.9477 10.5 11.5C9.94772 12.0523 9.05229 12.0523 8.5 11.5L7 10C6.13931 10.8607 4.77671 10.9575 3.80294 10.2272L3.5 10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M5 11V15.5C5 17.3856 5 18.3284 5.58579 18.9142C6.17157 19.5 7.11438 19.5 9 19.5H18C19.8856 19.5 20.8284 19.5 21.4142 18.9142C22 18.3284 22 17.3856 22 15.5V12.5C22 10.6144 22 9.67157 21.4142 9.08579C20.8284 8.5 19.8856 8.5 18 8.5H9.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M15.25 14C15.25 14.9665 14.4665 15.75 13.5 15.75C12.5335 15.75 11.75 14.9665 11.75 14C11.75 13.0335 12.5335 12.25 13.5 12.25C14.4665 12.25 15.25 13.0335 15.25 14Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]];

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

Payment02Icon.displayName = 'Payment02Icon';
export default Payment02Icon;
