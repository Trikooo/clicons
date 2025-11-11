import React from 'react';
import config from '../config';

interface EarRings02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name EarRings02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ear-rings02)
 * @see {@link https://clicons.dev/icon/ear-rings02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const EarRings02Icon = React.forwardRef<SVGSVGElement, EarRings02IconProps>(
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

    const iconData = [["path", { d: "M4 14.0056C7.6 14.0056 6.4 18.0056 10 18.0056", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M14 14.0056C17.6 14.0056 16.4 18.0056 20 18.0056", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M7 20.9998C8.65685 20.9998 10 18.5382 10 15.5016C10 12.4651 8.65685 10.0035 7 10.0035C5.34315 10.0035 4 12.4651 4 15.5016C4 18.5382 5.34315 20.9998 7 20.9998Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M17 20.9999C18.6569 20.9999 20 18.5383 20 15.5018C20 12.4653 18.6569 10.0037 17 10.0037C15.3431 10.0037 14 12.4653 14 15.5018C14 18.5383 15.3431 20.9999 17 20.9999Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M9.95511 7.2344C9.60461 7.03294 9.06061 6.71307 8.93297 4.78798C8.81979 3.08095 7.26883 2.90969 6.67606 3.03009C6.11908 3.14328 5.07565 3.73133 5.00769 4.95443C4.96211 5.77417 5.47047 6.56049 6.67279 7.03896C6.87541 7.1196 7.0183 7.30991 7.0183 7.52792V9.76224", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M19.937 7.2344C19.5865 7.03294 19.0425 6.71307 18.9149 4.78798C18.8017 3.08095 17.2508 2.90969 16.658 3.03009C16.101 3.14328 15.0576 3.73133 14.9896 4.95443C14.944 5.77417 15.4524 6.56049 16.6547 7.03896C16.8573 7.1196 17.0002 7.30991 17.0002 7.52792V9.76224", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }]];

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

EarRings02Icon.displayName = 'EarRings02Icon';
export default EarRings02Icon;
