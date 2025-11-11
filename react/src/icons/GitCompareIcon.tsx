import React from 'react';
import config from '../config';

interface GitCompareIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name GitCompareIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/git-compare)
 * @see {@link https://clicons.dev/icon/git-compare} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const GitCompareIcon = React.forwardRef<SVGSVGElement, GitCompareIconProps>(
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

    const iconData = [["path", { d: "M19 17L19 11C19 8.17157 19 6.75736 18.1213 5.87868C17.2426 5 15.8284 5 13 5H10M10 5C10 4.29977 11.9943 2.99153 12.5 2.5M10 5C10 5.70023 11.9943 7.00847 12.5 7.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M5 7.5L5 13.5C5 16.3284 5 17.7426 5.87868 18.6213C6.75736 19.5 8.17157 19.5 11 19.5H14M14 19.5C14 20.2002 12.0057 21.5085 11.5 22M14 19.5C14 18.7998 12.0057 17.4915 11.5 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["circle", { cx: "19", cy: "19", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "2" }],
  ["circle", { cx: "5", cy: "5", r: "2", stroke: "currentColor", strokeWidth: "1.5", key: "3" }]];

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

GitCompareIcon.displayName = 'GitCompareIcon';
export default GitCompareIcon;
