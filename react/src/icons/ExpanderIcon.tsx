import React from 'react';
import config from '../config';

interface ExpanderIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ExpanderIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/expander)
 * @see {@link https://clicons.dev/icon/expander} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ExpanderIcon = React.forwardRef<SVGSVGElement, ExpanderIconProps>(
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

    const iconData = [["path", { d: "M11.3389 16.4973C11.596 16.2812 11.8903 16.1118 12.2031 16.0076C14.2269 15.3726 13.1038 13.8545 14.9394 13.2557C16.356 12.7936 15.9215 12.014 16.4732 11.3559M10.0554 13.9266C10.2532 13.7697 10.4896 13.6582 10.7503 13.6063C11.824 13.4014 11.661 11.7599 12.8011 11.5409C13.5856 11.382 13.498 10.5868 13.906 10.0706M7.48828 12.6413C7.59299 12.2154 8.03959 12.2558 8.35242 12.1517C10.2961 11.4363 9.17295 9.74932 11.0887 9.3997C12.5423 9.18699 11.9807 8.06233 12.6225 7.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M2 15.3338L8.65831 22.0013M2.83725 15.7945L3.51561 15.1582C3.92995 14.7695 4.36858 14.3251 4.93488 14.2845C5.45677 14.2472 6.16403 14.5257 8.10626 15.2098C8.7508 15.4368 9.54862 17.4663 9.66809 18.8082C9.72573 19.4555 9.33783 20.0078 8.88748 20.4764L8.34274 21.0432", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M15.3421 2.00521L21.9674 8.70562M15.798 2.84589L15.1592 3.52202C14.7691 3.935 14.3231 4.37204 14.2798 4.93891C14.2399 5.46132 14.5146 6.17093 15.1881 8.11921C15.4115 8.76541 17.4322 9.57386 18.7716 9.70078C19.4192 9.76214 19.9736 9.37599 20.4442 8.92694L21.0122 8.38487", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

ExpanderIcon.displayName = 'ExpanderIcon';
export default ExpanderIcon;
