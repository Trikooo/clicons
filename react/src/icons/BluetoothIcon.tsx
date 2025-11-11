import React from 'react';
import config from '../config';

interface BluetoothIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BluetoothIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/bluetooth)
 * @see {@link https://clicons.dev/icon/bluetooth} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BluetoothIcon = React.forwardRef<SVGSVGElement, BluetoothIconProps>(
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

    const iconData = [["path", { d: "M11.9994 12V6.66586C11.9994 4.80386 11.9994 3.87286 12.5847 3.578C13.17 3.28313 13.9092 3.84173 15.3877 4.95893L16.0935 5.49234C17.1288 6.27468 17.6465 6.66586 17.6465 7.19927C17.6465 7.73268 17.1288 8.12386 16.0935 8.9062L11.9994 12ZM11.9994 12V17.3341C11.9994 19.1961 11.9994 20.1271 12.5847 20.422C13.17 20.7169 13.9092 20.1583 15.3877 19.0411L16.0935 18.5077C17.1288 17.7253 17.6465 17.3341 17.6465 16.8007C17.6465 16.2673 17.1288 15.8761 16.0935 15.0938L11.9994 12ZM11.9994 12L5.64648 7.19927M11.9994 12L5.64648 16.8007", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M18.9998 12H19.0088", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "1" }],
  ["path", { d: "M4.99981 12H5.00879", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", key: "2" }]];

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

BluetoothIcon.displayName = 'BluetoothIcon';
export default BluetoothIcon;
