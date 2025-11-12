import React from 'react';
import config from '../config';

interface Bitcoin04IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Bitcoin04Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/bitcoin04)
 * @see {@link https://clicons.dev/icon/bitcoin04} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Bitcoin04Icon = React.forwardRef<SVGSVGElement, Bitcoin04IconProps>(
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
      d: 'M13.9447 18.1667V12.8333M15.5072 12.8333V11.5M15.5072 19.5V18.1667M13.9447 15.5H17.0697M17.0697 15.5C17.5875 15.5 18.0072 15.9477 18.0072 16.5V17.1667C18.0072 17.719 17.5875 18.1667 17.0697 18.1667H13.0072M17.0697 15.5C17.5875 15.5 18.0072 15.0523 18.0072 14.5V13.8333C18.0072 13.281 17.5875 12.8333 17.0697 12.8333H13.0072',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.5024 9C11.9139 9 9.00476 11.9101 9.00476 15.5C9.00476 19.0898 11.9139 22 15.5024 22C19.0909 22 22.0001 19.0899 22.0001 15.5C22.0001 11.9101 19.0909 9 15.5024 9Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.00503 6C11.3175 6 14.0029 5.10457 14.0029 4C14.0029 2.89543 11.3175 2 8.00503 2C4.69252 2 2.0072 2.89543 2.0072 4C2.0072 5.10457 4.69252 6 8.00503 6Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M1.99988 4V8.02171V12.0434C1.99988 12.7473 3.17893 13.6328 6.13218 14M2.10721 8.54768C3.31228 9.60965 5.46077 10.0602 7.75693 10.0602M13.9955 4.12134V6.13597',
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

Bitcoin04Icon.displayName = 'Bitcoin04Icon';
export default Bitcoin04Icon;
