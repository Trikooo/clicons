import React from 'react';
import config from '../config';

interface WhiskIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name WhiskIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/whisk)
 * @see {@link https://clicons.dev/icon/whisk} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const WhiskIcon = React.forwardRef<SVGSVGElement, WhiskIconProps>(
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

    const iconData = [["path", { d: "M20.0209 11.0209C17.6875 13.3544 14.2194 13.6697 12.2749 11.7251C10.3303 9.78056 10.6456 6.31254 12.9791 3.97907C15.3125 1.64561 18.7806 1.33034 20.7251 3.27489C22.6697 5.21944 22.3544 8.68746 20.0209 11.0209Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.9226 8.92264C15.5655 11.2797 13.0178 12.5536 12.2321 11.7679C11.4464 10.9822 12.7203 8.43447 15.0774 6.07736C17.4345 3.72026 19.9822 2.44638 20.7679 3.23208C21.5536 4.01778 20.2797 6.56553 17.9226 8.92264Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M7.54773 18.636L4.63604 21.5477C4.03301 22.1508 3.0553 22.1508 2.45227 21.5477C1.84924 20.9447 1.84924 19.967 2.45227 19.364L5.36396 16.4523C5.96699 15.8492 6.9447 15.8492 7.54773 16.4523C8.15076 17.0553 8.15076 18.033 7.54773 18.636Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M8 16L12 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

WhiskIcon.displayName = 'WhiskIcon';
export default WhiskIcon;
