import React from 'react';
import config from '../config';

interface SoilMoistureFieldIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SoilMoistureFieldIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/soil-moisture-field)
 * @see {@link https://clicons.dev/icon/soil-moisture-field} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SoilMoistureFieldIcon = React.forwardRef<SVGSVGElement, SoilMoistureFieldIconProps>(
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

    const iconData = [["path", { d: "M2 3C3.86377 3 4.79565 3 5.53073 3.30448C6.51085 3.71046 7.28954 4.48915 7.69552 5.46927C8 6.20435 8 7.13623 8 9C6.13623 9 5.20435 9 4.46927 8.69552C3.48915 8.28954 2.71046 7.51085 2.30448 6.53073C2 5.79565 2 4.86377 2 3Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 5C10.7575 5 10.1362 5 9.64618 5.20299C8.99277 5.47364 8.47364 5.99277 8.20299 6.64618C8 7.13623 8 7.75749 8 9C9.24251 9 9.86377 9 10.3538 8.79701C11.0072 8.52636 11.5264 8.00723 11.797 7.35382C12 6.86377 12 6.24251 12 5Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M8 9V14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M12 14L2 14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M12 17L2 17", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M12 20L2 20", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "5" }],
  ["path", { d: "M16 18.5034C16 17.2482 17.0532 16.0077 17.7924 15.2917C18.1939 14.9028 18.8061 14.9028 19.2076 15.2917C19.9468 16.0077 21 17.2482 21 18.5034C21 19.7341 20.0533 21 18.5 21C16.9467 21 16 19.7341 16 18.5034Z", stroke: "currentColor", strokeWidth: "1.5", key: "6" }]];

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

SoilMoistureFieldIcon.displayName = 'SoilMoistureFieldIcon';
export default SoilMoistureFieldIcon;
