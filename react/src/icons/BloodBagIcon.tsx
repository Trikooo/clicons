import React from 'react';
import config from '../config';

interface BloodBagIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BloodBagIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/blood-bag)
 * @see {@link https://clicons.dev/icon/blood-bag} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BloodBagIcon = React.forwardRef<SVGSVGElement, BloodBagIconProps>(
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

    const iconData = [["path", { d: "M5 7.37225C13 3.24278 11.5 10.0046 19 7.37228", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M5 9C5 6.19108 5 4.78661 5.67412 3.77772C5.96596 3.34096 6.34096 2.96596 6.77772 2.67412C7.78661 2 9.19108 2 12 2C14.8089 2 16.2134 2 17.2223 2.67412C17.659 2.96596 18.034 3.34096 18.3259 3.77772C19 4.78661 19 6.19108 19 9V11C19 13.8089 19 15.2134 18.3259 16.2223C18.034 16.659 17.659 17.034 17.2223 17.3259C16.2134 18 14.8089 18 12 18C9.19108 18 7.78661 18 6.77772 17.3259C6.34096 17.034 5.96596 16.659 5.67412 16.2223C5 15.2134 5 13.8089 5 11V9Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12.0142 10L10.5736 11.4876C9.79996 12.3003 9.81331 13.6088 10.587 14.4077C11.3739 15.2066 12.6411 15.1928 13.4148 14.3939C14.2017 13.5812 14.1884 12.2727 13.4148 11.4738L12.0142 10Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M8 22C10.2091 22 12 20.2091 12 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

BloodBagIcon.displayName = 'BloodBagIcon';
export default BloodBagIcon;
