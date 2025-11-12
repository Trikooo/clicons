import React from 'react';
import config from '../config';

interface SunCloudMidSnowIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SunCloudMidSnowIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/sun-cloud-mid-snow)
 * @see {@link https://clicons.dev/icon/sun-cloud-mid-snow} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SunCloudMidSnowIcon = React.forwardRef<SVGSVGElement, SunCloudMidSnowIconProps>(
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
      d: 'M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.4776 9.00915C17.485 9.00911 17.4925 9.00909 17.5 9.00909C19.9853 9.00909 22 11.0269 22 13.5159C22 15.4782 20.7478 16.8813 19 17.5M17.4776 9.00915C17.4924 8.8442 17.5 8.67716 17.5 8.50834C17.5 5.46617 15.0376 3 12 3C9.12324 3 6.76233 5.21197 6.52042 8.03032M17.4776 9.00915C17.3753 10.1453 16.9286 11.182 16.2428 12.0136M6.52042 8.03032C3.98398 8.27205 2 10.4116 2 13.0152C2 15.0686 3.2341 16.7103 5 17.5M6.52042 8.03032C6.67826 8.01527 6.83823 8.00758 7 8.00758C8.12582 8.00758 9.16474 8.38023 10.0005 9.00909',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 14V20M14.5 15.5L9.50013 18.5M9.5 15.5L14.4999 18.5',
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

SunCloudMidSnowIcon.displayName = 'SunCloudMidSnowIcon';
export default SunCloudMidSnowIcon;
