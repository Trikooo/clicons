import React from 'react';
import config from '../config';

interface SettingError04IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SettingError04Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/setting-error04)
 * @see {@link https://clicons.dev/icon/setting-error04} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SettingError04Icon = React.forwardRef<SVGSVGElement, SettingError04IconProps>(
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

    const iconData = [["path", { d: "M17 15V17M17.009 19H17M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15.0287 9.24471C14.4228 8.20147 13.2933 7.5 12 7.5C10.067 7.5 8.5 9.067 8.5 11C8.5 12.0657 8.97625 13.0201 9.72753 13.662", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M21.984 10.74C21.96 10.2 21.5969 9.5418 20.7906 8.15201L18.8669 4.83622C18.0638 3.45197 17.6623 2.75984 17.0019 2.37992C16.3416 2 15.5402 2 13.9373 2H10.0627C8.45982 2 7.6584 2 6.99807 2.37992C6.33774 2.75984 5.93619 3.45196 5.13311 4.83621L3.20942 8.152C2.40314 9.5418 2 10.2366 2 11C2 11.7634 2.40314 12.4582 3.20942 13.848L5.13311 17.1638C5.93619 18.548 6.33774 19.2402 6.99807 19.6201C7.62 19.92 7.99712 20 9.6 20", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }]];

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

SettingError04Icon.displayName = 'SettingError04Icon';
export default SettingError04Icon;
