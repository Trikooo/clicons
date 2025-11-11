import React from 'react';
import config from '../config';

interface AddMoneyCircleIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AddMoneyCircleIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/add-money-circle)
 * @see {@link https://clicons.dev/icon/add-money-circle} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AddMoneyCircleIcon = React.forwardRef<SVGSVGElement, AddMoneyCircleIconProps>(
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

    const iconData = [["path", { d: "M11 9.5H12.5C13.3284 9.5 14 10.1716 14 11M11 9.5H9.5C8.67157 9.5 8 10.1716 8 11V11.5C8 12.3284 8.67157 13 9.5 13H12.5C13.3284 13 14 13.6716 14 14.5V15C14 15.8284 13.3284 16.5 12.5 16.5H11M11 9.5V8M11 16.5H9.5C8.67157 16.5 8 15.8284 8 15M11 16.5V18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 4.05493C11.6717 4.01863 11.338 4 11 4C6.02944 4 2 8.02944 2 13C2 17.9705 6.02944 22 11 22C15.9705 22 20 17.9705 20 13C20 12.662 19.9814 12.3283 19.9451 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M18.5 2V9M22 5.5L15 5.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

AddMoneyCircleIcon.displayName = 'AddMoneyCircleIcon';
export default AddMoneyCircleIcon;
