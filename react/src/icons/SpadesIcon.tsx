import React from 'react';
import config from '../config';

interface SpadesIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SpadesIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/spades)
 * @see {@link https://clicons.dev/icon/spades} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SpadesIcon = React.forwardRef<SVGSVGElement, SpadesIconProps>(
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
      d: 'M15.3747 21.3991C15.5506 21.1194 15.3236 20.6714 14.8696 19.7753C14.6285 19.2994 13.2915 16.8919 13.7551 16.4097C13.8763 16.2836 14.304 16.3909 15.1593 16.6054C16.4152 16.9205 18.0294 16.8096 19.4282 15.7714C24.7293 11.8367 15.1828 2 12 2C8.81719 2 -0.729335 11.8367 4.57182 15.7714C5.97058 16.8096 7.58483 16.9205 8.84066 16.6054C9.696 16.3909 10.1237 16.2836 10.2449 16.4097C10.7085 16.8919 9.37152 19.2994 9.13041 19.7753C8.67639 20.6714 8.44938 21.1194 8.6253 21.3991C9.04019 22.0588 14.789 22.3304 15.3747 21.3991Z',
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

SpadesIcon.displayName = 'SpadesIcon';
export default SpadesIcon;
