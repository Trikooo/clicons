import React from 'react';
import config from '../config';

interface LoginSquare01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name LoginSquare01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/login-square01)
 * @see {@link https://clicons.dev/icon/login-square01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const LoginSquare01Icon = React.forwardRef<SVGSVGElement, LoginSquare01IconProps>(
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
      d: 'M9 6C9.04665 4.90658 9.18531 4.20985 9.59747 3.67376C9.7574 3.46574 9.94396 3.27954 10.1524 3.11992C10.9619 2.5 12.137 2.5 14.4872 2.5H14.9882C17.8222 2.5 19.2391 2.5 20.1196 3.37867C21 4.25734 21 5.67157 21 8.49997L21 15.5C21 18.3284 21 19.7426 20.1196 20.6213C19.2392 21.5 17.8222 21.5 14.9882 21.5H14.4872C12.137 21.5 10.9619 21.5 10.1524 20.8801C9.94398 20.7205 9.75744 20.5343 9.59752 20.3263C9.1853 19.7901 9.04664 19.0933 9 17.9996',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15 12H3M12.5 15.5001C12.5 15.5001 16 12.9224 16 12.0001C16 11.0778 12.5 8.50011 12.5 8.50011',
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

LoginSquare01Icon.displayName = 'LoginSquare01Icon';
export default LoginSquare01Icon;
