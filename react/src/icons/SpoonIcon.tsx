import React from 'react';
import config from '../config';

interface SpoonIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SpoonIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/spoon)
 * @see {@link https://clicons.dev/icon/spoon} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SpoonIcon = React.forwardRef<SVGSVGElement, SpoonIconProps>(
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

    const iconData = [["path", { d: "M21.105 2.89501C19.3895 1.17949 15.6577 2.12988 13.7277 4.05984C12.6875 5.10001 12.3831 6.21243 12.592 7.28565C12.8022 8.36561 12.7813 9.58474 11.9794 10.338L2.50346 19.2396C1.84652 19.8568 1.8303 20.895 2.46765 21.5324C3.105 22.1697 4.14323 22.1535 4.76036 21.4965L13.662 12.0206C14.4153 11.2187 15.6344 11.1978 16.7143 11.408C17.7876 11.6169 18.9 11.3125 19.9402 10.2723C21.8701 8.34233 22.8205 4.61053 21.105 2.89501Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }]];

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

SpoonIcon.displayName = 'SpoonIcon';
export default SpoonIcon;
