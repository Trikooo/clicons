import React from 'react';
import config from '../config';

interface Dna01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Dna01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/dna01)
 * @see {@link https://clicons.dev/icon/dna01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Dna01Icon = React.forwardRef<SVGSVGElement, Dna01IconProps>(
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

    const iconData = [["path", { d: "M8.6671 22C9.20107 21.466 9.73505 20.9321 9.24127 18M8.6671 15.3336C7.33381 10.0004 8.33378 9.00042 8.6671 8.6671C9.00042 8.33378 10.0004 7.33381 15.3336 8.6671M8.6671 15.3336C3.33394 14.0003 2.66664 14.6663 2 15.3329M8.6671 15.3336C14.0003 16.6668 14.9996 15.6662 15.3329 15.3329C15.6662 14.9996 16.6668 14.0003 15.3336 8.6671M22 8.6671C21.3334 9.33375 20.6667 10.0004 15.3336 8.6671M15.3329 2C14.799 2.53394 14.2654 3.06829 14.7592 6", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }]];

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

Dna01Icon.displayName = 'Dna01Icon';
export default Dna01Icon;
