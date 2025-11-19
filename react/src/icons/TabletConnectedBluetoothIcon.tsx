import React from 'react';
import config from '../config';

interface TabletConnectedBluetoothIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TabletConnectedBluetoothIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tablet-connected-bluetooth)
 * @see {@link https://clicons.dev/icon/tablet-connected-bluetooth}
 */
const TabletConnectedBluetoothIcon = React.forwardRef<SVGSVGElement, TabletConnectedBluetoothIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.3559 12.0514L20.1247 13.9617C20.7073 14.3635 20.9986 14.5645 21 14.8311C21.0014 15.0977 20.7123 15.3009 20.1341 15.7072L19.5576 16.1123C18.6051 16.7815 18.1289 17.1162 17.7424 16.9635C17.3559 16.8109 17.3559 16.2882 17.3559 15.2427V12.0514ZM17.3559 12.0514L17.2813 12M17.3559 12.0514V11.9486M17.2813 12L14 9.73627M17.2813 12L17.3559 11.9486M17.2813 12L14 14.2637M17.3559 11.9486L20.1247 10.0383C20.7073 9.63646 20.9986 9.43551 21 9.16889C21.0014 8.90227 20.7123 8.69912 20.1341 8.29281L19.5576 7.88774C18.6051 7.21847 18.1289 6.88383 17.7424 7.03647C17.3559 7.18911 17.3559 7.71182 17.3559 8.75726V11.9486Z'
    }
  ],
  [
    'path',
    {
      d: 'M21 19.682C19.6595 21 17.5021 21 13.1873 21H11.1532C6.83834 21 4.68091 21 3.34046 19.682C2 18.364 2 16.2426 2 12C2 7.75736 2 5.63604 3.34046 4.31802C4.68091 3 6.83834 3 11.1532 3H13.1873C17.5021 3 19.6595 3 21 4.31802'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 3.5V20.5'
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

TabletConnectedBluetoothIcon.displayName = 'TabletConnectedBluetoothIcon';
export default TabletConnectedBluetoothIcon;
