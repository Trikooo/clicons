import React from 'react';
import config from '../config';

interface BorderLeft02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BorderLeft02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/border-left02)
 * @see {@link https://clicons.dev/icon/border-left02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BorderLeft02Icon = React.forwardRef<SVGSVGElement, BorderLeft02IconProps>(
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
      d: 'M17.6668 21.2482C18.7151 21.0549 19.4867 20.713 20.0967 20.1084C20.7066 19.5037 21.0515 18.7388 21.2465 17.6996M10.0001 21.4946C10.5897 21.4996 11.2269 21.4996 11.9168 21.4996C12.6067 21.4996 13.2439 21.4996 13.8335 21.4946M21.4951 13.8996C21.5001 13.3152 21.5001 12.6835 21.5001 11.9996C21.5001 11.3157 21.5001 10.684 21.4951 10.0995M21.2465 6.2996C21.0515 5.26036 20.7066 4.49552 20.0967 3.89085C19.4867 3.28618 18.7151 2.94431 17.6668 2.75103M10.0001 2.50456C10.5894 2.4996 11.2272 2.4996 11.9168 2.4996C12.6066 2.4996 13.2438 2.4996 13.8333 2.50456',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.50012 21.4996C5.40618 21.3011 4.60108 20.9499 3.96459 20.3288C2.50012 18.8997 2.50012 16.5997 2.50012 11.9996C2.50012 7.39951 2.50012 5.09947 3.96459 3.67041C4.60108 3.0493 5.40618 2.69814 6.50012 2.4996',
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

BorderLeft02Icon.displayName = 'BorderLeft02Icon';
export default BorderLeft02Icon;
