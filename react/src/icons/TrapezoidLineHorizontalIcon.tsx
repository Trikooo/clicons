import React from 'react';
import config from '../config';

interface TrapezoidLineHorizontalIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name TrapezoidLineHorizontalIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/trapezoid-line-horizontal)
 * @see {@link https://clicons.dev/icon/trapezoid-line-horizontal} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const TrapezoidLineHorizontalIcon = React.forwardRef<SVGSVGElement, TrapezoidLineHorizontalIconProps>(
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

    const iconData = [["path", { d: "M5 12C5 9.33466 5 8.00198 5.62726 7.05511C5.69576 6.95171 5.76916 6.85287 5.84711 6.75905C6.56098 5.89991 7.69057 5.71144 9.94975 5.33451L12.1515 4.96715C15.338 4.4355 16.9312 4.16967 17.9656 5.21745C19 6.26523 19 8.14492 19 11.9043V12.0957C19 15.8551 19 17.7348 17.9656 18.7826C16.9312 19.8303 15.338 19.5645 12.1515 19.0328L9.94974 18.6655C7.69057 18.2886 6.56098 18.1001 5.84711 17.2409C5.76916 17.1471 5.69576 17.0483 5.62726 16.9449C5 15.998 5 14.6653 5 12Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M22 12L2 12", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }]];

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

TrapezoidLineHorizontalIcon.displayName = 'TrapezoidLineHorizontalIcon';
export default TrapezoidLineHorizontalIcon;
