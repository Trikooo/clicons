import React from 'react';
import config from '../config';

interface CloudMidSnowIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name CloudMidSnowIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/cloud-mid-snow)
 * @see {@link https://clicons.dev/icon/cloud-mid-snow} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CloudMidSnowIcon = React.forwardRef<SVGSVGElement, CloudMidSnowIconProps>(
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

    const iconData = [["path", { d: "M17.4776 8.81069C17.485 8.81066 17.4925 8.81064 17.5 8.81064C19.9853 8.81064 22 10.7618 22 13.1686C22 15.4118 20.25 17.2591 18 17.5M17.4776 8.81069C17.4924 8.65119 17.5 8.48966 17.5 8.32642C17.5 5.38472 15.0376 3 12 3C9.12324 3 6.76233 5.13891 6.52042 7.86418M17.4776 8.81069C17.3753 9.90933 16.9286 10.9118 16.2428 11.716M6.52042 7.86418C3.98398 8.09794 2 10.1668 2 12.6844C2 15.027 3.71776 17.0514 6 17.5M6.52042 7.86418C6.67826 7.84964 6.83823 7.8422 7 7.8422C8.12582 7.8422 9.16474 8.20254 10.0005 8.81064", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 15V21M14.5 16.5L9.50013 19.5M9.5 16.5L14.4999 19.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

CloudMidSnowIcon.displayName = 'CloudMidSnowIcon';
export default CloudMidSnowIcon;
