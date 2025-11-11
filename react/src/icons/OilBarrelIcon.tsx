import React from 'react';
import config from '../config';

interface OilBarrelIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name OilBarrelIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/oil-barrel)
 * @see {@link https://clicons.dev/icon/oil-barrel} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const OilBarrelIcon = React.forwardRef<SVGSVGElement, OilBarrelIconProps>(
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

    const iconData = [["ellipse", { cx: "12", cy: "4", rx: "8", ry: "2", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 12.5C12.8284 12.5 13.5 11.8284 13.5 11C13.5 10 12 8.5 12 8.5C12 8.5 10.5 10 10.5 11C10.5 11.8284 11.1716 12.5 12 12.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M19 5V10.5465C19.6372 10.9771 20 11.4727 20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12C4 11.4727 4.36284 10.9771 5 10.5465V5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M19 13.5V17.5465C19.6372 17.9771 20 18.4727 20 19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19C4 18.4727 4.36284 17.9771 5 17.5465V13.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

OilBarrelIcon.displayName = 'OilBarrelIcon';
export default OilBarrelIcon;
