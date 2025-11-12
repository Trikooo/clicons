import React from 'react';
import config from '../config';

interface CreditCardFreezeIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name CreditCardFreezeIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/credit-card-freeze)
 * @see {@link https://clicons.dev/icon/credit-card-freeze} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CreditCardFreezeIcon = React.forwardRef<SVGSVGElement, CreditCardFreezeIconProps>(
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
      d: 'M22 9C21.9635 6.74771 21.7892 5.44656 20.9564 4.5129C20.7879 4.32403 20.6022 4.14935 20.4014 3.99087C19.1461 3 17.2659 3 13.5056 3H10.5041C6.74371 3 4.86352 3 3.60823 3.99087C3.40746 4.14935 3.22178 4.32403 3.05331 4.5129C2 5.69377 2 7.46252 2 11C2 14.5375 2 16.3062 3.05331 17.4871C3.22178 17.676 3.40746 17.8506 3.60823 18.0091C4.86352 19 6.74371 19 10.5041 19H11.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 8H22',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18 13V14.7778M18 14.7778V19.2222M18 14.7778L19.5 14M18 14.7778L16.5 14M18 19.2222L18 21M18 19.2222L16.5 20M18 19.2222L19.5 20M22 17L20.2222 17M20.2222 17L15.7778 17M20.2222 17L21 18.5M20.2222 17L21 15.5M15.7778 17L14 17M15.7778 17L15 15.5M15.7778 17L15 18.5',
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

CreditCardFreezeIcon.displayName = 'CreditCardFreezeIcon';
export default CreditCardFreezeIcon;
