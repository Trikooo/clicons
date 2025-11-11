import React from 'react';
import config from '../config';

interface BloodIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BloodIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/blood)
 * @see {@link https://clicons.dev/icon/blood} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BloodIcon = React.forwardRef<SVGSVGElement, BloodIconProps>(
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

    const iconData = [["path", { d: "M5.5 15.5C3.28795 14.6166 2 12.4328 2 10.1746C2 7.24571 4.31698 4.35135 5.94326 2.68056C6.82649 1.77315 8.17351 1.77315 9.05674 2.68056C9.54874 3.18602 9.96485 3.80348 10.5 4.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M8 14.9263C8 11.3698 10.9489 7.85521 13.0187 5.82639C14.1428 4.72454 15.8572 4.72454 16.9813 5.82639C19.0511 7.85521 22 11.3698 22 14.9263C22 18.4134 19.3492 22 15 22C10.6508 22 8 18.4134 8 14.9263Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M18.5 15.5C18.5 17.7091 17 18.5 15.5 18.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

BloodIcon.displayName = 'BloodIcon';
export default BloodIcon;
