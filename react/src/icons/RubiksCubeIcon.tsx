import React from 'react';
import config from '../config';

interface RubiksCubeIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name RubiksCubeIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/rubiks-cube)
 * @see {@link https://clicons.dev/icon/rubiks-cube} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const RubiksCubeIcon = React.forwardRef<SVGSVGElement, RubiksCubeIconProps>(
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

    const iconData = [["path", { d: "M8.64298 3.5853C10.2952 2.86177 11.1214 2.5 12 2.5C12.8786 2.5 13.7048 2.86177 15.357 3.5853L17.0618 4.33185C19.6873 5.48154 21 6.05639 21 7C21 7.94361 19.6873 8.51846 17.0618 9.66815L15.357 10.4147C13.7048 11.1382 12.8786 11.5 12 11.5C11.1214 11.5 10.2952 11.1382 8.64298 10.4147L6.93817 9.66815C4.31272 8.51846 3 7.94361 3 7C3 6.05639 4.31272 5.48154 6.93816 4.33185L8.64298 3.5853Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M21 7V18C21 18.9436 19.6873 19.5185 17.0618 20.6682L15.357 21.4147C13.7048 22.1382 12.8786 22.5 12 22.5C11.1214 22.5 10.2952 22.1382 8.64298 21.4147L6.93817 20.6682C4.31272 19.5185 3 18.9436 3 18V7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M21 13L12 17.5L3 13.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M12 22.5V11.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M16.5 20.5V9.5L7 4.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M7.5 20.5V9.5L17 4.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }]];

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

RubiksCubeIcon.displayName = 'RubiksCubeIcon';
export default RubiksCubeIcon;
