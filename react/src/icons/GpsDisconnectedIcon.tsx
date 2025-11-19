import React from 'react';
import config from '../config';

interface GpsDisconnectedIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GpsDisconnectedIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/gps-disconnected)
 * @see {@link https://clicons.dev/icon/gps-disconnected}
 */
const GpsDisconnectedIcon = React.forwardRef<SVGSVGElement, GpsDisconnectedIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.9999 7.99997L18.9999 4.99997M18.9999 4.99997L15.9999 1.99997M18.9999 4.99997L15.9999 7.99997M18.9999 4.99997L21.9999 1.99997'
    }
  ],
  [
    'path',
    {
      d: 'M8.99988 10.0294C10.3725 8.65685 12.5979 8.65685 13.9704 10.0294C15.343 11.402 15.343 13.6274 13.9704 15'
    }
  ],
  [
    'path',
    {
      d: 'M4.85277 19.1471C8.04856 22.3429 12.9126 22.8538 16.6417 20.6797C17.5284 20.1627 17.9717 19.9043 17.9988 19.3782C18.0259 18.8522 17.5276 18.4882 16.5308 17.7603C14.6828 16.4107 12.8635 14.7603 11.0515 12.9484C9.23955 11.1364 7.58915 9.31705 6.23957 7.46904C5.51167 6.47231 5.14772 5.97395 4.62166 6.00105C4.0956 6.02815 3.83713 6.47149 3.32019 7.35818C1.14611 11.0873 1.65697 15.9513 4.85277 19.1471Z'
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

GpsDisconnectedIcon.displayName = 'GpsDisconnectedIcon';
export default GpsDisconnectedIcon;
