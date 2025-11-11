import React from 'react';
import config from '../config';

interface AccelerationIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AccelerationIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/acceleration)
 * @see {@link https://clicons.dev/icon/acceleration} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AccelerationIcon = React.forwardRef<SVGSVGElement, AccelerationIconProps>(
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

    const iconData = [["path", { d: "M2.49805 18.4138V11.1909C2.49805 9.86228 2.49805 9.19798 3.09674 9.03265C3.69542 8.86733 4.40002 9.33706 5.80922 10.2765L18.5832 18.7926C19.9924 19.732 20.697 20.2018 20.449 20.6009C20.201 21 19.2046 21 17.2117 21H6.37733C4.54862 21 3.63426 21 3.06616 20.6213C2.49805 20.2425 2.49805 19.633 2.49805 18.4138Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M8.49805 11C10.7072 11 12.498 9.20914 12.498 7C12.498 4.79086 10.7072 3 8.49805 3C6.28891 3 4.49805 4.79086 4.49805 7C4.49805 9.20914 6.28891 11 8.49805 11Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M15.502 9.996L21.4055 13.38M21.4055 13.38C21.7255 13.0406 21.1848 12.06 20.7283 10.728M21.4055 13.38C21.1848 13.62 20.4639 13.68 18.7639 13.998", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

AccelerationIcon.displayName = 'AccelerationIcon';
export default AccelerationIcon;
