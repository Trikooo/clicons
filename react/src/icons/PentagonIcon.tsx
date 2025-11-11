import React from 'react';
import config from '../config';

interface PentagonIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PentagonIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/pentagon)
 * @see {@link https://clicons.dev/icon/pentagon} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PentagonIcon = React.forwardRef<SVGSVGElement, PentagonIconProps>(
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

    const iconData = [["path", { d: "M6.20832 5.4051C8.97801 3.13503 10.3629 2 12 2C13.6371 2 15.022 3.13503 17.7917 5.4051L18.0484 5.61553C20.334 7.48877 21.4767 8.42539 21.8628 9.74129C22.2488 11.0572 21.7895 12.4503 20.8709 15.2364L20.6883 15.7901C19.7073 18.7654 19.2169 20.2531 18.0264 21.1054C16.3758 22.2872 13.9003 21.9578 12 21.9578C8.82548 21.9578 7.16404 21.9578 5.97359 21.1054C4.78315 20.2531 4.29266 18.7654 3.31167 15.7901L3.12909 15.2364C2.21048 12.4503 1.75117 11.0572 2.13722 9.74129C2.52326 8.42539 3.66603 7.48877 5.95157 5.61553L6.20832 5.4051Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }]];

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

PentagonIcon.displayName = 'PentagonIcon';
export default PentagonIcon;
