import React from 'react';
import config from '../config';

interface Presentation3IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Presentation3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/presentation3)
 * @see {@link https://clicons.dev/icon/presentation3} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Presentation3Icon = React.forwardRef<SVGSVGElement, Presentation3IconProps>(
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
      d: 'M3 10C3 12.8284 3 14.2426 3.87868 15.1213C4.75736 16 6.17157 16 9 16H15C17.8284 16 19.2426 16 20.1213 15.1213C21 14.2426 21 12.8284 21 10V4.5H3V10Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '20.5',
      r: '1.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 16L12 19',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21 2H3C2.5286 2 2.29289 2 2.14645 2.14645C2 2.29289 2 2.5286 2 3V3.5C2 3.9714 2 4.20711 2.14645 4.35355C2.29289 4.5 2.5286 4.5 3 4.5H21C21.4714 4.5 21.7071 4.5 21.8536 4.35355C22 4.20711 22 3.9714 22 3.5V3C22 2.5286 22 2.29289 21.8536 2.14645C21.7071 2 21.4714 2 21 2Z',
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

Presentation3Icon.displayName = 'Presentation3Icon';
export default Presentation3Icon;
