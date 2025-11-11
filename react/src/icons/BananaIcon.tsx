import React from 'react';
import config from '../config';

interface BananaIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BananaIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/banana)
 * @see {@link https://clicons.dev/icon/banana} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BananaIcon = React.forwardRef<SVGSVGElement, BananaIconProps>(
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

    const iconData = [["path", { d: "M14 11.9171C16 10.9087 18.478 11.7529 19.5777 14.1858C21.2282 17.8369 17.7619 21.8826 14.0077 21.9975C13.8997 22.0008 13.7859 21.9824 13.6861 21.9409C10.9391 20.7977 17.4719 16.7411 15.3319 14.5481", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12.2591 13C12.753 11.1383 11.9705 9.25852 9.99515 9.72396C8.79898 10.0058 8.51642 10.8832 7.79305 10.9566C7.23113 11.0137 6.88441 10.372 7.03542 9.83562C8.1091 6.02216 15.5 6.03124 15.5 10.0073", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M14.0009 18.9084C11.807 19.9994 7.12675 20.6141 5.01867 19.0798C4.44082 18.6592 3.69853 18.7865 3.0238 18.7865C1.38828 18.7865 1.84992 15.5993 3.43752 16.2134C3.99904 16.4306 5.0201 16.7126 5.78158 16.281C10.6831 13.5034 15.9947 13.024 17.7464 5.71395C18.5261 2.46023 18.7506 2 20.0529 2C21.3553 2 22.9193 5.00117 21.3265 9.95847C20.9057 11.2678 20.4081 12.5772 19.6965 13.7991", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }]];

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

BananaIcon.displayName = 'BananaIcon';
export default BananaIcon;
