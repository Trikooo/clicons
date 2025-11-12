import React from 'react';
import config from '../config';

interface LocationUser4IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name LocationUser4Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/location-user4)
 * @see {@link https://clicons.dev/icon/location-user4} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const LocationUser4Icon = React.forwardRef<SVGSVGElement, LocationUser4IconProps>(
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
      d: 'M5.53327 17C4.11143 19.0062 3.75309 20.0652 4.15321 20.9156C4.19286 20.9999 4.23928 21.0812 4.29207 21.1589C4.86372 22 6.34111 22 9.2959 22H14.7041C17.6589 22 19.1363 22 19.7079 21.1589C19.7607 21.0812 19.8071 20.9999 19.8468 20.9156C20.2469 20.0652 19.8891 19.0062 18.4673 17',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.9981 7H11.0019C8.13196 7 6.19701 10.0691 7.32753 12.828C7.48501 13.2124 7.84633 13.4615 8.24612 13.4615H8.9491C9.18605 13.4615 9.39259 13.6302 9.45006 13.8706L10.3551 17.6567C10.5438 18.4462 11.222 19 12 19C12.778 19 13.4562 18.4462 13.6449 17.6567L14.5499 13.8706C14.6074 13.6302 14.814 13.4615 15.0509 13.4615H15.7539C16.1537 13.4615 16.515 13.2124 16.6725 12.828C17.803 10.0691 15.868 7 12.9981 7Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 4.5C14.5 5.88071 13.3807 7 12 7C10.6193 7 9.5 5.88071 9.5 4.5C9.5 3.11929 10.6193 2 12 2C13.3807 2 14.5 3.11929 14.5 4.5Z',
      stroke: 'currentColor',
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

LocationUser4Icon.displayName = 'LocationUser4Icon';
export default LocationUser4Icon;
