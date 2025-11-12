import React from 'react';
import config from '../config';

interface FlipPhoneIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name FlipPhoneIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/flip-phone)
 * @see {@link https://clicons.dev/icon/flip-phone} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const FlipPhoneIcon = React.forwardRef<SVGSVGElement, FlipPhoneIconProps>(
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
      d: 'M14.5 4H5.5V15.5C5.5 19.0899 8.41015 22 12 22C15.5899 22 18.5 19.0899 18.5 15.5V8C18.5 6.11438 18.5 5.17157 17.9142 4.58579C17.3284 4 16.3856 4 14.5 4Z',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M11 18H13',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 8.42857C8.5 8.02959 8.5 7.83009 8.55612 7.66972C8.65663 7.38247 8.88247 7.15663 9.16972 7.05612C9.33009 7 9.52959 7 9.92857 7H14.0714C14.4704 7 14.6699 7 14.8303 7.05612C15.1175 7.15663 15.3434 7.38247 15.4439 7.66972C15.5 7.83009 15.5 8.02959 15.5 8.42857V9C15.5 9.4645 15.5 9.69675 15.4692 9.89109C15.2998 10.9608 14.4608 11.7998 13.3911 11.9692C13.1968 12 12.4645 12 12 12C11.5355 12 10.8032 12 10.6089 11.9692C9.53918 11.7998 8.70021 10.9608 8.53078 9.89109C8.5 9.69675 8.5 9.4645 8.5 9V8.42857Z',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 4L5.5 2',
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

FlipPhoneIcon.displayName = 'FlipPhoneIcon';
export default FlipPhoneIcon;
