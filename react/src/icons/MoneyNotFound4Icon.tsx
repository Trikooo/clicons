import React from 'react';
import config from '../config';

interface MoneyNotFound4IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MoneyNotFound4Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/money-not-found4)
 * @see {@link https://clicons.dev/icon/money-not-found4} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MoneyNotFound4Icon = React.forwardRef<SVGSVGElement, MoneyNotFound4IconProps>(
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
      d: 'M18.5 11.4893V11.4993',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 12.4893V12.4993',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
    }
  ],
  [
    'path',
    {
      d: 'M2.99988 3.00098L20.9999 21.001',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M10.2322 10.2314C9.77972 10.6839 9.49988 11.3089 9.49988 11.9993C9.49988 13.38 10.6192 14.4993 11.9999 14.4993C12.6903 14.4993 13.3153 14.2194 13.7677 13.767',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.6566 17.6577C21.8698 17.3798 21.9999 17.0462 21.9999 16.6833V6.92803C21.9999 6.35987 21.6755 5.84549 21.1328 5.6773C20.1902 5.38518 18.4793 5.00098 15.9999 5.00098C13.3534 5.00098 11.8275 5.5613 9.7911 5.7922M18.2193 18.2204C17.5645 18.1529 16.8247 18.1104 15.9999 18.1104C11.249 18.1104 10.1094 19.9161 3.14468 18.3802C2.47252 18.232 1.99988 17.6275 1.99988 16.9392V6.92214C1.99988 5.94628 2.92067 5.23464 3.87786 5.42458C4.54916 5.55779 5.16296 5.65792 5.72938 5.73048',
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

MoneyNotFound4Icon.displayName = 'MoneyNotFound4Icon';
export default MoneyNotFound4Icon;
