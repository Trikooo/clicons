import React from 'react';
import config from '../config';

interface ServingFoodIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name ServingFoodIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/serving-food)
 * @see {@link https://clicons.dev/icon/serving-food} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const ServingFoodIcon = React.forwardRef<SVGSVGElement, ServingFoodIconProps>(
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
      d: 'M4 14H22',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M5 22L5.93056 21.0694C6.45933 20.5407 6.72371 20.2763 7.05684 20.126C7.38997 19.9756 7.76314 19.9523 8.50947 19.9057L11.7619 19.7024C13.3604 19.6025 14.1597 19.5525 14.863 19.2148C15.5664 18.877 16.1051 18.2844 17.1824 17.0993L20 14H16.5L14.7071 15.7929C14.5879 15.9121 14.5282 15.9718 14.4662 16.0244C14.1472 16.2954 13.7512 16.4594 13.3341 16.4934C13.2529 16.5 13.1686 16.5 13 16.5M2 19L5.07774 15.9223C5.81669 15.1833 6.18617 14.8138 6.62171 14.5564C6.94612 14.3647 7.29599 14.2198 7.66095 14.126C8.15093 14 8.67345 14 9.71849 14H10.5C10.9647 14 11.197 14 11.3902 14.0384C12.1836 14.1962 12.8038 14.8164 12.9616 15.6098C13 15.803 13 16.0353 13 16.5M13 16.5H9.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M5 11.5C5 7.08171 8.58171 3.5 13 3.5M13 3.5C17.4183 3.5 21 7.08171 21 11.5M13 3.5V2',
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

ServingFoodIcon.displayName = 'ServingFoodIcon';
export default ServingFoodIcon;
