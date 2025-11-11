import React from 'react';
import config from '../config';

interface Rotate360IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Rotate360Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/rotate360)
 * @see {@link https://clicons.dev/icon/rotate360} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Rotate360Icon = React.forwardRef<SVGSVGElement, Rotate360IconProps>(
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

    const iconData = [["path", { d: "M20.4371 12.5061C23.4219 7.00258 22.0614 3.26685 16.9548 3C13.2433 3.07086 9.41471 5.07063 6.35871 8.16433C3.79408 10.7606 1.26891 14.479 2.1959 18.018C2.40059 18.7994 2.79969 19.3318 3.43015 19.8328C5.12441 21.1791 6.7874 21.2976 9.99031 20.5113C13.2339 19.5257 15.2448 18.0408 16.9404 16.5217M16.9404 16.5217C16.9421 16.5201 16.9439 16.5185 16.9457 16.5169C16.9489 16.5141 16.9468 16.5087 16.9425 16.5087C16.9393 16.5087 16.937 16.512 16.9381 16.515C16.9389 16.5173 16.9396 16.5195 16.9404 16.5217ZM16.9404 16.5217C17.3108 17.6169 17.0762 18.5944 16.4385 20.5113", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

Rotate360Icon.displayName = 'Rotate360Icon';
export default Rotate360Icon;
