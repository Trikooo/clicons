import React from 'react';
import config from '../config';

interface TiltifyIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name TiltifyIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/tiltify)
 * @see {@link https://clicons.dev/icon/tiltify} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const TiltifyIcon = React.forwardRef<SVGSVGElement, TiltifyIconProps>(
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
      d: 'M19.75 5.5C19.75 6.32843 19.0784 7 18.25 7C17.4216 7 16.75 6.32843 16.75 5.5C16.75 4.67157 17.4216 4 18.25 4C19.0784 4 19.75 4.67157 19.75 5.5Z',
      stroke: 'currentColor',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.1565 9.2571L7.15453 3.27281C6.23278 2.72131 5.03652 3.03305 4.5032 3.96374C3.9399 4.94674 4.35175 6.19982 5.38926 6.65964L9.55034 8.5L8.21738 19.608C8.12853 20.3484 8.70663 21 9.45232 21C10.0796 21 10.6087 20.5329 10.6865 19.9105L11.9779 9.57967L16.0806 11.398C16.6592 11.6544 17.3377 11.4117 17.6208 10.847C17.9064 10.2775 17.7041 9.58471 17.1565 9.2571Z',
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

TiltifyIcon.displayName = 'TiltifyIcon';
export default TiltifyIcon;
