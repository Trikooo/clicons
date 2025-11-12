import React from 'react';
import config from '../config';

interface WeightScaleIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name WeightScaleIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/weight-scale)
 * @see {@link https://clicons.dev/icon/weight-scale} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const WeightScaleIcon = React.forwardRef<SVGSVGElement, WeightScaleIconProps>(
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
      d: 'M6.68262 5C5.31812 5.06167 4.47505 5.2536 3.87868 5.851C3 6.73119 3 8.14783 3 10.9811V15.9897C3 18.823 3 20.2396 3.87868 21.1198C4.75736 22 6.17157 22 9 22H15C17.8284 22 19.2426 22 20.1213 21.1198C21 20.2396 21 18.823 21 15.9897V10.9811C21 8.14783 21 6.73119 20.1213 5.851C19.5249 5.2536 18.6819 5.06167 17.3174 5',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.02532 6.54026C6.54474 4.66034 6.30445 3.72039 6.69501 3.03089C6.79898 2.84733 6.93184 2.68092 7.08871 2.53776C7.67799 2 8.66873 2 10.6502 2H13.3498C15.3313 2 16.322 2 16.9113 2.53776C17.0682 2.68092 17.201 2.84733 17.305 3.03089C17.6955 3.72039 17.4553 4.66034 16.9747 6.54026C16.5915 8.03898 16.4 8.78834 15.8877 9.28153C15.7483 9.41576 15.5936 9.5339 15.4266 9.63362C14.8131 10 14.0233 10 12.4436 10H11.5564C9.97674 10 9.18689 10 8.5734 9.63362C8.40642 9.5339 8.2517 9.41576 8.11228 9.28153C7.60002 8.78834 7.40846 8.03898 7.02532 6.54026Z',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M10 18H14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.5 10L12.5 7',
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

WeightScaleIcon.displayName = 'WeightScaleIcon';
export default WeightScaleIcon;
