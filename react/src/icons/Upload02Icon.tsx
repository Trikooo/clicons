import React from 'react';
import config from '../config';

interface Upload02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Upload02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/upload02)
 * @see {@link https://clicons.dev/icon/upload02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Upload02Icon = React.forwardRef<SVGSVGElement, Upload02IconProps>(
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

    const iconData = [["path", { d: "M16.9502 8.3183C17.198 7.68602 16.5075 6.92738 15.1266 5.41011C13.6701 3.80984 12.92 3.00959 11.9999 3C11.0798 3.00959 10.3297 3.80984 8.8732 5.41011C7.49227 6.92738 6.80181 7.68602 7.04953 8.3183C7.05857 8.34138 7.06839 8.36414 7.07898 8.38653C7.34917 8.95795 8.24466 8.99712 9.99989 8.9998V15.5C9.99989 15.965 9.99989 16.1975 10.051 16.3882C10.1897 16.9059 10.594 17.3102 11.1117 17.4489C11.3024 17.5 11.5349 17.5 11.9999 17.5C12.4648 17.5 12.6973 17.5 12.8881 17.4489C13.4057 17.3102 13.81 16.9059 13.9487 16.3882C13.9998 16.1975 13.9998 15.965 13.9998 15.5V8.9998C15.7551 8.99712 16.6506 8.95796 16.9208 8.38653C16.9314 8.36414 16.9412 8.34138 16.9502 8.3183Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M4.99998 21H19", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

Upload02Icon.displayName = 'Upload02Icon';
export default Upload02Icon;
