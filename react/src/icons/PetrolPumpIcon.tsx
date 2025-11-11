import React from 'react';
import config from '../config';

interface PetrolPumpIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PetrolPumpIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/petrol-pump)
 * @see {@link https://clicons.dev/icon/petrol-pump} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PetrolPumpIcon = React.forwardRef<SVGSVGElement, PetrolPumpIconProps>(
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

    const iconData = [["path", { d: "M3.5 21.5V8.5C3.5 5.67157 3.5 4.25736 4.37868 3.37868C5.25736 2.5 6.67157 2.5 9.5 2.5C12.3284 2.5 13.7426 2.5 14.6213 3.37868C15.5 4.25736 15.5 5.67157 15.5 8.5L15.5 21.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M3.5 10.5H15.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M2.5 21.5H16.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M15.5 14.5H16.5C17.6046 14.5 18.5 15.3954 18.5 16.5V17C18.5 17.8284 19.1716 18.5 20 18.5C20.8284 18.5 21.5 17.8284 21.5 17V11.5M20.5 7.5L20.9142 7.91421C21.2893 8.28929 21.5 8.79799 21.5 9.32843V11.5M20.5 7.5L18.5 5.5M20.5 7.5V9.67157C20.5 10.202 20.7107 10.7107 21.0858 11.0858L21.5 11.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

PetrolPumpIcon.displayName = 'PetrolPumpIcon';
export default PetrolPumpIcon;
