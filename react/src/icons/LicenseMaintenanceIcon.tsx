import React from 'react';
import config from '../config';

interface LicenseMaintenanceIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LicenseMaintenanceIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/license-maintenance)
 * @see {@link https://clicons.dev/icon/license-maintenance}
 */
const LicenseMaintenanceIcon = React.forwardRef<SVGSVGElement, LicenseMaintenanceIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 22H10.5C6.72873 22 4.8431 22 3.67153 20.8284C2.49995 19.6568 2.49997 17.7712 2.5 13.9999L2.50004 9.99993C2.50007 6.22872 2.50008 4.34312 3.67166 3.17156C4.84323 2 6.72883 2 10.5 2H11.4999C15.2712 2 17.1568 2 18.3284 3.17157C19.4999 4.34315 19.4999 6.22876 19.4999 10V11'
    }
  ],
  [
    'path',
    {
      d: 'M7 7H15M7 12H11.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 20.7727C19.2673 20.7727 20.7 19.3075 20.7 17.5C20.7 15.6925 19.2673 14.2273 17.5 14.2273M17.5 20.7727C15.7327 20.7727 14.3 19.3075 14.3 17.5C14.3 15.6925 15.7327 14.2273 17.5 14.2273M17.5 20.7727V22M17.5 14.2273V13M14.5913 15.7149L13.5004 15.0455M21.5 19.9545L20.4092 19.2851M20.4087 15.7149L21.4996 15.0455M13.5 19.9545L14.5908 19.2851'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

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
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

LicenseMaintenanceIcon.displayName = 'LicenseMaintenanceIcon';
export default LicenseMaintenanceIcon;
