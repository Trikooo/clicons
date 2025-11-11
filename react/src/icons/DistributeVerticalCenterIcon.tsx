import React from 'react';
import config from '../config';

interface DistributeVerticalCenterIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name DistributeVerticalCenterIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/distribute-vertical-center)
 * @see {@link https://clicons.dev/icon/distribute-vertical-center} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const DistributeVerticalCenterIcon = React.forwardRef<SVGSVGElement, DistributeVerticalCenterIconProps>(
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

    const iconData = [["path", { d: "M5 17L2 17M19 17L22 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M8.00232 7C8.00232 6.15611 7.91895 5.18211 8.75232 4.70096C9.10039 4.5 9.5677 4.5 10.5023 4.5L13.5023 4.5C14.4369 4.5 14.9042 4.5 15.2523 4.70096C16.0857 5.18211 16.0023 6.15611 16.0023 7C16.0023 7.84389 16.0857 8.81789 15.2523 9.29904C14.9042 9.5 14.4369 9.5 13.5023 9.5H10.5023C9.5677 9.5 9.10039 9.5 8.75232 9.29904C7.91895 8.81789 8.00232 7.84389 8.00232 7Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M5.00232 17C5.00232 16.1561 4.91895 15.1821 5.75232 14.701C6.10039 14.5 6.5677 14.5 7.50232 14.5L16.5023 14.5C17.4369 14.5 17.9042 14.5 18.2523 14.701C19.0857 15.1821 19.0023 16.1561 19.0023 17C19.0023 17.8439 19.0857 18.8179 18.2523 19.299C17.9042 19.5 17.4369 19.5 16.5023 19.5H7.50232C6.5677 19.5 6.10039 19.5 5.75232 19.299C4.91895 18.8179 5.00232 17.8439 5.00232 17Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M8 7L2 7M16 7L22 7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

DistributeVerticalCenterIcon.displayName = 'DistributeVerticalCenterIcon';
export default DistributeVerticalCenterIcon;
