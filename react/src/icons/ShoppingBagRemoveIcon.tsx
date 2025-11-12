import React from 'react';
import config from '../config';

interface ShoppingBagRemoveIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ShoppingBagRemoveIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/shopping-bag-remove)
 * @see {@link https://clicons.dev/icon/shopping-bag-remove} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ShoppingBagRemoveIcon = React.forwardRef<SVGSVGElement, ShoppingBagRemoveIconProps>(
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
      d: 'M8 6.5C8 8.15685 9.34315 9.5 11 9.5C12.6569 9.5 14 8.15685 14 6.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 16.5L21 21.5M16 21.5L21 16.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.1084 20.5H9.89162C6.02422 20.5 4.09052 20.5 2.89731 19.1594C1.70411 17.8189 1.91058 16.0497 2.32352 12.5113C2.6739 9.50898 3.18586 7.25784 3.66063 5.65851C4.04994 4.34711 4.24459 3.69141 5.04283 3.0957C5.84107 2.5 6.65697 2.5 8.28876 2.5H13.7113C15.3431 2.5 16.159 2.5 16.9572 3.0957C17.7554 3.69141 17.9501 4.34711 18.3394 5.65851C18.8142 7.25784 19.3261 9.50898 19.6765 12.5113C19.7169 12.8574 19.7553 13.1865 19.7906 13.5',
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

ShoppingBagRemoveIcon.displayName = 'ShoppingBagRemoveIcon';
export default ShoppingBagRemoveIcon;
