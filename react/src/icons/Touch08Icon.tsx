import React from 'react';
import config from '../config';

interface Touch08IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Touch08Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/touch08)
 * @see {@link https://clicons.dev/icon/touch08} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Touch08Icon = React.forwardRef<SVGSVGElement, Touch08IconProps>(
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

    const iconData = [["path", { d: "M7.77888 13.9566V9.49309M7.77888 9.49309V3.97813C7.77888 3.15856 8.46218 2.49805 9.28215 2.49805C10.1021 2.49805 10.7482 3.15856 10.7482 3.97813V7.97397M7.77888 9.49309C6.46416 10.6839 5.04938 12.1882 4.85886 12.5736C3.97239 13.9223 4.06531 14.5753 5.05322 16.2256C5.89231 17.6273 7.02077 19.1829 7.08664 19.2576C7.7571 20.017 7.62379 20.0172 8.59557 20.7303C9.46334 21.3323 11.2633 21.7517 15.483 21.3323C18.9206 20.8015 19.7442 17.8022 19.7263 16.3689V12.8293C19.9405 9.8874 18.7102 9.75461 16.4763 9.46504M10.7482 7.97397V10.4974M10.7482 7.97397C11.3057 7.06531 13.3304 7.43252 13.725 9.1484M13.7606 10.4935V9.49309C13.7606 9.41423 13.7567 9.33512 13.7456 9.2571M13.725 9.1484C13.7266 9.15562 13.7283 9.16286 13.7299 9.17013C13.7362 9.19892 13.7414 9.22793 13.7456 9.2571M13.725 9.1484C13.7291 9.18336 13.7359 9.2196 13.7456 9.2571M13.725 9.1484C13.5848 7.95243 16.6168 8.24397 16.7402 10.3473V11.4904", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }]];

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

Touch08Icon.displayName = 'Touch08Icon';
export default Touch08Icon;
