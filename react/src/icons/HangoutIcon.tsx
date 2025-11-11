import React from 'react';
import config from '../config';

interface HangoutIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HangoutIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hangout)
 * @see {@link https://clicons.dev/icon/hangout} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HangoutIcon = React.forwardRef<SVGSVGElement, HangoutIconProps>(
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

    const iconData = [["path", { d: "M12 22C16 22 21 16 21 11C21 6 16.9706 2 12 2C7.02944 2 3 6 3 11C3 16 7.02944 20 12 20V22Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M10.5 11.5V10C10.5 9.05719 10.5 8.58579 10.2071 8.29289C9.91421 8 9.44281 8 8.5 8C7.55719 8 7.08579 8 6.79289 8.29289C6.5 8.58579 6.5 9.05719 6.5 10V10.5C6.5 10.9659 6.5 11.1989 6.57612 11.3827C6.67761 11.6277 6.87229 11.8224 7.11732 11.9239C7.30109 12 7.8312 12 8.29714 12C8.51058 12.9056 8 14 8 14C9.38071 14 10.5 12.8807 10.5 11.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M17.5 11.5V10C17.5 9.05719 17.5 8.58579 17.2071 8.29289C16.9142 8 16.4428 8 15.5 8C14.5572 8 14.0858 8 13.7929 8.29289C13.5 8.58579 13.5 9.05719 13.5 10V10.5C13.5 10.9659 13.5 11.1989 13.5761 11.3827C13.6776 11.6277 13.8723 11.8224 14.1173 11.9239C14.3011 12 14.8312 12 15.2971 12C15.5106 12.9056 15 14 15 14C16.3807 14 17.5 12.8807 17.5 11.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

HangoutIcon.displayName = 'HangoutIcon';
export default HangoutIcon;
