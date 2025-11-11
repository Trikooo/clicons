import React from 'react';
import config from '../config';

interface BluetoothCircleIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BluetoothCircleIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/bluetooth-circle)
 * @see {@link https://clicons.dev/icon/bluetooth-circle} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BluetoothCircleIcon = React.forwardRef<SVGSVGElement, BluetoothCircleIconProps>(
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

    const iconData = [["circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M11.5953 12V8.61228C11.5953 7.66908 11.5953 7.19748 11.8894 7.0428C12.1835 6.88812 12.559 7.16224 13.31 7.71046L14.1553 8.32755C14.7184 8.73866 15 8.94421 15 9.22937C15 9.51453 14.7184 9.72009 14.1553 10.1312L11.5953 12ZM11.5953 12V15.3877C11.5953 16.3309 11.5953 16.8025 11.8894 16.9572C12.1835 17.1119 12.559 16.8378 13.31 16.2895L14.1553 15.6725C14.7184 15.2613 15 15.0558 15 14.7706C15 14.4855 14.7184 14.2799 14.1553 13.8688L11.5953 12ZM11.5953 12L9 9.77778M11.5953 12L9 14.2222", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "1" }]];

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

BluetoothCircleIcon.displayName = 'BluetoothCircleIcon';
export default BluetoothCircleIcon;
