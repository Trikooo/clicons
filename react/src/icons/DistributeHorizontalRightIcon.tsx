import React from 'react';
import config from '../config';

interface DistributeHorizontalRightIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name DistributeHorizontalRightIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/distribute-horizontal-right)
 * @see {@link https://clicons.dev/icon/distribute-horizontal-right} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const DistributeHorizontalRightIcon = React.forwardRef<SVGSVGElement, DistributeHorizontalRightIconProps>(
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

    const iconData = [["path", { d: "M22 2V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M10 2V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M16.5 8.00232C17.3439 8.00232 18.3179 7.91895 18.799 8.75232C19 9.10039 19 9.5677 19 10.5023V13.5023C19 14.4369 19 14.9042 18.799 15.2523C18.3179 16.0857 17.3439 16.0023 16.5 16.0023C15.6561 16.0023 14.6821 16.0857 14.201 15.2523C14 14.9042 14 14.4369 14 13.5023L14 10.5023C14 9.5677 14 9.10039 14.201 8.75232C14.6821 7.91895 15.6561 8.00232 16.5 8.00232Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M4.5 5.00232C5.34389 5.00232 6.31789 4.91895 6.79904 5.75232C7 6.10039 7 6.5677 7 7.50232L7 16.5023C7 17.4369 7 17.9042 6.79904 18.2523C6.31789 19.0857 5.34389 19.0023 4.5 19.0023C3.65611 19.0023 2.68211 19.0857 2.20096 18.2523C2 17.9042 2 17.4369 2 16.5023L2 7.50232C2 6.5677 2 6.10039 2.20096 5.75232C2.68211 4.91895 3.65611 5.00232 4.5 5.00232Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }]];

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

DistributeHorizontalRightIcon.displayName = 'DistributeHorizontalRightIcon';
export default DistributeHorizontalRightIcon;
