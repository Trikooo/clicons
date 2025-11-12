import React from 'react';
import config from '../config';

interface PlusMinusIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PlusMinusIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/plus-minus)
 * @see {@link https://clicons.dev/icon/plus-minus} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PlusMinusIcon = React.forwardRef<SVGSVGElement, PlusMinusIconProps>(
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
      d: 'M11.0001 16C11.0001 17.8692 11.0001 18.8038 11.402 19.5C11.6653 19.9561 12.044 20.3348 12.5001 20.5981C13.1962 21 14.1308 21 16.0001 21C17.8693 21 18.8039 21 19.5001 20.5981C19.9561 20.3348 20.3348 19.9561 20.5981 19.5C21.0001 18.8038 21.0001 17.8692 21.0001 16C21.0001 14.1308 21.0001 13.1962 20.5981 12.5C20.3348 12.0439 19.9561 11.6652 19.5001 11.4019C18.8039 11 17.8693 11 16.0001 11',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.00024 3C9.86948 3 10.8041 3 11.5002 3.40192C11.9563 3.66523 12.335 4.04394 12.5983 4.5C13.0002 5.19615 13.0002 6.13077 13.0002 8C13.0002 9.86923 13.0002 10.8038 12.5983 11.5C12.335 11.9561 11.9563 12.3348 11.5002 12.5981C10.8041 13 9.86948 13 8.00024 13C6.13101 13 5.1964 13 4.50024 12.5981C4.04419 12.3348 3.66547 11.9561 3.40217 11.5C3.00024 10.8038 3.00024 9.86923 3.00024 8C3.00024 6.13077 3.00024 5.19615 3.40217 4.5C3.66547 4.04394 4.04419 3.66523 4.50024 3.40192C5.1964 3 6.13101 3 8.00024 3Z',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.00003 6V10',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M10 8L6.00003 8',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18 16L14 16',
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

PlusMinusIcon.displayName = 'PlusMinusIcon';
export default PlusMinusIcon;
