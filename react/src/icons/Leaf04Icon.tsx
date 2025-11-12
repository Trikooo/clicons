import React from 'react';
import config from '../config';

interface Leaf04IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Leaf04Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/leaf04)
 * @see {@link https://clicons.dev/icon/leaf04} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Leaf04Icon = React.forwardRef<SVGSVGElement, Leaf04IconProps>(
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

    const iconData = [
  [
    'path',
    {
      d: 'M8.15658 15.8434C7.07994 15.8362 5.59735 15.5728 4.43407 14.4096C2.3623 12.3378 3.14497 9.25318 3.14497 9.25318C3.14497 9.25318 4.76016 8.84345 6.43811 9.40194C6.42585 9.31006 6.41557 9.217 6.4075 9.12271C6.39316 8.9551 6.38553 8.78381 6.38559 8.60857C6.38553 5.00308 9.59044 3 9.59044 3C9.59044 3 11.5931 4.25174 12.4323 6.55719C15.2245 4.60372 18.6141 5.38589 18.6141 5.38589C18.6141 5.38589 19.3963 8.77553 17.4428 11.5677C19.7483 12.4069 21 14.4096 21 14.4096C21 14.4096 18.9969 17.6145 15.3914 17.6144C15.1177 17.6144 14.8531 17.596 14.5981 17.5619C15.1565 19.2398 14.7468 20.855 14.7468 20.855C14.7468 20.855 11.6622 21.6377 9.59044 19.5659',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M3 21L13 11',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ]
];

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

Leaf04Icon.displayName = 'Leaf04Icon';
export default Leaf04Icon;
