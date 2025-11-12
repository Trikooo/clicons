import React from 'react';
import config from '../config';

interface SandalsIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SandalsIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/sandals)
 * @see {@link https://clicons.dev/icon/sandals} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SandalsIcon = React.forwardRef<SVGSVGElement, SandalsIconProps>(
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
      d: 'M10.5 18.3002V5.81444C10.5 4.22713 10.0436 2.92085 8.11708 3.00374C6.50864 3.07294 5.00141 3.89684 3.80452 4.89375C1.66292 6.67753 1.72577 8.75973 2.46872 11.2023L4.85288 19.0408C5.20558 20.2004 6.33546 21 7.62123 21C9.21113 21 10.5 19.7913 10.5 18.3002Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 18.3002V5.81444C13.5 4.22713 13.9564 2.92085 15.8829 3.00374C17.4914 3.07294 18.9986 3.89684 20.1955 4.89375C22.3371 6.67753 22.2742 8.75973 21.5313 11.2023L19.1471 19.0408C18.7944 20.2004 17.6645 21 16.3788 21C14.7889 21 13.5 19.7913 13.5 18.3002Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M3 13C3 12 3.7 9.3 6.5 8.5M6.5 8.5C9 9 10 10 10.5 10.5M6.5 8.5V7',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M21 13C21 12 20.3 9.3 17.5 8.5M17.5 8.5C15 9 14 10 13.5 10.5M17.5 8.5V7',
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

SandalsIcon.displayName = 'SandalsIcon';
export default SandalsIcon;
