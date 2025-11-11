import React from 'react';
import config from '../config';

interface ZoomIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ZoomIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/zoom)
 * @see {@link https://clicons.dev/icon/zoom} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ZoomIcon = React.forwardRef<SVGSVGElement, ZoomIconProps>(
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

    const iconData = [["path", { d: "M2 10V8C2 7.05719 2 6.58579 2.29289 6.29289C2.58579 6 3.05719 6 4 6H7C10.7712 6 12.6569 6 13.8284 7.17157C15 8.34315 15 10.2288 15 14V16C15 16.9428 15 17.4142 14.7071 17.7071C14.4142 18 13.9428 18 13 18H10C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17.8995 9.07049L18.5997 8.39526C20.0495 6.99707 20.7744 6.29798 21.3872 6.55106C22 6.80414 22 7.80262 22 9.79956V14.2004C22 16.1974 22 17.1959 21.3872 17.4489C20.7744 17.702 20.0495 17.0029 18.5997 15.6047L17.8995 14.9295C17.0122 14.0738 17 14.0453 17 12.8231V11.1769C17 9.95473 17.0122 9.92624 17.8995 9.07049Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

ZoomIcon.displayName = 'ZoomIcon';
export default ZoomIcon;
