import React from 'react';
import config from '../config';

interface BluetoothSearchIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BluetoothSearchIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/bluetooth-search)
 * @see {@link https://clicons.dev/icon/bluetooth-search} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BluetoothSearchIcon = React.forwardRef<SVGSVGElement, BluetoothSearchIconProps>(
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

    const iconData = [["path", { d: "M8.77349 11.5C8.8749 7.08726 8.48911 3.78672 9.15201 3.18692C9.21537 3.12959 9.28932 3.08325 9.36678 3.04779C10.2369 2.64938 12.688 4.83294 14.2923 6.22156C14.5558 6.44968 14.5742 6.85339 14.3152 7.08672C13.1694 8.11876 10.8318 9.95773 8.77349 11.5ZM8.77349 11.5L2.51051 16.2903M8.77349 11.5C8.8749 15.9127 8.48911 19.2133 9.15201 19.8131C9.21537 19.8704 9.28942 19.9168 9.36688 19.9523C9.74875 20.127 10.435 19.8046 11.2205 19.2705M2.5 6.72564L11.4146 13.5528", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M19.6322 19.1589L21.5 21M20.7074 16.5964C20.7074 18.5826 19.094 20.1928 17.1037 20.1928C15.1134 20.1928 13.5 18.5826 13.5 16.5964C13.5 14.6102 15.1134 13 17.1037 13C19.094 13 20.7074 14.6102 20.7074 16.5964Z", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }]];

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

BluetoothSearchIcon.displayName = 'BluetoothSearchIcon';
export default BluetoothSearchIcon;
