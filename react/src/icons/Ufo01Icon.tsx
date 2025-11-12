import React from 'react';
import config from '../config';

interface Ufo01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Ufo01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ufo01)
 * @see {@link https://clicons.dev/icon/ufo01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Ufo01Icon = React.forwardRef<SVGSVGElement, Ufo01IconProps>(
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
      d: 'M4.04824 11.5858L5.09649 10.5858C5.39946 10.2968 5.55095 10.1522 5.74359 10.0761C5.93622 10 6.15046 10 6.57893 10H17.4211C17.8495 10 18.0638 10 18.2564 10.0761C18.449 10.1522 18.6005 10.2968 18.9035 10.5858L19.9518 11.5858C20.6506 12.2525 21 12.5858 21 13C21 13.4142 20.6506 13.7475 19.9518 14.4142L18.9035 15.4142C18.6005 15.7032 18.449 15.8478 18.2564 15.9239C18.0638 16 17.8495 16 17.4211 16H6.57893C6.15046 16 5.93622 16 5.74359 15.9239C5.55095 15.8478 5.39946 15.7032 5.09649 15.4142L4.04824 14.4142C3.34941 13.7475 3 13.4142 3 13C3 12.5858 3.34941 12.2525 4.04824 11.5858Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.01193 13H8M12.006 13H11.994M16 13H15.9881',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M6 16L5.31623 18.0513C5.23173 18.3048 5.18948 18.4316 5.12452 18.5343C4.98656 18.7526 4.76952 18.909 4.51884 18.9709C4.40081 19 4.26721 19 4 19',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18 16L18.6838 18.0513C18.7683 18.3048 18.8105 18.4316 18.8755 18.5343C19.0134 18.7526 19.2305 18.909 19.4812 18.9709C19.5992 19 19.7328 19 20 19',
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

Ufo01Icon.displayName = 'Ufo01Icon';
export default Ufo01Icon;
