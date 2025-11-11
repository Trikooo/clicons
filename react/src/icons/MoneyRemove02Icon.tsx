import React from 'react';
import config from '../config';

interface MoneyRemove02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MoneyRemove02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/money-remove02)
 * @see {@link https://clicons.dev/icon/money-remove02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MoneyRemove02Icon = React.forwardRef<SVGSVGElement, MoneyRemove02IconProps>(
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

    const iconData = [["path", { d: "M14.4998 11C14.4998 12.3807 13.3805 13.5 11.9998 13.5C10.6191 13.5 9.49982 12.3807 9.49982 11C9.49982 9.61929 10.6191 8.5 11.9998 8.5C13.3805 8.5 14.4998 9.61929 14.4998 11Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M22 12.5V5.92705C22 5.35889 21.6756 4.84452 21.1329 4.67632C20.1903 4.38421 18.4794 4 16 4C11.4209 4 10.1967 5.67747 3.87798 4.42361C2.92079 4.23366 2 4.94531 2 5.92116V15.9382C2 16.6265 2.47265 17.231 3.1448 17.3792C9.59373 18.8013 11.0483 17.3585 15 17.137", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M2 8C3.95133 8 5.70483 6.40507 5.92901 4.75417M18.5005 4.5C18.5005 6.53964 20.2655 8.46899 22 8.46899M6.00049 17.4961C6.00049 15.287 4.20963 13.4961 2.00049 13.4961", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M22 15.5L19.75 17.75M19.75 17.75L17.5 20M19.75 17.75L17.5 15.5M19.75 17.75L22 20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

MoneyRemove02Icon.displayName = 'MoneyRemove02Icon';
export default MoneyRemove02Icon;
