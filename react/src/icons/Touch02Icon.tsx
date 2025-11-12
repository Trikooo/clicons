import React from 'react';
import config from '../config';

interface Touch02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Touch02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/touch02)
 * @see {@link https://clicons.dev/icon/touch02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Touch02Icon = React.forwardRef<SVGSVGElement, Touch02IconProps>(
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
      d: 'M17.1422 21.998C17.0905 20.084 17.2194 19.8535 17.3561 19.4277C17.4929 19.002 18.4492 17.4665 18.7875 16.3695C19.8823 12.8202 18.862 12.0653 17.5016 11.0588C15.9931 9.94257 13.1478 9.37728 11.7367 9.49966V3.7462C11.7367 2.78288 10.9558 2.00195 9.99246 2.00195C9.02914 2.00195 8.24821 2.78288 8.24821 3.7462V9.96607M8.24872 21.9988V20.9854C8.18426 20.041 7.24627 18.9235 6.0777 17.3166C4.87607 15.576 4.61785 14.6973 4.80689 13.8848C4.90426 13.4694 5.15692 12.7832 6.39745 11.6104L8.24821 9.96607M8.24821 14.0323V9.96607',
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

Touch02Icon.displayName = 'Touch02Icon';
export default Touch02Icon;
