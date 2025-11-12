import React from 'react';
import config from '../config';

interface PackagingIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name PackagingIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/packaging)
 * @see {@link https://clicons.dev/icon/packaging} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const PackagingIcon = React.forwardRef<SVGSVGElement, PackagingIconProps>(
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
      d: 'M17.5 22C17.5 22 17 20 17 17C17 11.4 18.3333 4.66667 19 2C19.6667 5 21 12 21 16C21 17.2201 20.8139 18.6264 20.6688 19.5375C20.5717 20.147 20.1771 20.6614 19.6251 20.9375L17.5 22ZM17.5 22H5.06155C4.14382 22 3.35065 21.3726 3.22748 20.4631C3.11042 19.5988 3 18.4098 3 17C3 11 5 5 5 5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.78077 2H19C18.9041 2.38357 18.7944 2.85129 18.6769 3.38767C18.4722 4.32192 17.6532 5 16.6967 5H4.34317C4.51028 4.14637 4.67313 3.38764 4.8181 2.75918C4.92124 2.31206 5.3219 2 5.78077 2Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.02139 18.0739C6.00778 17.7328 6 17.3742 6 17C6 15.3484 6.11597 13.5983 6.29662 11.8829C6.34969 11.379 6.77722 11 7.28398 11H13.27C13.8689 11 14.3328 11.5229 14.2722 12.1187C14.1056 13.7583 14 15.424 14 17C14 17.3197 14.0057 17.628 14.0158 17.9238C14.0358 18.5052 13.5784 19 12.9966 19H7.00227C6.47904 19 6.04226 18.5967 6.02139 18.0739Z',
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

PackagingIcon.displayName = 'PackagingIcon';
export default PackagingIcon;
