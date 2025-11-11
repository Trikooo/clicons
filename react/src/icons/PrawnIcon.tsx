import React from 'react';
import config from '../config';

interface PrawnIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PrawnIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/prawn)
 * @see {@link https://clicons.dev/icon/prawn} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PrawnIcon = React.forwardRef<SVGSVGElement, PrawnIconProps>(
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

    const iconData = [["path", { d: "M10.5 5C5.80558 5 2 8.80558 2 13.5C2 18.1944 5.80558 22 10.5 22C15.1944 22 19 18.1944 19 13.5C19 13.0306 18.6156 12.6411 18.1554 12.7339C16.2128 13.1256 14.75 14.842 14.75 16.9M10.5 5H17.3C18.2389 5 19.0218 5.77293 18.7902 6.6828C18.0413 9.62441 15.3747 11.8 12.2 11.8H10.5C9.09167 11.8 7.95 12.9417 7.95 14.35C7.95 15.7583 9.09167 16.9 10.5 16.9H14.75M10.5 5V8.4M14.75 16.9V17.75M5.4 20.3L8.8 16.9M3.275 9.25L7.95 13.075", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M13.5 8L13.491 8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "1" }],
  ["path", { d: "M9 2.00012H20.1608C21.321 2.00012 22.1912 3.0512 21.9637 4.17777C21.6689 5.63739 20.3433 6.67844 18.9189 7.00012", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

PrawnIcon.displayName = 'PrawnIcon';
export default PrawnIcon;
