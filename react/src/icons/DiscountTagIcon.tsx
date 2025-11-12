import React from 'react';
import config from '../config';

interface DiscountTagIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name DiscountTagIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/discount-tag)
 * @see {@link https://clicons.dev/icon/discount-tag} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const DiscountTagIcon = React.forwardRef<SVGSVGElement, DiscountTagIconProps>(
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
      d: 'M7.72852 15.2861H12.7285M10.2271 12.7861H10.2364M10.2294 17.7861H10.2388',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 3.69682C9.53332 6.78172 14.5357 0.123719 17.4957 2.53998C19.1989 3.93028 18.6605 7 16.4494 9',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.664 6.57831C19.6473 6.75667 19.8679 7.34313 20.1615 8.97048C20.4259 10.4361 20.5 12.1949 20.5 12.9436C20.4731 13.2195 20.3532 13.477 20.1615 13.687C18.1054 15.722 14.0251 19.565 11.9657 21.474C11.1575 22.1555 9.93819 22.1702 9.08045 21.5447C7.32407 20.0526 5.63654 18.366 3.98343 16.8429C3.3193 16.035 3.33487 14.8866 4.0585 14.1255C6.23711 11.9909 10.1793 8.33731 12.4047 6.31887C12.6278 6.1383 12.9012 6.02536 13.1942 6C13.6935 5.99988 14.5501 6.06327 15.3845 6.10896',
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

DiscountTagIcon.displayName = 'DiscountTagIcon';
export default DiscountTagIcon;
