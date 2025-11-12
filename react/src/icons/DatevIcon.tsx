import React from 'react';
import config from '../config';

interface DatevIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name DatevIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/datev)
 * @see {@link https://clicons.dev/icon/datev} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const DatevIcon = React.forwardRef<SVGSVGElement, DatevIconProps>(
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
      d: 'M1.25 14.5V9.5H2.25C3.63071 9.5 4.75 10.6193 4.75 12C4.75 13.3807 3.63071 14.5 2.25 14.5H1.25Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }
  ],
  [
    'path',
    {
      d: 'M5.75 14.5L7.75 9.5L9.75 14.5H8.03571',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }
  ],
  [
    'path',
    {
      d: 'M18.75 9.5L20.75 14.5L22.75 9.5H21.0357',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }
  ],
  [
    'path',
    {
      d: 'M10.25 9.5H11.75M13.25 9.5H11.75M11.75 9.5V14.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }
  ],
  [
    'path',
    {
      d: 'M17.25 14.5H14.75V12M17.25 9.5H14.75V12M14.75 12H17.25',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
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

DatevIcon.displayName = 'DatevIcon';
export default DatevIcon;
