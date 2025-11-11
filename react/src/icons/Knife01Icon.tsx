import React from 'react';
import config from '../config';

interface Knife01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Knife01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/knife01)
 * @see {@link https://clicons.dev/icon/knife01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Knife01Icon = React.forwardRef<SVGSVGElement, Knife01IconProps>(
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

    const iconData = [["path", { d: "M18.8865 8.11621L18.8955 8.11621", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "0" }],
  ["path", { d: "M15.6024 16.7446C18.3895 13.7178 20.3287 11.3284 21.54 9.70091C22.203 8.81007 22.5345 8.36466 22.4972 7.75756C22.4193 6.48963 19.2253 3 17.8204 3C17.1774 3 16.66 3.53734 15.6252 4.61201L3.04984 17.6718C2.31672 18.4331 2.31672 19.6675 3.04984 20.4289C3.881 21.2921 5.26287 21.1587 5.92662 20.1512L8.21648 16.6756C9.13465 15.282 9.79389 15.2741 10.8945 16.4171C11.5597 17.108 12.4005 18.395 13.4477 18.3828C14.1008 18.3753 14.6013 17.8317 15.6024 16.7446Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

Knife01Icon.displayName = 'Knife01Icon';
export default Knife01Icon;
