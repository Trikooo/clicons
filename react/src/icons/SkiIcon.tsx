import React from 'react';
import config from '../config';

interface SkiIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SkiIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ski)
 * @see {@link https://clicons.dev/icon/ski} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SkiIcon = React.forwardRef<SVGSVGElement, SkiIconProps>(
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

    const iconData = [["path", { d: "M19.9983 4.5C19.9983 5.3284 19.3271 6 18.4992 6C17.6712 6 17 5.3284 17 4.5C17 3.67157 17.6712 3 18.4992 3C19.3271 3 19.9983 3.67157 19.9983 4.5Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12.4787 7.81915L13.5537 6.85169C14.0995 6.36044 14.9207 6.33659 15.4942 6.79533L17 8M12.4787 7.81915L15.3 9.7L17 8M12.4787 7.81915L6 3.5M12.5 12.5L11.1068 11.5712C10.4329 11.1219 10.2587 10.2468 10.6307 9.58714M12.5 12.5L14.8608 14.1863C15.4191 14.5851 15.4191 15.4149 14.8608 15.8137L12.5 17.5M12.5 12.5L13.5 11.5M17 8L17.5 11.1667L21 13.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M3 12L17 21L19.5 20.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

SkiIcon.displayName = 'SkiIcon';
export default SkiIcon;
