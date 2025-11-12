import React from 'react';
import config from '../config';

interface Cylinder4IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Cylinder4Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/cylinder4)
 * @see {@link https://clicons.dev/icon/cylinder4} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Cylinder4Icon = React.forwardRef<SVGSVGElement, Cylinder4IconProps>(
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
      d: 'M12 19L9.87868 21.1213M9.87868 21.1213C10.4216 21.6642 11.1716 22 12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 19.8284 9.33579 20.5784 9.87868 21.1213Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M10 16H14C16.8089 16 18.2134 16 19.2223 15.3259C19.659 15.034 20.034 14.659 20.3259 14.2223C21 13.2134 21 11.8089 21 9C21 6.19108 21 4.78661 20.3259 3.77772C20.034 3.34096 19.659 2.96596 19.2223 2.67412C18.2134 2 16.8089 2 14 2H10C7.19108 2 5.78661 2 4.77772 2.67412C4.34096 2.96596 3.96596 3.34096 3.67412 3.77772C3 4.78661 3 6.19108 3 9C3 11.8089 3 13.2134 3.67412 14.2223C3.96596 14.659 4.34096 15.034 4.77772 15.3259C5.78661 16 7.19108 16 10 16Z',
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

Cylinder4Icon.displayName = 'Cylinder4Icon';
export default Cylinder4Icon;
