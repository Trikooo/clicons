import React from 'react';
import config from '../config';

interface SwipeDown02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SwipeDown02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/swipe-down02)
 * @see {@link https://clicons.dev/icon/swipe-down02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SwipeDown02Icon = React.forwardRef<SVGSVGElement, SwipeDown02IconProps>(
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

    const iconData = [["path", { d: "M18.5 8.00195V2.00195M18.5 8.00195C17.7998 8.00195 16.4915 6.00765 16 5.50195M18.5 8.00195C19.2002 8.00195 20.5085 6.00765 21 5.50195", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15.3913 21.998C15.3395 20.084 15.4684 19.8535 15.6052 19.4277C15.7419 19.002 16.6982 17.4665 17.0366 16.3695C18.1313 12.8202 17.111 12.0653 15.7507 11.0588C14.2422 9.94257 11.3968 9.37728 9.98573 9.49966V3.7462C9.98573 2.78288 9.20481 2.00195 8.24148 2.00195C7.27816 2.00195 6.49723 2.78288 6.49723 3.7462V9.96607M6.49774 21.9988V20.9854C6.43328 20.041 5.49529 18.9235 4.32672 17.3166C3.12509 15.576 2.86688 14.6973 3.05591 13.8848C3.15329 13.4694 3.40594 12.7832 4.64647 11.6104L6.49723 9.96607M6.49723 14.0323V9.96607", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

SwipeDown02Icon.displayName = 'SwipeDown02Icon';
export default SwipeDown02Icon;
