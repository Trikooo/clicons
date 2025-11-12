import React from 'react';
import config from '../config';

interface RotateRight3IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name RotateRight3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/rotate-right3)
 * @see {@link https://clicons.dev/icon/rotate-right3} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const RotateRight3Icon = React.forwardRef<SVGSVGElement, RotateRight3IconProps>(
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
      d: 'M16.3751 10.4588L16.819 11.2239C17.3094 12.069 17.0184 13.1495 16.1691 13.6374M16.1691 13.6374L15.4003 14.0792M16.1691 13.6374C16.5938 13.3935 17.1367 13.5383 17.3819 13.9608C17.8722 14.8059 17.5812 15.8865 16.732 16.3744M16.732 16.3744L15.9631 16.8161M16.732 16.3744C17.1344 16.1431 17.6493 16.3269 17.8123 16.7599L17.9204 17.0471C18.2249 17.8559 17.8972 18.7652 17.1455 19.1971L16.0131 19.8472C14.3421 20.8072 13.5065 21.2872 12.6944 21.4161C12.2233 21.4908 11.5063 21.3859 10.9709 21.2803C10.5078 21.1889 10.0223 21.2487 9.61345 21.4836L8.71806 21.998M14.8373 11.3421L19.8349 8.47101C20.4719 8.10508 20.6901 7.29463 20.3224 6.66083C19.9546 6.02703 19.1402 5.80987 18.5032 6.1758L10.8434 10.5761L11.3738 8.61856C11.6066 7.75964 11.0367 6.89245 10.1524 6.75981C9.47572 6.65832 8.81442 7.02469 8.54464 7.65053L6.60717 12.4356C6.23648 13.3511 5.36001 14.2364 4.50098 14.7299',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.1362 4.96465C14.7393 5.3603 13.0127 5.24616 12.3758 5.16671M15.1362 4.96465C15.5331 4.56901 15.5445 2.63697 15.4648 2.00208M15.1362 4.96465C14.1152 3.19642 10.0556 0.375875 6.02724 3.19642C4.08057 4.55942 3.80588 5.41838 3.49804 5.99381',
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

RotateRight3Icon.displayName = 'RotateRight3Icon';
export default RotateRight3Icon;
