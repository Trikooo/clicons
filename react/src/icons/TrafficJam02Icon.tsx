import React from 'react';
import config from '../config';

interface TrafficJam02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name TrafficJam02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/traffic-jam02)
 * @see {@link https://clicons.dev/icon/traffic-jam02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const TrafficJam02Icon = React.forwardRef<SVGSVGElement, TrafficJam02IconProps>(
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
      d: 'M12 14H6C4.11438 14 3.17157 14 2.58579 14.5858C2 15.1716 2 16.1144 2 18V19H16V18C16 16.1144 16 15.1716 15.4142 14.5858C14.8284 14 13.8856 14 12 14Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15 14L14.6431 12.2155C14.3353 10.6763 14.1813 9.90663 13.6284 9.45332C13.0754 9 12.2905 9 10.7208 9H7.27922C5.70946 9 4.92459 9 4.37163 9.45332C3.81867 9.90663 3.66475 10.6763 3.35689 12.2155L3 14',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 11.0003H15C16.8856 11.0003 17.8284 11.0003 18.4142 11.5861C19 12.1719 19 13.1147 19 15.0003V18M18 11.0003L17.6431 9.21588C17.3353 7.67661 17.1813 6.90697 16.6284 6.45366C16.0754 6.00034 15.2905 6.00034 13.7208 6.00034L10.4788 6C8.90902 6 8.12415 6 7.57119 6.45332C7.04467 6.88496 6.87994 7.6034 6.59961 9',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 8.00034H18C19.8856 8.00034 20.8284 8.00034 21.4142 8.58613C22 9.17191 22 10.1147 22 12.0003V15M21 8.00034L20.6431 6.21588C20.3353 4.67661 20.1813 3.90697 19.6284 3.45366C19.0754 3.00034 18.2905 3.00034 16.7208 3.00034L13.4788 3C11.909 3 11.1241 3 10.5712 3.45332C10.0447 3.88496 9.87994 4.6034 9.59961 6',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M11 18H7L6 19H12L11 18Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 16.5V16.51',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 16.5V16.51',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 21V19H3V21H2Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 19V21H15V19H16Z',
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

TrafficJam02Icon.displayName = 'TrafficJam02Icon';
export default TrafficJam02Icon;
