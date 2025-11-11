import React from 'react';
import config from '../config';

interface TableLamp02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name TableLamp02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/table-lamp02)
 * @see {@link https://clicons.dev/icon/table-lamp02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const TableLamp02Icon = React.forwardRef<SVGSVGElement, TableLamp02IconProps>(
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

    const iconData = [["path", { d: "M5 20V22M19 20V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.5556 10H6.44444C4.34931 10 3.30175 10 2.65087 10.5858C2 11.1716 2 12.1144 2 14V16C2 17.8856 2 18.8284 2.65087 19.4142C3.30175 20 4.34931 20 6.44444 20H17.5556C19.6507 20 20.6983 20 21.3491 19.4142C22 18.8284 22 17.8856 22 16V14C22 12.1144 22 11.1716 21.3491 10.5858C20.6983 10 19.6507 10 17.5556 10Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M12 10.0001L12 20.0001", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M16 15.0001L17 15.0001", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M7 15.0001L8 15.0001", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M8 2C6.1038 2 4.51109 3.27976 4.0638 5.01012C3.8557 5.81516 4.15776 6 4.95386 6H11.0461C11.8422 6 12.1443 5.81516 11.9362 5.01012C11.4889 3.27976 9.8962 2 8 2Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }],
  ["path", { d: "M8 6V10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "6" }],
  ["path", { d: "M11 6V7.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "7" }]];

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

TableLamp02Icon.displayName = 'TableLamp02Icon';
export default TableLamp02Icon;
