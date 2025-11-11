import React from 'react';
import config from '../config';

interface MoneyExchange02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MoneyExchange02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/money-exchange02)
 * @see {@link https://clicons.dev/icon/money-exchange02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MoneyExchange02Icon = React.forwardRef<SVGSVGElement, MoneyExchange02IconProps>(
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

    const iconData = [["path", { d: "M14.4998 10.5C14.4998 11.8807 13.3805 13 11.9998 13C10.619 13 9.49976 11.8807 9.49976 10.5C9.49976 9.11929 10.619 8 11.9998 8C13.3805 8 14.4998 9.11929 14.4998 10.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M22 10.5V5.42705C22 4.85889 21.6756 4.34452 21.1329 4.17632C20.1903 3.88421 18.4794 3.5 16 3.5C11.4209 3.5 10.1967 5.17747 3.87798 3.92361C2.92079 3.73366 2 4.44531 2 5.42116V15.4382C2 16.1265 2.47265 16.731 3.1448 16.8792C8.71199 18.1069 10.5572 17.1995 13.5 16.7859", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M2 7.5C3.95133 7.5 5.70483 5.90507 5.92901 4.25417M18.5005 4C18.5005 6.03964 20.2655 7.96899 22 7.96899M6.00049 16.9961C6.00049 14.787 4.20963 12.9961 2.00049 12.9961", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M16 15.5C16 14.9477 16.4477 14.5 17 14.5H22L20.5 12.5M22 17.5C22 18.0523 21.5523 18.5 21 18.5H16L17.5 20.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

MoneyExchange02Icon.displayName = 'MoneyExchange02Icon';
export default MoneyExchange02Icon;
