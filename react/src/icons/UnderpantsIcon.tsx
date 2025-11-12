import React from 'react';
import config from '../config';

interface UnderpantsIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name UnderpantsIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/underpants)
 * @see {@link https://clicons.dev/icon/underpants} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const UnderpantsIcon = React.forwardRef<SVGSVGElement, UnderpantsIconProps>(
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
      d: 'M14 17L14.3464 17.9952C14.6631 18.9394 14.8215 19.4116 15.1899 19.6916C15.2125 19.7087 15.2357 19.7253 15.2592 19.7412C15.643 20 16.1438 20 17.1454 20C19.4325 20 20.576 20 21.3113 19.2763C21.3537 19.2345 21.3996 19.1859 21.4388 19.1412C22.1182 18.3653 22.0478 17.2818 21.907 15.1147C21.6762 11.5611 21.2235 8.70531 20.786 6.70039C20.5221 5.49096 20.3901 4.88625 19.8372 4.44313C19.2842 4 18.5998 4 17.231 4H6.76902C5.40022 4 4.71582 4 4.16285 4.44313C3.60987 4.88625 3.47791 5.49096 3.21399 6.70039C2.77648 8.70531 2.32378 11.5611 2.09297 15.1147C1.95221 17.2818 1.88183 18.3653 2.56123 19.1412C2.60042 19.1859 2.64629 19.2345 2.6887 19.2763C3.42404 20 4.56755 20 6.85456 20C7.85618 20 8.357 20 8.74078 19.7412C8.76434 19.7253 8.78745 19.7087 8.81007 19.6916C9.1785 19.4116 9.33687 18.9394 9.65362 17.9952L9.98742 17',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 15C9.09883 16.1956 10.7181 17.5 12 17.5C13.2819 17.5 14.9012 16.1956 15.5 15',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M3 8H21',
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

UnderpantsIcon.displayName = 'UnderpantsIcon';
export default UnderpantsIcon;
