import React from 'react';
import config from '../config';

interface UsbMemory2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UsbMemory2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/usb-memory2)
 * @see {@link https://clicons.dev/icon/usb-memory2}
 */
const UsbMemory2Icon = React.forwardRef<SVGSVGElement, UsbMemory2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 11.5C7 9.61438 7 8.67157 7.58579 8.08579C8.17157 7.5 9.11438 7.5 11 7.5H13C14.8856 7.5 15.8284 7.5 16.4142 8.08579C17 8.67157 17 9.61438 17 11.5V17C17 17.9293 17 18.394 16.9231 18.7804C16.6075 20.3671 15.3671 21.6075 13.7804 21.9231C13.394 22 12.9293 22 12 22C11.0707 22 10.606 22 10.2196 21.9231C8.63288 21.6075 7.39249 20.3671 7.07686 18.7804C7 18.394 7 17.9293 7 17V11.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 7.5V5.5C15.5 4.09554 15.5 3.39331 15.1629 2.88886C15.017 2.67048 14.8295 2.48298 14.6111 2.33706C14.1067 2 13.4045 2 12 2C10.5955 2 9.89331 2 9.38886 2.33706C9.17048 2.48298 8.98298 2.67048 8.83706 2.88886C8.5 3.39331 8.5 4.09554 8.5 5.5V7.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.5 4.5H12.5'
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

UsbMemory2Icon.displayName = 'UsbMemory2Icon';
export default UsbMemory2Icon;
