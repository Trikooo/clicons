import React from 'react';
import config from '../config';

interface BorderTop2IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BorderTop2Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/border-top2)
 * @see {@link https://clicons.dev/icon/border-top2} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BorderTop2Icon = React.forwardRef<SVGSVGElement, BorderTop2IconProps>(
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
      d: 'M2.75313 17.6664C2.94642 18.7148 3.28828 19.4863 3.89295 20.0963C4.49762 20.7063 5.26247 21.0511 6.30171 21.2461M2.50666 9.99976C2.50171 10.5893 2.50171 11.2265 2.50171 11.9164C2.50171 12.6063 2.50171 13.2436 2.50666 13.8331M10.1017 21.4948C10.6861 21.4998 11.3178 21.4998 12.0017 21.4998C12.6856 21.4998 13.3173 21.4998 13.9018 21.4948M17.7017 21.2461C18.7409 21.0511 19.5058 20.7063 20.1105 20.0963C20.7151 19.4863 21.057 18.7148 21.2503 17.6664M21.4968 9.99976C21.5017 10.5891 21.5017 11.2268 21.5017 11.9164C21.5017 12.6063 21.5017 13.2434 21.4968 13.8329',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2.49976 6.49988C2.69829 5.40594 3.04945 4.60084 3.67056 3.96434C5.09962 2.49988 7.39967 2.49988 11.9998 2.49988C16.5998 2.49988 18.8999 2.49988 20.329 3.96435C20.9501 4.60084 21.3012 5.40594 21.4998 6.49988',
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

BorderTop2Icon.displayName = 'BorderTop2Icon';
export default BorderTop2Icon;
