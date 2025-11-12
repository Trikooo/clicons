import React from 'react';
import config from '../config';

interface Sword03IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Sword03Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/sword03)
 * @see {@link https://clicons.dev/icon/sword03} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Sword03Icon = React.forwardRef<SVGSVGElement, Sword03IconProps>(
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
      d: 'M7.98651 9.49122L5.67712 7.51305C4.15399 6.20286 4.14889 4.30146 3.98633 3.01953C5.65267 3.09861 6.94342 3.24947 8.06745 4.19897L9.24332 5.53489L10.5158 6.96356M19.4573 18.4181L16.4925 15.4183M14.0215 18.4181C14.0441 18.1459 14.2223 17.4401 15.0408 16.6839C15.7751 16.0054 17.3676 14.3794 18.0832 13.6743C18.4886 13.2749 19.1532 12.9947 19.4573 12.9952M15.5683 12.8081L16.9049 14.2869M13.6763 14.4363L15.1705 15.7499M20.4616 17.9803C21.292 17.9819 22.0011 18.5952 21.9995 19.4251C21.9979 20.2549 21.292 20.9825 20.4616 20.981C19.6312 20.9794 18.9908 20.2492 18.9924 19.4194C19.046 18.5936 19.6568 18.0913 20.4616 17.9803Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M4.59593 18.393L7.5539 15.5007M4.56157 12.9871C4.83402 13.0092 5.59357 13.1911 6.274 14.0411C6.89872 14.8214 8.58371 16.3306 9.29062 17.0443C9.69102 17.4487 9.97105 18.0891 9.97105 18.393M7.2645 14.2299L15.5035 4.66412C16.8442 3.168 18.7179 3.13531 20.0036 2.99805C19.8918 4.66142 19.7155 5.9481 18.7435 7.05254L8.54959 15.9263M5.00618 19.4988C5.00618 20.3286 4.33301 21.0014 3.5026 21.0014C2.6722 21.0014 1.99902 20.3286 1.99902 19.4988C1.99902 18.6689 2.6722 17.9962 3.5026 17.9962C4.33301 17.9962 5.00618 18.6689 5.00618 19.4988Z',
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

Sword03Icon.displayName = 'Sword03Icon';
export default Sword03Icon;
