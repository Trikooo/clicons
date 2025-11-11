import React from 'react';
import config from '../config';

interface HandPointingLeft03IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name HandPointingLeft03Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/hand-pointing-left03)
 * @see {@link https://clicons.dev/icon/hand-pointing-left03} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const HandPointingLeft03Icon = React.forwardRef<SVGSVGElement, HandPointingLeft03IconProps>(
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

    const iconData = [["path", { d: "M8 11.5004L8 12.5004C8 13.605 8.89543 14.5004 10 14.5004M10 14.5004L11 14.5004M10 14.5004C9.44772 14.5004 9 14.9481 9 15.5004C9 16.605 9.89543 17.5004 11 17.5004M11 17.5004L12 17.5004M11 17.5004C10.4765 17.5004 10.0783 17.9705 10.1644 18.4868L10.2215 18.8292C10.3822 19.7936 11.2166 20.5004 12.1943 20.5004L13.6668 20.5C15.8402 20.5 16.9269 20.5 17.792 20.1689C18.2939 19.9769 18.9339 19.4703 19.3964 19.0652C19.7964 18.7148 20.3038 18.5 20.8356 18.5L22.0002 18.5M10 11.5002L3.5 11.5002C2.67157 11.5002 2 10.8286 2 10.0002C2 9.17178 2.67157 8.50021 3.5 8.50021L13.4624 8.5L11.837 6.8797C11.1239 6.16877 11.1889 4.99772 11.9765 4.36965C12.5791 3.88907 13.4315 3.8758 14.0489 4.33738L18.6471 7.93707C19.5269 8.62579 20.8829 9 22.0002 9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

HandPointingLeft03Icon.displayName = 'HandPointingLeft03Icon';
export default HandPointingLeft03Icon;
