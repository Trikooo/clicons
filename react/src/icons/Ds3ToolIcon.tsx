import React from 'react';
import config from '../config';

interface Ds3ToolIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Ds3ToolIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ds3-tool)
 * @see {@link https://clicons.dev/icon/ds3-tool} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Ds3ToolIcon = React.forwardRef<SVGSVGElement, Ds3ToolIconProps>(
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

    const iconData = [["path", { d: "M5.00572 18.0063C5.16174 15.5109 5.62111 13.6848 6.01036 12.6241C6.20688 12.0886 6.62968 11.6898 7.17097 11.5562C10.1746 10.8146 13.8254 10.8146 16.829 11.5562C17.3703 11.6898 17.7931 12.0886 17.9896 12.6241C18.3789 13.6848 18.8383 15.5109 18.9943 18.0063C19.0868 19.4855 18.0439 20.3148 16.8601 20.9233C16.5119 21.1023 16.0884 20.9572 15.9143 20.5992L15.0923 18.9089C14.9257 18.5662 14.5755 18.3484 14.1913 18.3484H9.80865C9.42452 18.3484 9.07434 18.5662 8.90771 18.9089L8.08569 20.5992C7.91158 20.9572 7.48815 21.1023 7.13993 20.9233C5.95613 20.3148 4.91323 19.4855 5.00572 18.0063Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M22 15V11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11V15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M10.5 6H13.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M9.00801 15L8.99902 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "3" }],
  ["path", { d: "M15.008 15L14.999 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "4" }]];

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

Ds3ToolIcon.displayName = 'Ds3ToolIcon';
export default Ds3ToolIcon;
