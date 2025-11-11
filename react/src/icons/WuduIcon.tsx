import React from 'react';
import config from '../config';

interface WuduIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name WuduIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/wudu)
 * @see {@link https://clicons.dev/icon/wudu} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const WuduIcon = React.forwardRef<SVGSVGElement, WuduIconProps>(
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

    const iconData = [["path", { d: "M16.5281 2L13.6469 4.97519C12.0996 6.60052 12.1264 9.21756 13.6736 10.8153C15.2476 12.4131 17.782 12.3856 19.3292 10.7878C20.9032 9.16248 20.8765 6.5454 19.3292 4.94762L16.5281 2Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M4.5 14H6.89482C7.18897 14 7.47908 14.0663 7.74217 14.1936L9.78415 15.1816C10.0472 15.3089 10.3373 15.3751 10.6315 15.3751H11.6741C12.6825 15.3751 13.5 16.1662 13.5 17.142C13.5 17.1814 13.473 17.2161 13.4338 17.2269L10.8929 17.9295C10.4371 18.0555 9.949 18.0116 9.525 17.8064L7.34211 16.7503M13.5 16.5L18.0928 15.0889C18.907 14.8352 19.7871 15.136 20.2971 15.8423C20.6659 16.3529 20.5157 17.0842 19.9785 17.3942L12.4629 21.7305C11.9849 22.0063 11.4209 22.0736 10.8952 21.9176L4.5 20.0199", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

WuduIcon.displayName = 'WuduIcon';
export default WuduIcon;
