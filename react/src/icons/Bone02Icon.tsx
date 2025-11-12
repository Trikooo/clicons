import React from 'react';
import config from '../config';

interface Bone02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Bone02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/bone02)
 * @see {@link https://clicons.dev/icon/bone02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Bone02Icon = React.forwardRef<SVGSVGElement, Bone02IconProps>(
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
      d: 'M8.85977 14.4543C9.24591 14.0681 9.72987 13.8394 10.2319 13.7681M10.2319 13.7681C10.9612 13.6646 11.7287 13.8933 12.2896 14.4543C13.2368 15.4014 13.2368 16.937 12.2896 17.8841C11.537 18.6368 10.4127 18.7913 9.50745 18.3478C9.11069 18.1534 8.6065 18.1374 8.29408 18.4498L4.74391 22M10.2319 13.7681C10.2319 13.768 10.2319 13.7682 10.2319 13.7681ZM10.2319 13.7681C10.3354 13.0388 10.1067 12.2713 9.54574 11.7104C8.59861 10.7632 7.06299 10.7632 6.11586 11.7104C5.3632 12.463 5.20866 13.5873 5.65222 14.4925C5.84662 14.8893 5.86259 15.3935 5.55017 15.7059L2 19.2561',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.1402 9.54574C14.7541 9.93189 14.2701 10.1606 13.7681 10.2319M13.7681 10.2319C13.0388 10.3354 12.2713 10.1067 11.7104 9.54574C10.7632 8.59861 10.7632 7.063 11.7104 6.11586C12.463 5.3632 13.5873 5.20866 14.4925 5.65222C14.8893 5.84662 15.3935 5.86259 15.7059 5.55017L19.2561 2M13.7681 10.2319C13.6646 10.9612 13.8933 11.7287 14.4543 12.2896C15.4014 13.2368 16.937 13.2368 17.8841 12.2896C18.6368 11.537 18.7913 10.4127 18.3478 9.50745C18.1534 9.11069 18.1374 8.6065 18.4498 8.29408L22 4.74391',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 18V20M18 16H20',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M8 6V4M6 8H4',
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

Bone02Icon.displayName = 'Bone02Icon';
export default Bone02Icon;
