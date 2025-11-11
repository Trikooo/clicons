import React from 'react';
import config from '../config';

interface WindPower03IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name WindPower03Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/wind-power03)
 * @see {@link https://clicons.dev/icon/wind-power03} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const WindPower03Icon = React.forwardRef<SVGSVGElement, WindPower03IconProps>(
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

    const iconData = [["path", { d: "M14 10.8664C14 11.9719 13.1046 12.868 12 12.868C10.8954 12.868 10 11.9719 10 10.8664C10 9.76091 10.8954 8.86475 12 8.86475C13.1046 8.86475 14 9.76091 14 10.8664Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13.9907 10.6843L20 14.3678C19.1716 15.8036 17.3368 16.2955 15.9019 15.4666L11.7373 12.8487", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M13.484 9.50448L13.484 2.36762C11.8271 2.36758 10.5168 3.71191 10.5168 5.36975C10.5168 5.36975 10.5168 7.88979 10.5168 9.50451", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M10.007 10.6865L4 14.3681C4.82843 15.8039 6.6632 16.2958 8.09808 15.4669L12.2617 12.8502", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M13.4502 16.8694L13.7702 18.8916C13.9962 20.4963 14.1092 21.2987 13.8547 21.8356C13.6001 22.3725 13.1067 22.3726 12.1199 22.3726H11.8801C10.8933 22.3726 10.3999 22.3725 10.1453 21.8356C9.89078 21.2987 10.0038 20.4963 10.2298 18.8916L10.5498 16.8694", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]];

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

WindPower03Icon.displayName = 'WindPower03Icon';
export default WindPower03Icon;
