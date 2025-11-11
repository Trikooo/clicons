import React from 'react';
import config from '../config';

interface Shaka03IconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name Shaka03Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/shaka03)
 * @see {@link https://clicons.dev/icon/shaka03} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const Shaka03Icon = React.forwardRef<SVGSVGElement, Shaka03IconProps>(
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

    const iconData = [["path", { d: "M14.0002 16.4885C14.8286 16.4885 15.5002 15.8175 15.5002 14.9898C15.5002 14.1621 14.8286 13.4911 14.0002 13.4911M14.0002 16.4885L20.1172 17.7347C20.9142 17.8629 21.5002 18.5502 21.5002 19.3568C21.5002 20.3551 20.6164 21.1227 19.6269 20.9837L10.8333 19.486C10.8333 19.486 7.81555 19.1582 6.95041 18.8274C5.28774 18.4177 4.26744 17.4877 2.5 17.4877M14.0002 16.4885H12.0002C11.1717 16.4885 10.5002 15.8175 10.5002 14.9898C10.5002 14.1621 11.1717 13.4911 12.0002 13.4911H12.5001M15.0002 10.4936C15.8283 10.4933 16.4995 9.82241 16.4995 8.9949C16.4995 8.16718 15.828 7.49618 14.9995 7.49618L13.0002 7.49639C12.1717 7.49639 11.5002 8.16739 11.5002 8.99511C11.5002 9.82284 12.1717 10.4938 13.0002 10.4938M15.0002 10.4936L13.0002 10.4938M15.0002 10.4936H14.5002C15.3286 10.4936 16.0002 11.1646 16.0002 11.9924C16.0002 12.8201 15.3286 13.4911 14.5002 13.4911H12.5001M13.0002 10.4938L12.5002 10.4938C11.6718 10.4937 11.0002 11.1647 11.0002 11.9924C11.0002 12.8201 11.6717 13.4911 12.5001 13.4911M11.0377 7.49618L12.6631 5.87725C13.3763 5.16693 13.3112 3.99687 12.5237 3.36934C11.9211 2.88917 11.0686 2.87591 10.4513 3.33709L5.85304 6.93373C4.97328 7.62186 3.61728 7.99575 2.5 7.99575", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

Shaka03Icon.displayName = 'Shaka03Icon';
export default Shaka03Icon;
