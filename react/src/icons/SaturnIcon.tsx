import React from 'react';
import config from '../config';

interface SaturnIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name SaturnIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/saturn)
 * @see {@link https://clicons.dev/icon/saturn} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const SaturnIcon = React.forwardRef<SVGSVGElement, SaturnIconProps>(
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

    const iconData = [["path", { d: "M14.8255 5.37555C17.6258 3.38071 19.9127 2.49436 20.7092 3.29084C21.5056 4.08733 20.6193 6.37425 18.6244 9.17452M5.37555 14.8255C3.38071 17.6258 2.49436 19.9127 3.29084 20.7092C4.08733 21.5056 6.37425 20.6193 9.17452 18.6244M18.6244 9.17452C17.4921 10.7641 16.0025 12.5191 14.2608 14.2608C12.5191 16.0025 10.7641 17.4921 9.17452 18.6244M18.6244 9.17452C18.9949 10.042 19.2 10.9971 19.2 12C19.2 15.9765 15.9765 19.2 12 19.2C10.9971 19.2 10.042 18.9949 9.17452 18.6244M17.0912 6.90883C15.7882 5.60589 13.9882 4.8 12 4.8C8.02355 4.8 4.8 8.02355 4.8 12C4.8 13.9882 5.60589 15.7882 6.90883 17.0912", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", key: "0" }]];

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

SaturnIcon.displayName = 'SaturnIcon';
export default SaturnIcon;
