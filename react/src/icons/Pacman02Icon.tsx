import React from 'react';
import config from '../config';

interface Pacman02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Pacman02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/pacman02)
 * @see {@link https://clicons.dev/icon/pacman02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Pacman02Icon = React.forwardRef<SVGSVGElement, Pacman02IconProps>(
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
      d: 'M20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10V20.4C4 21.2837 4.71634 22 5.6 22C6.48366 22 7.2 21.2837 7.2 20.4V19.6C7.2 18.7163 7.91634 18 8.8 18C9.68366 18 10.4 18.7163 10.4 19.6V20.4C10.4 21.2837 11.1163 22 12 22C12.8837 22 13.6 21.2837 13.6 20.4V19.6C13.6 18.7163 14.3163 18 15.2 18C16.0837 18 16.8 18.7163 16.8 19.6V20.4C16.8 21.2837 17.5163 22 18.4 22C19.2837 22 20 21.2837 20 20.4V10Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M9.00896 10H9M15 10H14.991',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
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

Pacman02Icon.displayName = 'Pacman02Icon';
export default Pacman02Icon;
