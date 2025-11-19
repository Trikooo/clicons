import React from 'react';
import config from '../config';

interface WarehouseIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WarehouseIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/warehouse)
 * @see {@link https://clicons.dev/icon/warehouse}
 */
const WarehouseIcon = React.forwardRef<SVGSVGElement, WarehouseIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.4478 2.98351L4.94777 5.2993C3.76103 5.79898 3.16767 6.04882 2.83383 6.5516C2.5 7.05438 2.5 7.6982 2.5 8.98585V21.5H5.5V11.5C5.5 10.5572 5.5 10.0858 5.79289 9.79289C6.08579 9.5 6.55719 9.5 7.5 9.5H16.5C17.4428 9.5 17.9142 9.5 18.2071 9.79289C18.5 10.0858 18.5 10.5572 18.5 11.5V21.5H21.5V8.98585C21.5 7.6982 21.5 7.05438 21.1662 6.5516C20.8323 6.04882 20.239 5.79898 19.0522 5.2993L13.5522 2.98351C12.7867 2.66117 12.4039 2.5 12 2.5C11.5961 2.5 11.2133 2.66117 10.4478 2.98351Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 6.5H13'
    }
  ],
  [
    'path',
    {
      d: 'M13 15.5H11C10.0572 15.5 9.58579 15.5 9.29289 15.7929C9 16.0858 9 16.5572 9 17.5V19.5C9 20.4428 9 20.9142 9.29289 21.2071C9.58579 21.5 10.0572 21.5 11 21.5H13C13.9428 21.5 14.4142 21.5 14.7071 21.2071C15 20.9142 15 20.4428 15 19.5V17.5C15 16.5572 15 16.0858 14.7071 15.7929C14.4142 15.5 13.9428 15.5 13 15.5Z'
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

WarehouseIcon.displayName = 'WarehouseIcon';
export default WarehouseIcon;
