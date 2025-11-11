import React from 'react';
import config from '../config';

interface CornIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name CornIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/corn)
 * @see {@link https://clicons.dev/icon/corn} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CornIcon = React.forwardRef<SVGSVGElement, CornIconProps>(
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

    const iconData = [["path", { d: "M3.88481 20.1321C5.98804 22.2096 9.86304 21.7503 12.5399 19.1062C15.5988 16.0847 17.1823 15.1788 18.2931 14.5591C18.5175 14.434 18.5733 14.1229 18.3912 13.9429C14.7824 10.3783 8.75783 13.0463 8.10703 17.75M3.88481 20.1321L2.5 21.5M3.88481 20.1321C1.78158 18.0546 2.24717 14.2277 4.92401 11.5836C5.77111 10.956 7.39551 9.17678 7.65754 6.77425C7.68407 6.53098 7.99311 6.40789 8.16826 6.5809C9.47265 7.86934 10.1241 9.55848 10.1227 11.2472", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.5917 13C19.9418 9.37568 22.5321 4.72423 21.0791 3.04556C19.3481 1.04574 14.0084 4.93844 10 8.33662", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

CornIcon.displayName = 'CornIcon';
export default CornIcon;
