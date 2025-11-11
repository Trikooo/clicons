import React from 'react';
import config from '../config';

interface HairDryerIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HairDryerIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hair-dryer)
 * @see {@link https://clicons.dev/icon/hair-dryer} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HairDryerIcon = React.forwardRef<SVGSVGElement, HairDryerIconProps>(
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

    const iconData = [["path", { d: "M8.69128 2.15168C5.80039 1.36313 3 3.74875 3 7C3 10.2513 5.80039 12.6369 8.69128 11.8483C10.9979 11.2192 14.2043 9.58049 16.6244 9.80217C17.5008 9.88246 18.126 10.6464 18.9467 10.8707C20.0559 11.1739 20.4902 9.50002 20.7285 8.75297C21.0905 7.61771 21.0905 6.38229 20.7285 5.24703C20.4902 4.49998 20.0559 2.82606 18.9467 3.12929C18.126 3.35364 17.5008 4.11755 16.6244 4.19783C14.2043 4.41951 10.9979 2.78085 8.69128 2.15168Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M5.5 11.5C6.87177 12.9095 6.77428 15.2676 6.8188 17.376C6.8373 18.2518 7.50261 19 8.34709 19H9.5674C10.2374 19 10.6397 17.4957 10.8465 17.0224C11.1215 16.3927 11.0041 15.6743 10.6757 15.0727C9.98228 13.8023 9.5 13 10 11.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M16.5 4.5L16.8789 6.01942C17.0404 6.66673 17.0404 7.33327 16.8789 7.98058L16.5 9.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M9 19C9 19.9319 9 20.3978 8.82601 20.7654C8.59402 21.2554 8.14906 21.6448 7.58899 21.8478C7.16894 22 6.06501 22 5 22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

HairDryerIcon.displayName = 'HairDryerIcon';
export default HairDryerIcon;
