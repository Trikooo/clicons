import React from 'react';
import config from '../config';

interface SausageIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SausageIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/sausage)
 * @see {@link https://clicons.dev/icon/sausage} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SausageIcon = React.forwardRef<SVGSVGElement, SausageIconProps>(
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
      d: 'M12 5.66697L12 7.5M22 3L20 5.5L22 6.19982M2 3L4 5.5L2 6.19982M15 5.22532L15.5 7M8.99995 5.22532L8.5 7',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 11C14.5024 11 16.863 10.2715 18.9424 8.98155C20.0441 8.29811 20.3027 6.61406 19.6351 5.36009C18.9013 3.98186 17.3452 3.67998 16.092 4.32364C14.836 4.96875 13.4528 5.32591 12 5.32591C10.5472 5.32591 9.16398 4.96875 7.90796 4.32364C6.65477 3.67998 5.0987 3.98186 4.36491 5.36008C3.69726 6.61406 3.95591 8.29811 5.05764 8.98155C7.13702 10.2715 9.49759 11 12 11Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 15.667V17.2664M12 15.667C13.04 15.667 14.0463 15.513 15 15.2253M12 15.667C10.9599 15.667 9.95362 15.513 8.99995 15.2253M3.92872 15.6991C3.22294 16.8777 3.49636 18.4605 4.66103 19.1029C6.8592 20.3153 9.35461 21 12 21C14.6453 21 17.1408 20.3153 19.3389 19.1029C20.5036 18.4605 20.777 16.8777 20.0712 15.6991M3.92872 15.6991C4.70444 14.4037 6.3494 14.12 7.67417 14.7249C8.10277 14.9207 8.54538 15.0882 8.99995 15.2253M3.92872 15.6991L2 13M3.92872 15.6991L2 16.1998M20.0712 15.6991C19.2955 14.4037 17.6505 14.12 16.3258 14.7249C15.8972 14.9207 15.4546 15.0882 15 15.2253M20.0712 15.6991L22 16.1998M20.0712 15.667L22 13M15 15.2253L15.5 16.7331M8.99995 15.2253L8.5 16.7331',
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

SausageIcon.displayName = 'SausageIcon';
export default SausageIcon;
