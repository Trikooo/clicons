import React from 'react';
import config from '../config';

interface HtmlFile02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HtmlFile02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/html-file02)
 * @see {@link https://clicons.dev/icon/html-file02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HtmlFile02Icon = React.forwardRef<SVGSVGElement, HtmlFile02IconProps>(
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

    const iconData = [["path", { d: "M18 11C18 10.1825 18 9.4306 17.8478 9.06306C17.6955 8.69552 17.4065 8.40649 16.8284 7.82843L12.0919 3.09188C11.593 2.593 11.3436 2.34355 11.0345 2.19575C10.9702 2.165 10.9044 2.13772 10.8372 2.11401C10.5141 2 10.1614 2 9.45584 2C6.21082 2 4.58831 2 3.48933 2.88607C3.26731 3.06508 3.06508 3.26731 2.88607 3.48933C2 4.58831 2 6.21082 2 9.45584V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H18M11 2.5V3C11 5.82843 11 7.24264 11.8787 8.12132C12.7574 9 14.1716 9 17 9H17.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M5 14V16.5M5 19V16.5M8 14V16.5M8 19V16.5M5 16.5H8M10 14H11.25M12.5 14H11.25M11.25 14V19M14.5 19V14L16.25 16.5L18 14V19M20 14V19H22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

HtmlFile02Icon.displayName = 'HtmlFile02Icon';
export default HtmlFile02Icon;
