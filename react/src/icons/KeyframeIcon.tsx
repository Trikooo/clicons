import React from 'react';
import config from '../config';

interface KeyframeIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name KeyframeIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/keyframe)
 * @see {@link https://clicons.dev/icon/keyframe} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const KeyframeIcon = React.forwardRef<SVGSVGElement, KeyframeIconProps>(
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

    const iconData = [["path", { d: "M9.38188 5.00507C10.5901 3.66836 11.1943 3 12 3C12.8057 3 13.4099 3.66836 14.6181 5.00507L17.5897 8.29254C19.1966 10.0702 20 10.9591 20 12C20 13.0409 19.1966 13.9298 17.5897 15.7075L14.6181 18.9949C13.4099 20.3316 12.8057 21 12 21C11.1943 21 10.5901 20.3316 9.38188 18.9949L6.41031 15.7075C4.80344 13.9298 4 13.0409 4 12C4 10.9591 4.80344 10.0702 6.41031 8.29254L9.38188 5.00507Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }]];

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

KeyframeIcon.displayName = 'KeyframeIcon';
export default KeyframeIcon;
