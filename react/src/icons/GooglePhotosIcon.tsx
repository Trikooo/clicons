import React from 'react';
import config from '../config';

interface GooglePhotosIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name GooglePhotosIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/google-photos)
 * @see {@link https://clicons.dev/icon/google-photos} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const GooglePhotosIcon = React.forwardRef<SVGSVGElement, GooglePhotosIconProps>(
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

    const iconData = [["path", { d: "M12 12C14.7614 12 17 9.74267 17 6.95811C17 4.87018 15.7414 3.07868 13.9475 2.31298C13.246 2.01357 12.8953 1.86387 12.4476 2.16297C12 2.46206 12 2.95237 12 3.93298V12Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 12C9.23858 12 7 14.2573 7 17.0419C7 19.1298 8.25861 20.9213 10.0525 21.687C10.754 21.9864 11.1047 22.1361 11.5524 21.837C12 21.5379 12 21.0476 12 20.067V12Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12 12C12 14.7614 14.2573 17 17.0419 17C19.1298 17 20.9213 15.7414 21.687 13.9475C21.9864 13.246 22.1361 12.8953 21.837 12.4476C21.5379 12 21.0476 12 20.067 12L12 12Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M12 12C12 9.23858 9.74267 7 6.95811 7C4.87018 7 3.07868 8.25861 2.31298 10.0525C2.01357 10.754 1.86387 11.1047 2.16297 11.5524C2.46206 12 2.95237 12 3.93298 12H12Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

GooglePhotosIcon.displayName = 'GooglePhotosIcon';
export default GooglePhotosIcon;
