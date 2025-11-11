import React from 'react';
import config from '../config';

interface BodySoapIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name BodySoapIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/body-soap)
 * @see {@link https://clicons.dev/icon/body-soap} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const BodySoapIcon = React.forwardRef<SVGSVGElement, BodySoapIconProps>(
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

    const iconData = [["path", { d: "M4.5 13C4.5 10.2386 6.73858 8 9.5 8C12.2614 8 14.5 10.2386 14.5 13V18C14.5 19.8856 14.5 20.8284 13.9142 21.4142C13.3284 22 12.3856 22 10.5 22H8.5C6.61438 22 5.67157 22 5.08579 21.4142C4.5 20.8284 4.5 19.8856 4.5 18V13Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M14.5 13.1122C10.8607 9.83944 8.89093 14.9405 4.5 13.8418", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M7.5 8V7C7.5 6.05719 7.5 5.58579 7.79289 5.29289C8.08579 5 8.55719 5 9.5 5C10.4428 5 10.9142 5 11.2071 5.29289C11.5 5.58579 11.5 6.05719 11.5 7V8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M9.5 5V2M9.5 2H7.5M9.5 2H12.9229C13.9117 2 14.7493 2.39009 15.5 3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M19.4414 8.97336C19.671 9.84608 19.2059 10.7313 18.4026 10.9505C17.5994 11.1697 16.7621 10.64 16.5325 9.76726C16.303 8.89454 17.3634 7 17.3634 7C17.3634 7 19.2118 8.10063 19.4414 8.97336Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]];

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

BodySoapIcon.displayName = 'BodySoapIcon';
export default BodySoapIcon;
