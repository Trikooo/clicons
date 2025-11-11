import React from 'react';
import config from '../config';

interface CastboxIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name CastboxIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/castbox)
 * @see {@link https://clicons.dev/icon/castbox} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const CastboxIcon = React.forwardRef<SVGSVGElement, CastboxIconProps>(
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

    const iconData = [["path", { d: "M18.5273 5.54369L12.931 2.25342C12.6488 2.08749 12.3274 2 12 2C11.6726 2 11.3512 2.08749 11.069 2.25342L5.47268 5.54369C4.50957 6.10994 4.02802 6.39307 3.76401 6.85455C3.5 7.31603 3.5 7.87465 3.5 8.99188V15.0081C3.5 16.1254 3.5 16.684 3.76401 17.1455C4.02802 17.6069 4.50957 17.8901 5.47268 18.4563L11.069 21.7466C11.3512 21.9125 11.6726 22 12 22C12.3274 22 12.6488 21.9125 12.931 21.7466L18.5273 18.4563C19.4904 17.8901 19.972 17.6069 20.236 17.1455C20.5 16.684 20.5 16.1254 20.5 15.0081V8.99188C20.5 7.87465 20.5 7.31603 20.236 6.85455C19.972 6.39307 19.4904 6.10994 18.5273 5.54369Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M17 12.5V13.5M15 11.5V14M13 14.5V10M11 9.5V14M9 10.5V15.5M7 11.5V13.5M9.5 12H10.5M11.5 12.5H12.5M7.5 12.5H8.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

CastboxIcon.displayName = 'CastboxIcon';
export default CastboxIcon;
