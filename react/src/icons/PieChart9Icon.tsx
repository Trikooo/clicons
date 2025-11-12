import React from 'react';
import config from '../config';

interface PieChart9IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PieChart9Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/pie-chart9)
 * @see {@link https://clicons.dev/icon/pie-chart9} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PieChart9Icon = React.forwardRef<SVGSVGElement, PieChart9IconProps>(
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
      d: 'M16.5557 4.61883C15.7488 4.07099 14.8724 3.64848 13.9552 3.3602C12.7981 2.99648 12.2195 2.81462 11.6098 3.2715C11 3.72839 11 4.4705 11 5.95472V10.5064C11 11.7697 11 12.4013 11.2341 12.9676C11.4683 13.534 11.9122 13.9761 12.8 14.8604L15.999 18.0466C17.0421 19.0855 17.5637 19.605 18.3116 19.4823C19.0596 19.3597 19.3367 18.8125 19.8911 17.7182C20.3153 16.881 20.6251 15.9835 20.8079 15.0499C21.1937 13.0788 20.9957 11.0358 20.2388 9.17903C19.4819 7.32232 18.2002 5.73535 16.5557 4.61883Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M14 20.4185C13.0736 20.7935 12.0609 21 11 21C6.58172 21 3 17.4183 3 13C3 9.56306 5.16736 6.63232 8.20988 5.5',
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

PieChart9Icon.displayName = 'PieChart9Icon';
export default PieChart9Icon;
