import React from 'react';
import config from '../config';

interface ChefIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ChefIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/chef)
 * @see {@link https://clicons.dev/icon/chef} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ChefIcon = React.forwardRef<SVGSVGElement, ChefIconProps>(
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

    const iconData = [["path", { d: "M15.3979 4.40951C15.9703 4.02542 16.659 3.80138 17.4 3.80138C19.3882 3.80138 21 5.4144 21 7.40415C21 9.31828 19.5084 10.8838 17.625 11H17M15.3979 4.40951C14.9058 3.0062 13.5703 2 12 2C10.4297 2 9.09418 3.0062 8.60215 4.40951M15.3979 4.40951C15.5288 4.78297 15.6 5.18455 15.6 5.60277C15.6 5.91378 15.5606 6.21558 15.4866 6.50346M9.71838 5.60277C9.44207 5.12473 9.05914 4.71612 8.60215 4.40951M8.60215 4.40951C8.02968 4.02543 7.34099 3.80138 6.6 3.80138C4.61177 3.80138 3 5.4144 3 7.40415C3 9.31828 4.49159 10.8838 6.375 11H7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17 14V10M7 14V10", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M18 14.5C16.401 13.8776 14.3005 13.5 12 13.5C9.69952 13.5 7.59905 13.8776 6 14.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M17 17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "3" }]];

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

ChefIcon.displayName = 'ChefIcon';
export default ChefIcon;
