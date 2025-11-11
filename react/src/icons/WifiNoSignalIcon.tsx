import React from 'react';
import config from '../config';

interface WifiNoSignalIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name WifiNoSignalIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/wifi-no-signal)
 * @see {@link https://clicons.dev/icon/wifi-no-signal} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const WifiNoSignalIcon = React.forwardRef<SVGSVGElement, WifiNoSignalIconProps>(
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

    const iconData = [["path", { d: "M20.5126 10.8011L15.1758 17.6752C13.7137 19.5584 12.9827 20.5 12 20.5C11.0173 20.5 10.2863 19.5584 8.82421 17.6752L3.48742 10.8011C2.40801 9.41078 1.86831 8.71561 2.02741 7.82234C2.18651 6.92907 2.81754 6.53743 4.07962 5.75415C6.38289 4.32467 9.0958 3.5 12 3.5C14.9042 3.5 17.6171 4.32467 19.9204 5.75415C21.1825 6.53743 21.8135 6.92907 21.9726 7.82234C22.1317 8.71561 21.592 9.41078 20.5126 10.8011Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }]];

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

WifiNoSignalIcon.displayName = 'WifiNoSignalIcon';
export default WifiNoSignalIcon;
