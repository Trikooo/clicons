import React from 'react';
import config from '../config';

interface MoneySafeIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MoneySafeIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/money-safe)
 * @see {@link https://clicons.dev/icon/money-safe} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MoneySafeIcon = React.forwardRef<SVGSVGElement, MoneySafeIconProps>(
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

    const iconData = [["path", { d: "M13 2H11C6.75736 2 4.63604 2 3.31802 3.31802C2 4.63604 2 6.75736 2 11C2 15.2426 2 17.364 3.31802 18.682C4.63604 20 6.75736 20 11 20H13C17.2426 20 19.364 20 20.682 18.682C22 17.364 22 15.2426 22 11C22 6.75736 22 4.63604 20.682 3.31802C19.364 2 17.2426 2 13 2Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17 15C18 14.4692 18 13.6148 18 11.9062V10.0938C18 8.38516 18 7.53082 17 7", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M18 22V20", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M6 22V20", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M9.49983 13C10.6158 13 11.5205 12.1046 11.5205 11C11.5205 9.89543 10.6158 9 9.49983 9M9.49983 13C8.38384 13 7.47914 12.1046 7.47914 11C7.47914 9.89543 8.38384 9 9.49983 9M9.49983 13V15M9.49983 9V7M7.74987 12L5.9999 13M12.9998 9L11.2498 10M11.2499 12L12.9999 13M6 9L7.74997 10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]];

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

MoneySafeIcon.displayName = 'MoneySafeIcon';
export default MoneySafeIcon;
