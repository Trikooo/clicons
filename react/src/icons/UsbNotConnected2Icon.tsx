import React from 'react';
import config from '../config';

interface UsbNotConnected2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name UsbNotConnected2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/usb-not-connected2)
 * @see {@link https://clicons.dev/icon/usb-not-connected2}
 */
const UsbNotConnected2Icon = React.forwardRef<SVGSVGElement, UsbNotConnected2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.014 21.4643C12.6411 21.6793 12.2298 21.8363 11.7922 21.9231C11.4052 22 10.9397 22 10.0088 22C9.07782 22 8.61235 22 8.22528 21.9231C6.63574 21.6075 5.39317 20.3671 5.07699 18.7804C5 18.394 5 17.9293 5 17V11.5C5 9.61438 5 8.67157 5.58681 8.08579C6.17362 7.5 7.11808 7.5 9.007 7.5H11.0105C12.8994 7.5 13.8439 7.5 14.4307 8.08579C14.8355 8.48987 14.9611 9.06385 15 10'
    }
  ],
  [
    'path',
    {
      d: 'M19 12.5L13 18.5M19 18.5L13 12.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 7.5V5.5C13.5 4.09554 13.5 3.39331 13.1629 2.88886C13.017 2.67048 12.8295 2.48298 12.6111 2.33706C12.1067 2 11.4045 2 10 2C8.59554 2 7.89331 2 7.38886 2.33706C7.17048 2.48298 6.98298 2.67048 6.83706 2.88886C6.5 3.39331 6.5 4.09554 6.5 5.5V7.5'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 4.5H10.5'
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

UsbNotConnected2Icon.displayName = 'UsbNotConnected2Icon';
export default UsbNotConnected2Icon;
