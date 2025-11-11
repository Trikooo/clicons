import React from 'react';
import config from '../config';

interface SpeakerIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SpeakerIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/speaker)
 * @see {@link https://clicons.dev/icon/speaker} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SpeakerIcon = React.forwardRef<SVGSVGElement, SpeakerIconProps>(
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

    const iconData = [["path", { d: "M20.5 13.5V10.5C20.5 6.74142 20.5 4.86213 19.4472 3.60746C19.2788 3.40678 19.0932 3.22119 18.8925 3.0528C17.6379 2 15.7586 2 12 2C8.24142 2 6.36213 2 5.10746 3.0528C4.90678 3.22119 4.72119 3.40678 4.5528 3.60746C3.5 4.86213 3.5 6.74142 3.5 10.5V13.5C3.5 17.2586 3.5 19.1379 4.5528 20.3925C4.72119 20.5932 4.90678 20.7788 5.10746 20.9472C6.36213 22 8.24142 22 12 22C15.7586 22 17.6379 22 18.8925 20.9472C19.0932 20.7788 19.2788 20.5932 19.4472 20.3925C20.5 19.1379 20.5 17.2586 20.5 13.5Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M15.5 15C15.5 16.933 13.933 18.5 12 18.5C10.067 18.5 8.5 16.933 8.5 15C8.5 13.067 10.067 11.5 12 11.5C13.933 11.5 15.5 13.067 15.5 15Z", stroke: "currentColor", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M13.5 7C13.5 7.82843 12.8284 8.5 12 8.5C11.1716 8.5 10.5 7.82843 10.5 7C10.5 6.17157 11.1716 5.5 12 5.5C12.8284 5.5 13.5 6.17157 13.5 7Z", stroke: "currentColor", strokeWidth: "1.5", key: "2" }]];

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

SpeakerIcon.displayName = 'SpeakerIcon';
export default SpeakerIcon;
