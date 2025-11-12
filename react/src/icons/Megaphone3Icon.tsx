import React from 'react';
import config from '../config';

interface Megaphone3IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Megaphone3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/megaphone3)
 * @see {@link https://clicons.dev/icon/megaphone3} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Megaphone3Icon = React.forwardRef<SVGSVGElement, Megaphone3IconProps>(
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
      d: 'M7 9V15',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M7 9H6C5.06812 9 4.60218 9 4.23463 9.15224C3.74458 9.35523 3.35523 9.74458 3.15224 10.2346C3 10.6022 3 11.0681 3 12C3 12.9319 3 13.3978 3.15224 13.7654C3.35523 14.2554 3.74458 14.6448 4.23463 14.8478C4.60218 15 5.06812 15 6 15H7L15.0796 17.4239C16.0291 17.7087 16.5039 17.8512 16.9257 18.1014L16.9459 18.1135C17.3663 18.3663 17.7167 18.7167 18.4177 19.4177L18.5858 19.5858C18.7051 19.7051 18.7647 19.7647 18.831 19.8123C18.9561 19.9021 19.1003 19.9619 19.2523 19.9868C19.3327 20 19.4171 20 19.5858 20C19.9713 20 20.1641 20 20.3196 19.9475C20.6155 19.8477 20.8477 19.6155 20.9475 19.3196C21 19.1641 21 18.9713 21 18.5858V5.41421C21 5.02866 21 4.83589 20.9475 4.68039C20.8477 4.38452 20.6155 4.15225 20.3196 4.05245C20.1641 4 19.9713 4 19.5858 4C19.4171 4 19.3327 4 19.2523 4.0132C19.1003 4.03815 18.9561 4.09787 18.831 4.18771C18.7647 4.23526 18.7051 4.29491 18.5858 4.41421L18.4177 4.5823C17.7167 5.28326 17.3663 5.63374 16.9459 5.88649L16.9257 5.89856C16.5039 6.14884 16.0291 6.29126 15.0796 6.57611L7 9Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8 15.5V18.0458C8 19.1251 8.87491 20 9.95416 20C10.6075 20 11.2177 19.6735 11.5801 19.1298L13 17',
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

Megaphone3Icon.displayName = 'Megaphone3Icon';
export default Megaphone3Icon;
