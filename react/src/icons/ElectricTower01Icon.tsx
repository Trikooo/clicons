import React from 'react';
import config from '../config';

interface ElectricTower01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ElectricTower01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/electric-tower01)
 * @see {@link https://clicons.dev/icon/electric-tower01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ElectricTower01Icon = React.forwardRef<SVGSVGElement, ElectricTower01IconProps>(
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

    const iconData = [["path", { d: "M9 6L9.39981 8.21413C9.46594 8.64819 9.42564 9.08872 9.2813 9.50982L5 22M15 6L14.6002 8.21413C14.5341 8.64819 14.5744 9.08872 14.7187 9.50982L19 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M3 11L3.32375 9.92082C3.41097 9.63011 3.45457 9.48476 3.55302 9.36314C3.65148 9.24153 3.79688 9.1534 4.08769 8.97715L8.47402 6.31877C8.73481 6.16072 8.8652 6.0817 9.01594 6.04085C9.16668 6 9.32791 6 9.65037 6H14.3496C14.6721 6 14.8333 6 14.9841 6.04085C15.1348 6.0817 15.2652 6.16073 15.526 6.31877L19.9123 8.97715C20.2031 9.1534 20.3485 9.24153 20.447 9.36314C20.5454 9.48475 20.589 9.63012 20.6762 9.92082L21 11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M3 22H21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M4 9H19.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M9.5 10L16 14.5L5 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M14.5 10L8 14.5L19 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }],
  ["path", { d: "M9 6L10.4 3.76C11.1333 2.58667 11.5 2 12 2C12.5 2 12.8667 2.58667 13.6 3.76L15 6", stroke: "currentColor", strokeWidth: "1.5", key: "6" }]];

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

ElectricTower01Icon.displayName = 'ElectricTower01Icon';
export default ElectricTower01Icon;
