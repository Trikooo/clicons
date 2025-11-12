import React from 'react';
import config from '../config';

interface IconjarIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name IconjarIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/iconjar)
 * @see {@link https://clicons.dev/icon/iconjar} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const IconjarIcon = React.forwardRef<SVGSVGElement, IconjarIconProps>(
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
      d: 'M4.17911 15.9319L5.26287 19.3081C5.6795 20.6061 5.88782 21.255 6.40449 21.6275C6.92116 22.0001 7.61293 22.0001 8.99648 22.0001H15.0035C16.3871 22.0001 17.0788 22.0001 17.5955 21.6275C18.1122 21.255 18.3205 20.6061 18.7371 19.3081L19.8209 15.9319C20.3904 14.1577 19.5645 12.2395 17.873 11.4075C18.6821 10.91 19.0866 10.6613 19.2065 10.4717C19.5127 9.98757 19.3266 9.34921 18.8061 9.09831C18.6023 9.00006 18.1253 9.00006 17.1712 9.00006C16.2171 9.00009 14.9135 9.33644 15.7906 12.1645C16.9592 15.9319 15.9104 17.079 14.4226 17.2488C12.9348 17.4185 10.9873 15.9919 12.337 13.5034C13.8777 10.6627 11.7545 9.00012 10.6272 9.00012L6.82879 9.00006C5.87472 9.00006 5.39768 9.00006 5.19389 9.09831C4.67345 9.34921 4.48735 9.98757 4.79351 10.4717C4.91339 10.6613 5.31792 10.91 6.12697 11.4075C4.43546 12.2395 3.60962 14.1577 4.17911 15.9319Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.9987 3.02603C13.9987 2.17604 12.8279 2 12 2C11.1721 2 10.0013 2.17604 10.0013 3.02603C10.0013 3.52211 10.4001 4.13811 10.8968 4.56508H8.03364C6.80772 4.56508 5.4553 5.83138 5 7H19C18.5447 5.83138 17.1923 4.56508 15.9664 4.56508H13.1032C13.5999 4.13811 13.9987 3.52211 13.9987 3.02603Z',
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

IconjarIcon.displayName = 'IconjarIcon';
export default IconjarIcon;
