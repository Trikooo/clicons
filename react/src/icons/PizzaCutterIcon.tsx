import React from 'react';
import config from '../config';

interface PizzaCutterIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PizzaCutterIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/pizza-cutter)
 * @see {@link https://clicons.dev/icon/pizza-cutter} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PizzaCutterIcon = React.forwardRef<SVGSVGElement, PizzaCutterIconProps>(
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
      d: 'M18.0079 7.00648L18.0016 7.00013',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
    }
  ],
  [
    'path',
    {
      d: 'M20.8284 9.82843C19.2663 11.3905 16.7337 11.3905 15.1716 9.82843C13.6095 8.26633 13.6095 5.73367 15.1716 4.17157C16.7337 2.60948 19.2663 2.60948 20.8284 4.17157C22.3905 5.73367 22.3905 8.26633 20.8284 9.82843Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2.83987 20.2031C3.9597 21.2656 5.77529 21.2656 6.89512 20.2031C7.48089 19.6473 7.76025 18.9108 7.7332 18.1827C7.72646 18.0014 7.78437 17.8202 7.91493 17.6963L10.661 15.0907C10.8334 14.9272 11.0887 14.8998 11.3071 14.9902C12.3445 15.4194 13.6057 15.3298 14.6155 15.105C15.1172 14.9933 15.1194 14.3649 14.672 14.1221C14.066 13.7932 13.4955 13.3832 12.978 12.8922C12.3251 12.2727 11.8081 11.5731 11.4271 10.8266C11.023 10.0349 9.85237 9.70148 9.19682 10.3235L2.83987 16.3553C1.72004 17.4178 1.72004 19.1405 2.83987 20.2031Z',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M14 8.5L11.5 10.5M16 11L13.5 13',
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

PizzaCutterIcon.displayName = 'PizzaCutterIcon';
export default PizzaCutterIcon;
