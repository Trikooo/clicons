import React from 'react';
import config from '../config';

interface CouponPercentIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name CouponPercentIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/coupon-percent)
 * @see {@link https://clicons.dev/icon/coupon-percent} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CouponPercentIcon = React.forwardRef<SVGSVGElement, CouponPercentIconProps>(
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

    const iconData = [["path", { d: "M2.46439 9.34375C2.21585 9.34375 1.98905 9.14229 2.00048 8.87895C2.06739 7.33687 2.25487 6.33298 2.78014 5.53884C3.08234 5.08196 3.45771 4.68459 3.88929 4.36468C5.05581 3.5 6.70145 3.5 9.99272 3.5H14.0074C17.2987 3.5 18.9443 3.5 20.1109 4.36468C20.5424 4.68459 20.9178 5.08196 21.22 5.53884C21.7452 6.33289 21.9327 7.33665 21.9996 8.87843C22.0111 9.14208 21.784 9.34375 21.5352 9.34375C20.1494 9.34375 19.026 10.533 19.026 12C19.026 13.467 20.1494 14.6562 21.5352 14.6562C21.784 14.6562 22.0111 14.8579 21.9996 15.1216C21.9327 16.6634 21.7452 17.6671 21.22 18.4612C20.9178 18.918 20.5424 19.3154 20.1109 19.6353C18.9443 20.5 17.2987 20.5 14.0074 20.5H9.99272C6.70145 20.5 5.05581 20.5 3.88929 19.6353C3.45771 19.3154 3.08234 18.918 2.78014 18.4612C2.25487 17.667 2.06739 16.6631 2.00048 15.1211C1.98905 14.8577 2.21585 14.6562 2.46439 14.6562C3.85018 14.6562 4.97358 13.467 4.97358 12C4.97358 10.533 3.85018 9.34375 2.46439 9.34375Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M9.50006 14.5L14.5001 9.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M9.50006 9.5H9.51129M14.4888 14.5H14.5001", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "2" }]];

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

CouponPercentIcon.displayName = 'CouponPercentIcon';
export default CouponPercentIcon;
