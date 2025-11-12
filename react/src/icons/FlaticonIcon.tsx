import React from 'react';
import config from '../config';

interface FlaticonIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name FlaticonIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/flaticon)
 * @see {@link https://clicons.dev/icon/flaticon} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const FlaticonIcon = React.forwardRef<SVGSVGElement, FlaticonIconProps>(
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
      d: 'M4.4235 10.2502L9.61532 19.0797L9.61533 19.0797C10.1023 19.9079 10.3458 20.322 10.6054 20.5488C11.296 21.1523 12.2368 21.1502 12.9255 20.5437C13.1844 20.3157 13.4266 19.9006 13.911 19.0703L10.2334 12.955L12.0899 9.74998H8.30599L6.6712 7.03158L13.6646 7.03158L16 3L7.60332 3.00004C4.33248 3.00004 2.69707 3.00004 2.15323 4.24003C1.60939 5.48002 2.54743 7.07009 4.4235 10.2502Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.8349 4.22015C22.4209 5.50363 21.4101 7.14947 19.3883 10.4412L15.3729 17L13 13.2101L19.1577 3C20.621 3.10933 21.4638 3.40743 21.8349 4.22015Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
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

FlaticonIcon.displayName = 'FlaticonIcon';
export default FlaticonIcon;
