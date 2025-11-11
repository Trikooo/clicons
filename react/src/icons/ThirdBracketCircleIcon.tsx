import React from 'react';
import config from '../config';

interface ThirdBracketCircleIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ThirdBracketCircleIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/third-bracket-circle)
 * @see {@link https://clicons.dev/icon/third-bracket-circle} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ThirdBracketCircleIcon = React.forwardRef<SVGSVGElement, ThirdBracketCircleIconProps>(
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

    const iconData = [["path", { d: "M14 16C14.9241 16 15.6733 15.4883 15.6733 14.8571C15.6733 13.6365 15.6869 13.1336 16.755 12.4041C17.0817 12.1809 17.0817 11.8191 16.755 11.5959C15.6869 10.8664 15.6733 10.3635 15.6733 9.14286C15.6733 8.51167 14.9241 8 14 8M10 16C9.07588 16 8.32673 15.4883 8.32673 14.8571C8.32673 13.6365 8.31312 13.1336 7.24505 12.4041C6.91832 12.1809 6.91832 11.8191 7.24504 11.5959C8.31312 10.8664 8.32673 10.3635 8.32673 9.14286C8.32673 8.51167 9.07588 8 10 8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5", key: "1" }]];

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

ThirdBracketCircleIcon.displayName = 'ThirdBracketCircleIcon';
export default ThirdBracketCircleIcon;
