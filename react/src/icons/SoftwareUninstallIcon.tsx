import React from 'react';
import config from '../config';

interface SoftwareUninstallIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SoftwareUninstallIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/software-uninstall)
 * @see {@link https://clicons.dev/icon/software-uninstall} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SoftwareUninstallIcon = React.forwardRef<SVGSVGElement, SoftwareUninstallIconProps>(
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

    const iconData = [["path", { d: "M9.5 10C9.5 11.1046 10.3954 12 11.5 12C12.6046 12 13.5 11.1046 13.5 10C13.5 8.89543 12.6046 8 11.5 8C10.3954 8 9.5 8.89543 9.5 10Z", stroke: "currentColor", strokeWidth: "1.5", key: "0" }],
  ["path", { d: "M4.57026 14C3.88958 12.8233 3.5 11.4571 3.5 10C3.5 5.58172 7.08172 2 11.5 2C15.9183 2 19.5 5.58172 19.5 10C19.5 11.4571 19.1104 12.8233 18.4297 14", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "1" }],
  ["path", { d: "M13.35 22H5.65C4.38598 22 3.75398 22 3.29997 21.6148C3.10343 21.448 2.93468 21.2337 2.80335 20.9842C2.5 20.4076 2.5 19.6051 2.5 18C2.5 16.3949 2.5 15.5924 2.80335 15.0158C2.93468 14.7663 3.10343 14.552 3.29997 14.3852C3.75398 14 4.38598 14 5.65 14H19.5", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5", key: "2" }],
  ["path", { d: "M15.3906 6.61055L17.4021 4.59912", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "3" }],
  ["path", { d: "M16.5 17L19 19.5M19 19.5L21.5 22M19 19.5L16.5 22M19 19.5L21.5 17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "4" }]];

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

SoftwareUninstallIcon.displayName = 'SoftwareUninstallIcon';
export default SoftwareUninstallIcon;
