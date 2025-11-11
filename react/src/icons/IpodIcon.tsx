import React from 'react';
import config from '../config';

interface IpodIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name IpodIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/ipod)
 * @see {@link https://clicons.dev/icon/ipod} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const IpodIcon = React.forwardRef<SVGSVGElement, IpodIconProps>(
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

    const iconData = [["path", { d: "M19.5 13.5V10.5C19.5 6.74142 19.5 4.86213 18.5711 3.60746C18.4225 3.40678 18.2587 3.22119 18.0817 3.0528C16.9746 2 15.3164 2 12 2C8.68361 2 7.02541 2 5.91834 3.0528C5.74128 3.22119 5.57752 3.40678 5.42894 3.60746C4.5 4.86213 4.5 6.74142 4.5 10.5V13.5C4.5 17.2586 4.5 19.1379 5.42894 20.3925C5.57752 20.5932 5.74128 20.7788 5.91834 20.9472C7.02541 22 8.68361 22 12 22C15.3164 22 16.9746 22 18.0817 20.9472C18.2587 20.7788 18.4225 20.5932 18.5711 20.3925C19.5 19.1379 19.5 17.2586 19.5 13.5Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M4.5 10H19.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }]];

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

IpodIcon.displayName = 'IpodIcon';
export default IpodIcon;
