import React from 'react';
import config from '../config';

interface PieChartIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PieChartIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/pie-chart)
 * @see {@link https://clicons.dev/icon/pie-chart} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PieChartIcon = React.forwardRef<SVGSVGElement, PieChartIconProps>(
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
      d: 'M21 12.502C21 17.7487 16.7467 22.002 11.5 22.002C6.25329 22.002 2 17.7487 2 12.502C2 7.25525 6.25329 3.00195 11.5 3.00195',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.7046 7.38562L14.5805 4.77321C15.1261 3.14611 15.3989 2.33256 16.2494 2.07407C17.0999 1.81558 17.6633 2.25023 18.79 3.11953C19.5732 3.72378 20.2762 4.42682 20.8805 5.21C21.7498 6.33675 22.1844 6.90012 21.9259 7.75059C21.6674 8.60106 20.8539 8.87386 19.2268 9.41946L16.6144 10.2954C14.7053 10.9356 13.7508 11.2557 13.2475 10.7525C12.7443 10.2492 13.0644 9.2947 13.7046 7.38562Z',
      stroke: 'currentColor',
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

PieChartIcon.displayName = 'PieChartIcon';
export default PieChartIcon;
