import React from 'react';
import config from '../config';

interface FlipBottomIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name FlipBottomIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/flip-bottom)
 * @see {@link https://clicons.dev/icon/flip-bottom} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const FlipBottomIcon = React.forwardRef<SVGSVGElement, FlipBottomIconProps>(
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
      d: 'M14.3332 1.99997L9.66656 1.99997M20.9849 7.49997C21.0021 7.99959 21.0029 8.49988 21.0014 8.99997M3.01505 7.49997C2.9979 7.99959 2.99702 8.49988 2.99852 8.99997M20.4629 4.74529C19.9788 3.78695 19.1975 3.00861 18.2369 2.52815M5.82026 2.49997C4.83351 2.97787 4.03077 3.76798 3.53706 4.74529',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.495 12C20.453 12 20.993 12.6377 20.993 14.5C20.993 17.0317 21.2429 19.9536 18.7448 21.3971C17.7013 22 16.3005 22 13.4988 22L10.5011 22C7.69944 22 6.2986 22 5.25518 21.3971C2.75699 19.9536 3.00692 17.0316 3.00692 14.5C3.00692 12.5404 3.64419 12 5.50499 12L18.495 12Z',
      stroke: 'currentColor',
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

FlipBottomIcon.displayName = 'FlipBottomIcon';
export default FlipBottomIcon;
