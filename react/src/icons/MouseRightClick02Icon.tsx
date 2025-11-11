import React from 'react';
import config from '../config';

interface MouseRightClick02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MouseRightClick02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mouse-right-click02)
 * @see {@link https://clicons.dev/icon/mouse-right-click02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MouseRightClick02Icon = React.forwardRef<SVGSVGElement, MouseRightClick02IconProps>(
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

    const iconData = [["path", { d: "M13.5 2.09084C12.8345 2.02383 12.1611 2 11.5 2C10.5753 2 9.66267 2.07762 8.7651 2.1882C6.32417 2.48893 4.43061 4.51965 4.24069 6.91118C4.10906 8.56832 4 10.268 4 12C4 13.732 4.10906 15.4317 4.24069 17.0888C4.43061 19.4803 6.32417 21.511 8.7651 21.8118C9.66267 21.9223 10.5753 22 11.5 22C12.4248 22 13.3374 21.9223 14.235 21.8118C16.6758 21.511 18.5695 19.4803 18.7594 17.0888C18.891 15.4317 19 13.732 19 12C19 11.3283 18.9836 10.6614 18.9558 10", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11.5 2L11.5 11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M18.5 11H4.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["circle", { cx: "2.5", cy: "2.5", r: "2.5", transform: "matrix(-1 0 0 1 20 2.5)", stroke: "currentColor", strokeWidth: "1.5", key: "3" }]];

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

MouseRightClick02Icon.displayName = 'MouseRightClick02Icon';
export default MouseRightClick02Icon;
