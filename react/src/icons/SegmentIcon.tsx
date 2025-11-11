import React from 'react';
import config from '../config';

interface SegmentIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SegmentIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/segment)
 * @see {@link https://clicons.dev/icon/segment} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SegmentIcon = React.forwardRef<SVGSVGElement, SegmentIconProps>(
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

    const iconData = [["path", { d: "M11 14L9.07143 8.5M9.07143 8.5L7.37934 3.67442C7.33237 3.54046 7.30888 3.47349 7.27917 3.4166C7.16531 3.19858 6.97093 3.0495 6.74934 3.01024C6.69153 3 6.62769 3 6.5 3C6.37231 3 6.30847 3 6.25066 3.01024C6.02907 3.0495 5.83469 3.19858 5.72083 3.4166C5.69112 3.47349 5.66763 3.54046 5.62066 3.67442L3.92857 8.5M9.07143 8.5L3.92857 8.5M3.92857 8.5L2 14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M20 19C20 20.1046 19.1046 21 18 21C16.8954 21 16 20.1046 16 19M20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19M20 19H22M16 19H8M8 19C8 20.1046 7.10457 21 6 21C4.89543 21 4 20.1046 4 19M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19M4 19H2", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M15 8.5V5C15 4.05719 15 3.58579 15.2929 3.29289C15.5858 3 16.0572 3 17 3H18.25C19.7688 3 21 4.23122 21 5.75C21 7.26878 19.7688 8.5 18.25 8.5H15ZM15 8.5H19.25C20.7688 8.5 22 9.73122 22 11.25C22 12.7688 20.7688 14 19.25 14H17C16.0572 14 15.5858 14 15.2929 13.7071C15 13.4142 15 12.9428 15 12V8.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

SegmentIcon.displayName = 'SegmentIcon';
export default SegmentIcon;
