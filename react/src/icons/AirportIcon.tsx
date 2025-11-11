import React from 'react';
import config from '../config';

interface AirportIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AirportIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/airport)
 * @see {@link https://clicons.dev/icon/airport} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AirportIcon = React.forwardRef<SVGSVGElement, AirportIconProps>(
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

    const iconData = [["path", { d: "M10.0002 12H6.00024V19C6.00024 20.4142 6.00024 21.1213 6.43958 21.5607C6.87892 22 7.58603 22 9.00024 22H10.0002V12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M18.0002 15H10.0002V22H18.0002C19.4145 22 20.1216 22 20.5609 21.5607C21.0002 21.1213 21.0002 20.4142 21.0002 19V18C21.0002 16.5858 21.0002 15.8787 20.5609 15.4393C20.1216 15 19.4145 15 18.0002 15Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M21 6L20 7M16.5 7H20M20 7L17 10H16M20 7V10.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M12.2686 10.1181C11.9025 11.0296 11.7195 11.4854 11.3388 11.7427C10.9582 12 10.4671 12 9.4848 12H6.51178C5.5295 12 5.03836 12 4.65773 11.7427C4.27711 11.4854 4.09405 11.0296 3.72794 10.1181L3.57717 9.74278C3.07804 8.50009 2.82847 7.87874 3.12717 7.43937C3.42587 7 4.09785 7 5.44182 7H10.5548C11.8987 7 12.5707 7 12.8694 7.43937C13.1681 7.87874 12.9185 8.50009 12.4194 9.74278L12.2686 10.1181Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M9.99616 7H6.00407C5.18904 5.73219 4.8491 5.09829 5.06258 4.59641C5.34685 4.13381 6.15056 4 7.61989 4H8.38063C9.84995 4 10.6537 4.13381 10.9379 4.59641C11.1514 5.09829 10.8112 5.73219 9.99616 7Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }],
  ["path", { d: "M8 4V2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "5" }]];

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

AirportIcon.displayName = 'AirportIcon';
export default AirportIcon;
