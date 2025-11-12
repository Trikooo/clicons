import React from 'react';
import config from '../config';

interface Crown02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Crown02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/crown02)
 * @see {@link https://clicons.dev/icon/crown02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Crown02Icon = React.forwardRef<SVGSVGElement, Crown02IconProps>(
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
      d: 'M5 20H19',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.99998 12C6.89541 12 5.99998 11.1046 5.99998 10C5.99998 9.78893 6.03267 9.5855 6.09328 9.39449L3.53967 7.22321C3.17186 6.91046 2.61752 6.9284 2.27193 7.26423C2.02704 7.5022 1.93883 7.85285 2.04312 8.17377L4.54281 15.6353C4.81592 16.4505 5.57947 17 6.43922 17H17.5608C18.4205 17 19.1841 16.4505 19.4572 15.6353L21.9569 8.17377C22.0612 7.85285 21.973 7.5022 21.7281 7.26423C21.3825 6.9284 20.8281 6.91046 20.4603 7.22321L17.9067 9.39452C17.9673 9.58552 18 9.78894 18 10C18 11.1046 17.1045 12 16 12C14.8954 12 14 11.1046 14 10C14 9.36285 14.2979 8.79529 14.7621 8.42904L12.6923 3.46154C12.5758 3.18205 12.3028 3 12 3C11.6972 3 11.4241 3.18205 11.3077 3.46154L9.23788 8.42904C9.70204 8.79529 9.99998 9.36285 9.99998 10C9.99998 11.1046 9.10455 12 7.99998 12Z',
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

Crown02Icon.displayName = 'Crown02Icon';
export default Crown02Icon;
