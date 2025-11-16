import React from 'react';
import config from '../config';

interface QrCodeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name QrCodeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/qr-code)
 * @see {@link https://clicons.dev/icon/qr-code}
 */
const QrCodeIcon = React.forwardRef<SVGSVGElement, QrCodeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.99396 2C6.19709 2.06395 4.56347 2.33111 3.44729 3.44729C2.33111 4.56347 2.06395 6.19709 2 8.99396M15.006 2C17.8029 2.06395 19.4365 2.33111 20.5527 3.44729C21.6689 4.56347 21.9361 6.19709 22 8.99396M15.006 22C17.8029 21.9361 19.4365 21.6689 20.5527 20.5527C21.6689 19.4365 21.9361 17.8029 22 15.006M8.99396 22C6.19709 21.9361 4.56347 21.6689 3.44729 20.5527C2.33111 19.4365 2.06395 17.8029 2 15.006'
    }
  ],
  [
    'path',
    {
      d: 'M16.9998 7H17.0088'
    }
  ],
  [
    'path',
    {
      d: 'M13 6V9C13 10.8856 13 11.8284 12.4142 12.4142C11.8284 13 10.8856 13 9 13H6'
    }
  ],
  [
    'path',
    {
      d: 'M6.29289 6.29289C6 6.58579 6 7.05719 6 8C6 8.94281 6 9.41421 6.29289 9.70711M6.29289 6.29289C6.58579 6 7.05719 6 8 6C8.94281 6 9.41421 6 9.70711 6.29289M6.29289 6.29289C6.29289 6.29289 6.29289 6.29289 6.29289 6.29289ZM6.29289 9.70711C6.58579 10 7.05719 10 8 10C8.94281 10 9.41421 10 9.70711 9.70711M6.29289 9.70711C6.29289 9.70711 6.29289 9.70711 6.29289 9.70711ZM9.70711 9.70711C10 9.41421 10 8.94281 10 8C10 7.05719 10 6.58579 9.70711 6.29289M9.70711 9.70711C9.70711 9.70711 9.70711 9.70711 9.70711 9.70711ZM9.70711 6.29289C9.70711 6.29289 9.70711 6.29289 9.70711 6.29289Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 15C17.4714 15 17.7071 15 17.8536 15.1464C18 15.2929 18 15.5286 18 16V17C18 17.4714 18 17.7071 17.8536 17.8536C17.7071 18 17.4714 18 17 18H15C14.5286 18 14.2929 18 14.1464 17.8536C14 17.7071 14 17.4714 14 17L14 16C14 15.5286 14 15.2929 14.1464 15.1464C14.2929 15 14.5286 15 15 15L17 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 18H11'
    }
  ],
  [
    'path',
    {
      d: 'M17 10L17 12'
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

QrCodeIcon.displayName = 'QrCodeIcon';
export default QrCodeIcon;
