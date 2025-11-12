import React from 'react';
import config from '../config';

interface UserLock01IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name UserLock01Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/user-lock01)
 * @see {@link https://clicons.dev/icon/user-lock01} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const UserLock01Icon = React.forwardRef<SVGSVGElement, UserLock01IconProps>(
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
      d: 'M14.502 8.00003C14.502 5.23861 12.2634 3.00003 9.50195 3.00003C6.74053 3.00003 4.50195 5.23861 4.50195 8.00003C4.50195 10.7615 6.74053 13 9.50195 13C12.2634 13 14.502 10.7615 14.502 8.00003Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M16.2374 15.6742V14.2523C16.2374 13.2846 17.0219 12.5 17.9897 12.5C18.9575 12.5 19.742 13.2846 19.742 14.2523V15.6742M16.3069 20.9995H19.6929C20.6898 20.9995 21.4979 20.1929 21.4979 19.198V17.6942C21.4979 16.6992 20.6898 15.8926 19.6929 15.8926H16.3069C15.3101 15.8926 14.502 16.6992 14.502 17.6942L14.502 19.198C14.502 20.1929 15.3101 20.9995 16.3069 20.9995Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M2.50195 20C2.50195 16.134 5.63596 13 9.50195 13C10.9892 13 12.3681 13.4638 13.502 14.2547',
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

UserLock01Icon.displayName = 'UserLock01Icon';
export default UserLock01Icon;
