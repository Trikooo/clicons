import React from 'react';
import config from '../config';

interface GymnasticIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name GymnasticIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/gymnastic)
 * @see {@link https://clicons.dev/icon/gymnastic} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const GymnasticIcon = React.forwardRef<SVGSVGElement, GymnasticIconProps>(
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

    const iconData = [["path", { d: "M14.5 10C14.2791 10.0578 14.0631 10.128 13.8528 10.2099M17.5 10C20.0878 10.6767 22 13.0635 22 15.904C22 19.2707 19.3137 22 16 22C15.2987 22 14.6256 21.8778 14 21.6531M10.5 13.4638C10.1784 14.211 10 15.0363 10 15.904C10 16.8324 10.2043 17.7124 10.5697 18.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15.9977 7C17.4153 7 18.2027 10.4981 16.6484 10.9238C16.2777 11.0254 15.7176 11.0254 15.3469 10.9238C13.7946 10.4986 14.5939 7 15.9977 7Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M16 7V2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M6.5 10C3.91216 10.6767 2 13.0635 2 15.904C2 19.2707 4.68629 22 8 22C11.3137 22 14 19.2707 14 15.904C14 13.0635 12.0878 10.6767 9.5 10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M7.99767 7C9.41527 7 10.2027 10.4981 8.6484 10.9238C8.2777 11.0254 7.71764 11.0254 7.34695 10.9238C5.79459 10.4986 6.59392 7 7.99767 7Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M8 7V2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }]];

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

GymnasticIcon.displayName = 'GymnasticIcon';
export default GymnasticIcon;
