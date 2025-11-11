import React from 'react';
import config from '../config';

interface BackMuscleBodyIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BackMuscleBodyIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/back-muscle-body)
 * @see {@link https://clicons.dev/icon/back-muscle-body} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BackMuscleBodyIcon = React.forwardRef<SVGSVGElement, BackMuscleBodyIconProps>(
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

    const iconData = [["path", { d: "M15.5 10C14.6716 10 14 9.32843 14 8.5M8.5 10C9.32843 10 10 9.32843 10 8.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M14 2V2.64298C14 3.22979 14 3.52319 14.0654 3.77255C14.223 4.37391 14.6513 4.86778 15.2244 5.10888C15.462 5.20885 15.7524 5.25035 16.3333 5.33333C17.4952 5.49931 18.0761 5.5823 18.5513 5.78224C19.6973 6.26445 20.554 7.25217 20.8693 8.4549C21 8.95361 21 9.54043 21 10.714V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M10 2V2.64298C10 3.22979 10 3.52319 9.93463 3.77255C9.77699 4.37391 9.34867 4.86778 8.77564 5.10888C8.53804 5.20885 8.24758 5.25035 7.66667 5.33333C6.50484 5.49931 5.92393 5.5823 5.44871 5.78224C4.30266 6.26445 3.44601 7.25217 3.13073 8.4549C3 8.95361 3 9.54043 3 10.714V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M12 13V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M18 11.5C18 11.5 17.4549 14.3636 17.503 17.2273C17.535 19.1271 18 22 18 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M6 11.5C6 11.5 6.54513 14.3636 6.49699 17.2273C6.46505 19.1271 6 22 6 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }]];

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

BackMuscleBodyIcon.displayName = 'BackMuscleBodyIcon';
export default BackMuscleBodyIcon;
