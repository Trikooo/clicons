import React from 'react';
import config from '../config';

interface AidsIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name AidsIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/aids)
 * @see {@link https://clicons.dev/icon/aids} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const AidsIcon = React.forwardRef<SVGSVGElement, AidsIconProps>(
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

    const iconData = [["path", { d: "M12 2C9.92705 2 6.88247 2.5672 6.29 4.89186C5.7657 6.94903 5.88763 8.4198 7.1936 10.1667L14.8875 20.4583C15.6615 21.4936 16.0486 22.0113 16.5727 21.9998C17.0969 21.9883 17.4599 21.4542 18.186 20.3859L18.7147 19.608C19.6223 18.2725 20.0762 17.6047 19.9895 16.883C19.9029 16.1613 19.3034 15.6152 18.1043 14.523L6.79911 4", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M12 2C14.0729 2 17.1175 2.5672 17.71 4.89186C18.2343 6.94903 18.1124 8.4198 16.8064 10.1667L15.4358 12M17.2009 4L12 8.84105M12 16.5959L9.11248 20.4583C8.33845 21.4936 7.95143 22.0113 7.42726 21.9998C6.90309 21.9883 6.54007 21.4542 5.81402 20.3859L5.28533 19.608C4.37768 18.2725 3.92383 17.6047 4.01046 16.883C4.09709 16.1613 4.69663 15.6152 5.89571 14.523L8.60624 12", stroke: "currentColor", strokeWidth: "1.5", key: "1" }]];

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

AidsIcon.displayName = 'AidsIcon';
export default AidsIcon;
