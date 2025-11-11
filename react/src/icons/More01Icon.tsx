import React from 'react';
import config from '../config';

interface More01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name More01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/more01)
 * @see {@link https://clicons.dev/icon/more01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const More01Icon = React.forwardRef<SVGSVGElement, More01IconProps>(
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

    const iconData = [["path", { d: "M11.9959 18H12.0049", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", key: "0" }],
  ["path", { d: "M17.9998 18H18.0088", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", key: "1" }],
  ["path", { d: "M5.99981 18H6.00879", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", key: "2" }],
  ["path", { d: "M11.9959 12H12.0049", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", key: "3" }],
  ["path", { d: "M11.9998 6H12.0088", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", key: "4" }],
  ["path", { d: "M17.9998 12H18.0088", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", key: "5" }],
  ["path", { d: "M17.9998 6H18.0088", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", key: "6" }],
  ["path", { d: "M5.99981 12H6.00879", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", key: "7" }],
  ["path", { d: "M5.99981 6H6.00879", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", key: "8" }]];

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

More01Icon.displayName = 'More01Icon';
export default More01Icon;
