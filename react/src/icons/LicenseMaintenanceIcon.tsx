import React from 'react';
import config from '../config';

interface LicenseMaintenanceIconProps extends React.SVGAttributes<SVGSVGElement> {
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
 * @name LicenseMaintenanceIcon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/license-maintenance)
 * @see {@link https://clicons.dev/icon/license-maintenance} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const LicenseMaintenanceIcon = React.forwardRef<SVGSVGElement, LicenseMaintenanceIconProps>(
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

    const iconData = [
  [
    'path',
    {
      d: 'M12 22H10.5C6.72873 22 4.8431 22 3.67153 20.8284C2.49995 19.6568 2.49997 17.7712 2.5 13.9999L2.50004 9.99993C2.50007 6.22872 2.50008 4.34312 3.67166 3.17156C4.84323 2 6.72883 2 10.5 2H11.4999C15.2712 2 17.1568 2 18.3284 3.17157C19.4999 4.34315 19.4999 6.22876 19.4999 10V11',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M7 7H15M7 12H11.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 20.7727C19.2673 20.7727 20.7 19.3075 20.7 17.5C20.7 15.6925 19.2673 14.2273 17.5 14.2273M17.5 20.7727C15.7327 20.7727 14.3 19.3075 14.3 17.5C14.3 15.6925 15.7327 14.2273 17.5 14.2273M17.5 20.7727V22M17.5 14.2273V13M14.5913 15.7149L13.5004 15.0455M21.5 19.9545L20.4092 19.2851M20.4087 15.7149L21.4996 15.0455M13.5 19.9545L14.5908 19.2851',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ]
];

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

LicenseMaintenanceIcon.displayName = 'LicenseMaintenanceIcon';
export default LicenseMaintenanceIcon;
