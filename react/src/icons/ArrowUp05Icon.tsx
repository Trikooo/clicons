import React from 'react';
import config from '../config';

interface ArrowUp05IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ArrowUp05Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/arrow-up05)
 * @see {@link https://clicons.dev/icon/arrow-up05} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ArrowUp05Icon = React.forwardRef<SVGSVGElement, ArrowUp05IconProps>(
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

    const iconData = [["path", { d: "M6.00108 4.0127L17.9986 4.01272", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11.9957 12.5105L12.3663 12.5081C15.3383 12.5289 16.3698 12.3871 15.8822 11.1398L15.6982 10.833L15.5237 10.5855L15.1071 10.0531L14.2309 9.05859L13.3602 8.04151L12.9037 7.54456L12.6756 7.32342L12.2948 7.06379L11.9581 7.01221L11.6243 7.06825L11.2469 7.33292L11.0218 7.55707L10.5719 8.06005L9.71483 9.08861L8.85198 10.0947L8.44248 10.6326L8.27132 10.8824L8.09141 11.1916C7.62041 12.4453 8.65374 12.5733 11.6252 12.513L11.9957 12.5105ZM11.9957 12.5105L12.0456 20.013", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

ArrowUp05Icon.displayName = 'ArrowUp05Icon';
export default ArrowUp05Icon;
