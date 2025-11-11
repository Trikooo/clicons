import React from 'react';
import config from '../config';

interface Bread04IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Bread04Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/bread04)
 * @see {@link https://clicons.dev/icon/bread04} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Bread04Icon = React.forwardRef<SVGSVGElement, Bread04IconProps>(
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

    const iconData = [["path", { d: "M8.5 4C5.04311 4 2 5.59321 2 7.55853C2 8.92302 3.6427 9.93848 3.43338 11.2206L3.18919 15.7778C3.08307 17.7584 3.03001 18.7487 3.59988 19.3744C4.16975 20 5.12486 20 7.0351 20H9.9649C11.8751 20 12.8303 20 13.4001 19.3744C13.97 18.7487 13.9169 17.7584 13.8108 15.7778L13.5666 11.2206C13.3573 9.93848 15 8.92302 15 7.55853C15 5.59321 11.9569 4 8.5 4Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11 20H17.1838C19.011 20 19.9246 20 20.4697 19.3744C21.0148 18.7487 20.964 17.7584 20.8625 15.7778L20.629 11.2206C20.4287 9.93848 22 8.92302 22 7.55853C22 5.59321 19.0892 4 15.7826 4H8", stroke: "currentColor", strokeWidth: "1.5", key: "1" }]];

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

Bread04Icon.displayName = 'Bread04Icon';
export default Bread04Icon;
