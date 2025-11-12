import React from 'react';
import config from '../config';

interface SwimmingCapIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SwimmingCapIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/swimming-cap)
 * @see {@link https://clicons.dev/icon/swimming-cap} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SwimmingCapIcon = React.forwardRef<SVGSVGElement, SwimmingCapIconProps>(
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
      d: 'M5.2057 13.5C6.61724 10.9057 6.10634 7.50433 4 5.5',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.7943 13.5C17.3828 10.9057 17.8937 7.50433 20 5.5',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M3.84563 13.5H20.1544C21.6152 13.5 22.1108 13.1856 21.9799 11.6907C21.5401 6.67031 17.2341 2.5 12 2.5C6.76593 2.5 2.45986 6.67031 2.02015 11.6907C1.88922 13.1856 2.38484 13.5 3.84563 13.5Z',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M4 19C4 17.4634 6.1186 17.1143 7.23329 16.6688C8.80778 16.0396 10.5 17.2472 10.5 19C10.5 20.7528 8.80778 21.9604 7.23329 21.3312C6.1186 20.8857 4 20.5366 4 19ZM4 19L2 19M20 19C20 17.4634 17.8814 17.1143 16.7667 16.6688C15.1922 16.0396 13.5 17.2472 13.5 19C13.5 20.7528 15.1922 21.9604 16.7667 21.3312C17.8814 20.8857 20 20.5366 20 19ZM20 19L22 19M10.5 18.5C10.7994 17.9022 11.359 17.5 12 17.5C12.641 17.5 13.2006 17.9022 13.5 18.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
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

SwimmingCapIcon.displayName = 'SwimmingCapIcon';
export default SwimmingCapIcon;
