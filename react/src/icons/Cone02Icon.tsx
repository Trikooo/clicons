import React from 'react';
import config from '../config';

interface Cone02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Cone02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/cone02)
 * @see {@link https://clicons.dev/icon/cone02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Cone02Icon = React.forwardRef<SVGSVGElement, Cone02IconProps>(
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

    const iconData = [["path", { d: "M12 19H15M15 19C15 18.2322 14.7071 17.4645 14.1213 16.8787C12.9497 15.7071 11.0503 15.7071 9.87868 16.8787C8.70711 18.0503 8.70711 19.9497 9.87868 21.1213C11.0503 22.2929 12.9497 22.2929 14.1213 21.1213C14.7071 20.5355 15 19.7678 15 19Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 3L12 6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M11.9998 12H12.0088", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "2" }],
  ["path", { d: "M11.9998 9H12.0088", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "3" }],
  ["path", { d: "M2.94867 11.4964C4.92231 14.2156 8.24 16 12 16C15.76 16 19.0777 14.2156 21.0513 11.4964C21.7599 10.5203 22.1141 10.0322 21.9672 9.18232C21.8203 8.33248 21.1837 7.89241 19.9104 7.01228L14.3985 3.20228C13.239 2.40076 12.6592 2 12 2C11.3408 2 10.761 2.40076 9.60147 3.20228L4.08961 7.01228C2.81635 7.89241 2.17971 8.33248 2.03278 9.18232C1.88585 10.0322 2.24013 10.5203 2.94867 11.4964Z", stroke: "currentColor", strokeWidth: "1.5", key: "4" }]];

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

Cone02Icon.displayName = 'Cone02Icon';
export default Cone02Icon;
