import React from 'react';
import config from '../config';

interface KidneysIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name KidneysIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/kidneys)
 * @see {@link https://clicons.dev/icon/kidneys} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const KidneysIcon = React.forwardRef<SVGSVGElement, KidneysIconProps>(
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

    const iconData = [["path", { d: "M9.98556 6C10.1428 4.59395 9.00449 3 6.57134 3C4.04666 3 1.99999 5.46243 1.99999 8.5C1.99999 11.5376 3.53887 14 6.06355 14C7.67995 14 8.53551 12.7459 8.35578 11.6589", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M7 8C8.50006 7.9996 10.4999 8.4957 10.4999 11.64C10.4999 15.8 8.49942 17.36 10.0005 21M17 8C15.4999 7.9996 13.5001 8.4957 13.5001 11.64C13.5001 15.8 15.5006 17.36 13.9995 21", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M6.61035 6C6.81406 6.57143 7.16038 7.94286 6.91592 8.85714C6.81407 9.2381 6.48829 10 6 10", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M14.0144 6C13.8572 4.59395 14.9955 3 17.4287 3C19.9533 3 22 5.46243 22 8.5C22 11.5376 20.4611 14 17.9364 14C16.2406 14 15.3822 12.6196 15.6783 11.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M17.3897 6C17.1859 6.57143 16.8396 7.94286 17.0841 8.85714C17.1859 9.2381 17.5117 10 18 10", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "4" }]];

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

KidneysIcon.displayName = 'KidneysIcon';
export default KidneysIcon;
