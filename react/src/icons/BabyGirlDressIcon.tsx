import React from 'react';
import config from '../config';

interface BabyGirlDressIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BabyGirlDressIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/baby-girl-dress)
 * @see {@link https://clicons.dev/icon/baby-girl-dress} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BabyGirlDressIcon = React.forwardRef<SVGSVGElement, BabyGirlDressIconProps>(
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
      d: 'M8.21182 9L4.27882 16.4753C2.45802 19.936 10.0782 21 12 21C13.9218 21 21.542 19.936 19.7212 16.4753L15.7882 9',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M10.1344 12.2209C10.8048 11.8554 11.3899 12.0027 11.7414 12.2373C11.8855 12.3335 11.9576 12.3817 12 12.3817C12.0424 12.3817 12.1145 12.3335 12.2586 12.2373C12.6101 12.0027 13.1952 11.8554 13.8656 12.2209C14.7455 12.7007 14.9446 14.2833 12.9151 15.6185C12.5286 15.8728 12.3353 16 12 16C11.6647 16 11.4714 15.8728 11.0849 15.6185C9.05543 14.2833 9.25452 12.7007 10.1344 12.2209Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.99975 10.8144C5.00001 11.7912 1.47372 8.63145 2.06625 7.87321L5.5695 3.39027C5.76071 3.14559 6.07218 3 6.40442 3H8.50685C8.75549 3 8.96414 3.16269 9.04048 3.37578C9.42268 4.44252 10.762 5.72296 12 5.72301C13.238 5.72305 14.5774 4.4425 14.9596 3.37578C15.0359 3.16269 15.2446 3 15.4932 3H17.5956C17.9279 3 18.2393 3.14559 18.4305 3.39027L21.9338 7.87321C22.5263 8.63145 19 11.7912 17.0017 10.8144',
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

BabyGirlDressIcon.displayName = 'BabyGirlDressIcon';
export default BabyGirlDressIcon;
