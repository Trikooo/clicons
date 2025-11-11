import React from 'react';
import config from '../config';

interface PointingLeft04IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PointingLeft04Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/pointing-left04)
 * @see {@link https://clicons.dev/icon/pointing-left04} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PointingLeft04Icon = React.forwardRef<SVGSVGElement, PointingLeft04IconProps>(
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

    const iconData = [["path", { d: "M14.5 9.91601L11 9.91601M11 9.91601L4.75 9.91601C3.7835 9.91601 3 10.6995 3 11.666C3 12.6325 3.7835 13.416 4.75 13.416H10L10.4776 16.493C10.7669 18.4216 10.9115 19.386 11.3184 20.0652C11.9906 21.1872 13 22 14.4736 22C15.5 22 16.1886 21.7463 18.0387 21.1296C19.2127 20.7383 19.7996 20.5426 20.2643 20.2236C21.0293 19.6983 21.5878 18.9233 21.8442 18.0315C22 17.4898 22 16.8711 22 15.6336V14.2287C22 12.4442 22 11.552 21.6651 10.7858C21.5137 10.4397 21.3141 10.1167 21.0722 9.82659C20.5367 9.18438 19.7387 8.78536 18.1426 7.98731C16.8483 7.34015 16.2011 7.01657 15.5302 7.00083C15.2276 6.99373 14.9256 7.03246 14.6346 7.11571C13.9894 7.30031 13.4448 7.77678 12.3558 8.7297L11 9.91601Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2 4.5L8 4.5M2 4.5C2 3.79977 3.9943 2.49153 4.5 2M2 4.5C2 5.20023 3.9943 6.50847 4.5 7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

PointingLeft04Icon.displayName = 'PointingLeft04Icon';
export default PointingLeft04Icon;
