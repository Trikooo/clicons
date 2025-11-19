import React from 'react';
import config from '../config';

interface TabletConnectedUsbIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TabletConnectedUsbIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tablet-connected-usb)
 * @see {@link https://clicons.dev/icon/tablet-connected-usb}
 */
const TabletConnectedUsbIcon = React.forwardRef<SVGSVGElement, TabletConnectedUsbIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 18C21.8011 18.6891 21.4991 19.2323 21.0408 19.682C19.6974 21 17.5354 21 13.2113 21H11.1729C6.8487 21 4.68664 21 3.3433 19.682C1.99997 18.364 1.99997 16.2426 1.99997 12C1.99997 7.75736 1.99997 5.63604 3.3433 4.31802C4.68664 3 6.8487 3 11.1729 3H13.2113C17.5354 3 19.6974 3 21.0408 4.31802C21.4991 4.76771 21.8011 5.31092 22 5.99999'
    }
  ],
  [
    'path',
    {
      d: 'M6.49997 3.5V20.5'
    }
  ],
  [
    'path',
    {
      d: 'M19.6234 12.0023C19.6234 12.6584 20.1553 13.1903 20.8115 13.1903C21.4676 13.1903 21.9995 12.6584 21.9995 12.0023C21.9995 11.3461 21.4676 10.8142 20.8115 10.8142C20.1553 10.8142 19.6234 11.3461 19.6234 12.0023ZM19.6234 12.0023L10.0254 12.0062M12.3849 8.52051L13.5067 8.56407C13.9096 8.57972 14.2637 8.83585 14.4047 9.21364L15.4367 12.004M14.194 15.4923L15.3157 15.4487C15.7186 15.4331 16.0728 15.1769 16.2138 14.7991L17.2312 12.0032'
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

TabletConnectedUsbIcon.displayName = 'TabletConnectedUsbIcon';
export default TabletConnectedUsbIcon;
