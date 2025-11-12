import React from 'react';
import config from '../config';

interface MobileNavigatorIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name MobileNavigatorIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/mobile-navigator)
 * @see {@link https://clicons.dev/icon/mobile-navigator} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MobileNavigatorIcon = React.forwardRef<SVGSVGElement, MobileNavigatorIconProps>(
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
      d: 'M4 9C4 5.70017 4 4.05025 5.17157 3.02513C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.02513C20 4.05025 20 5.70017 20 9V15C20 18.2998 20 19.9497 18.8284 20.9749C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.9749C4 19.9497 4 18.2998 4 15V9Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.6287 14.2468C12.4601 14.4092 12.2347 14.5 12.0001 14.5C11.7655 14.5 11.5401 14.4092 11.3715 14.2468C9.82715 12.7504 7.75759 11.0788 8.76685 8.65187C9.31255 7.33966 10.6225 6.5 12.0001 6.5C13.3777 6.5 14.6876 7.33966 15.2333 8.65187C16.2413 11.0757 14.1768 12.7555 12.6287 14.2468Z',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 10H12.009',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2'
    }
  ],
  [
    'path',
    {
      d: 'M11 19H13',
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

MobileNavigatorIcon.displayName = 'MobileNavigatorIcon';
export default MobileNavigatorIcon;
