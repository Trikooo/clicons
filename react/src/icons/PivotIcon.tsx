import React from 'react';
import config from '../config';

interface PivotIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PivotIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/pivot)
 * @see {@link https://clicons.dev/icon/pivot} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PivotIcon = React.forwardRef<SVGSVGElement, PivotIconProps>(
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

    const iconData = [["path", { d: "M21.5 11.5C21.5 7.27027 21.5 5.1554 20.302 3.75276C20.1319 3.55358 19.9464 3.36808 19.7472 3.19797C18.3446 2 16.2297 2 12 2C7.77027 2 5.6554 2 4.25276 3.19797C4.05358 3.36808 3.86808 3.55358 3.69797 3.75276C2.5 5.1554 2.5 7.27027 2.5 11.5C2.5 15.7297 2.5 17.8446 3.69797 19.2472C3.86808 19.4464 4.05358 19.6319 4.25276 19.802C5.54022 20.9016 7.42774 20.9919 11 20.9993", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M8.5 2.5L8.5 20.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M21 8L3 8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M16.5 17C15.9943 17.4915 14 18.7998 14 19.5C14 20.2002 15.9943 21.5085 16.5 22M14.5 19.5H16.5C18.3692 19.5 19.3038 19.5 20 19.0981C20.4561 18.8348 20.8348 18.4561 21.0981 18C21.5 17.3038 21.5 16.3692 21.5 14.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

PivotIcon.displayName = 'PivotIcon';
export default PivotIcon;
