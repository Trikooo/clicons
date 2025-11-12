import React from 'react';
import config from '../config';

interface BorderBottom02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BorderBottom02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/border-bottom02)
 * @see {@link https://clicons.dev/icon/border-bottom02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BorderBottom02Icon = React.forwardRef<SVGSVGElement, BorderBottom02IconProps>(
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
      d: 'M21.2486 6.33333C21.0553 5.28498 20.7134 4.51342 20.1088 3.90345C19.5041 3.29347 18.7392 2.94861 17.7 2.75363M21.495 14C21.5 13.4105 21.5 12.7732 21.5 12.0833C21.5 11.3934 21.5 10.7562 21.495 10.1666M13.9 2.505C13.3156 2.5 12.6839 2.5 12 2.5C11.3161 2.5 10.6844 2.5 10.0999 2.505M6.3 2.75363C5.26076 2.94861 4.49591 3.29347 3.89124 3.90345C3.28657 4.51342 2.94471 5.28497 2.75143 6.33333M2.50495 14C2.5 13.4107 2.5 12.7729 2.5 12.0833C2.5 11.3935 2.5 10.7563 2.50495 10.1668',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 17.5C21.3015 18.5939 20.9503 19.399 20.3292 20.0355C18.9001 21.5 16.6001 21.5 12 21.5C7.39991 21.5 5.09987 21.5 3.6708 20.0355C3.04969 19.399 2.69854 18.5939 2.5 17.5',
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

BorderBottom02Icon.displayName = 'BorderBottom02Icon';
export default BorderBottom02Icon;
