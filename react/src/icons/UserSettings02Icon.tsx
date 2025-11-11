import React from 'react';
import config from '../config';

interface UserSettings02IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name UserSettings02Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/user-settings02)
 * @see {@link https://clicons.dev/icon/user-settings02} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const UserSettings02Icon = React.forwardRef<SVGSVGElement, UserSettings02IconProps>(
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

    const iconData = [["path", { d: "M14 7.5C14 4.73858 11.7614 2.5 9 2.5C6.23858 2.5 4 4.73858 4 7.5C4 10.2614 6.23858 12.5 9 12.5C11.7614 12.5 14 10.2614 14 7.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M16 19.5C16 15.634 12.866 12.5 9 12.5C5.13401 12.5 2 15.634 2 19.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M19 13L19 14.5M19 13C19.737 13 20.3809 12.6013 20.7278 12.0079M19 13C18.263 13 17.6191 12.6013 17.2722 12.0079M19 9L19 7.5M19 9C19.737 9 20.3809 9.39866 20.7278 9.99209M19 9C18.263 9 17.6191 9.39865 17.2722 9.99209M22 9.25L20.7278 9.99209M16 12.75L17.2722 12.0079M22 12.75L20.7278 12.0079M16 9.25L17.2722 9.99209M20.7278 12.0079C20.9009 11.7119 21 11.3676 21 11C21 10.6324 20.9009 10.288 20.7278 9.99209M17.2722 9.99209C17.0992 10.288 17 10.6324 17 11C17 11.3676 17.0991 11.712 17.2722 12.0079", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }]];

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

UserSettings02Icon.displayName = 'UserSettings02Icon';
export default UserSettings02Icon;
