import React from 'react';
import config from '../config';

interface Drag3IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Drag3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/drag3)
 * @see {@link https://clicons.dev/icon/drag3} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Drag3Icon = React.forwardRef<SVGSVGElement, Drag3IconProps>(
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
      d: 'M7.36734 12.171L9.50123 14V4.25C9.50123 3.2835 10.2847 2.5 11.2512 2.5C12.2177 2.5 13.0012 3.2835 13.0012 4.25V9.5L15.9891 9.97757C17.9177 10.2669 18.8821 10.4115 19.5613 10.8184C20.6833 11.4906 21.4961 12.5 21.4961 13.9736C21.4961 15 21.2424 15.6886 20.6257 17.5387C20.2344 18.7127 20.0387 19.2996 19.7197 19.7643C19.1944 20.5293 18.4194 21.0878 17.5276 21.3442C16.9859 21.5 16.3672 21.5 15.1297 21.5H14.0808C12.4356 21.5 11.613 21.5 10.8807 21.1981C10.7494 21.144 10.621 21.0829 10.4962 21.0151C9.80014 20.6371 9.28143 19.9987 8.244 18.7219L4.8855 14.5883C4.36941 13.9531 4.36596 13.0441 4.87723 12.405C5.49174 11.6369 6.62046 11.5308 7.36734 12.171Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M20 4.5L16 4.5M20 4.5C20 5.06018 18.5057 6.10678 18 6.5M20 4.5C20 3.93982 18.5057 2.89322 18 2.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 4.5L6.5 4.5M2.5 4.5C2.5 3.93982 3.9943 2.89322 4.5 2.5M2.5 4.5C2.5 5.06018 3.9943 6.10678 4.5 6.5',
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

Drag3Icon.displayName = 'Drag3Icon';
export default Drag3Icon;
