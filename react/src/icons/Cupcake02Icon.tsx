import React from 'react';
import config from '../config';

interface Cupcake02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Cupcake02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/cupcake02)
 * @see {@link https://clicons.dev/icon/cupcake02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Cupcake02Icon = React.forwardRef<SVGSVGElement, Cupcake02IconProps>(
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

    const iconData = [["path", { d: "M7.88457 9.17584C6.17716 9.66367 5 11.2243 5 13M7.88457 9.17584C9.85501 8.61285 14.0271 8.25059 14.8267 6.00741M7.88457 9.17584C7.88457 5 12 6 12 2C14.0469 2 15.5026 4.11086 14.8267 6.00741M14.8267 6.00741C16.454 5.8677 17.5442 7.73849 16.6846 9.07847M16.6846 9.07847C16.4109 9.50517 15.9612 9.85252 15.5 10.119M16.6846 9.07847C18.6418 9.5353 19 11.2937 19 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M16 14.9487C16 12.3504 20 12.3504 20 14.9487C20 16.3111 19.2446 17.4779 18.6584 18.659C17.8515 20.2846 17.448 21.0973 16.7231 21.5487C15.9981 22 15.096 22 13.2918 22H10.7082C8.90398 22 8.00186 22 7.27691 21.5487C6.55195 21.0973 6.14852 20.2846 5.34164 18.659C4.7554 17.4779 4 16.3111 4 14.9487C4 12.3504 8 12.3504 8 14.9487C8 12.3504 12 12.3504 12 14.9487C12 12.3504 16 12.3504 16 14.9487Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

Cupcake02Icon.displayName = 'Cupcake02Icon';
export default Cupcake02Icon;
