import React from 'react';
import config from '../config';

interface HajiIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HajiIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/haji)
 * @see {@link https://clicons.dev/icon/haji} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HajiIcon = React.forwardRef<SVGSVGElement, HajiIconProps>(
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

    const iconData = [["path", { d: "M10 11.5L6.58998 13.2453C5.6458 13.7285 4.92974 14.5647 4.64652 15.5868C4.16954 17.3083 3.5 20.0686 3.5 22M15 11.5L18.41 13.2453C19.3542 13.7285 20.0703 14.5647 20.3535 15.5868C20.8305 17.3083 21.5 20.0686 21.5 22", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M7.5 22C7.5 20.8473 8 17 8.50137 16", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M8.5 16.9586C9.9359 17.1947 13.3462 16.5336 15.5 12", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M12.5 20C12.5 20 17.5 18 18.5 13.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M20.5 16.5C20.0452 18.7075 19 21 17.5 22", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M16.0005 9.05826L16.421 6.9029C16.9159 4.36646 15.0233 2 12.5 2C9.97667 2 8.08414 4.36646 8.57901 6.9029L8.99952 9.05826C9.33325 10.7688 10.7983 12 12.5 12C14.2017 12 15.6668 10.7688 16.0005 9.05826Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "5" }],
  ["path", { d: "M8.5 6L11.5299 5.1362C12.1668 4.9546 12.8332 4.9546 13.4701 5.1362L16.5 6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "6" }]];

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

HajiIcon.displayName = 'HajiIcon';
export default HajiIcon;
