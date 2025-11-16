import React from 'react';
import config from '../config';

interface SendToMobileIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SendToMobileIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/send-to-mobile)
 * @see {@link https://clicons.dev/icon/send-to-mobile}
 */
const SendToMobileIcon = React.forwardRef<SVGSVGElement, SendToMobileIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.5 19H10.51'
    }
  ],
  [
    'path',
    {
      d: 'M19 12.0337H12M17 9C17 9 19.0371 10.6469 19.8208 11.5533C19.9468 11.6991 20.0064 11.8627 19.9995 12.0253C19.9933 12.1711 19.9337 12.3162 19.8207 12.4468C19.0368 13.3531 17 15 17 15'
    }
  ],
  [
    'path',
    {
      d: 'M17 6C16.9855 4.29344 16.8908 3.35264 16.2702 2.73223C15.5378 2 14.3591 2 12.0016 2H9.001C6.64351 2 5.46476 2 4.73238 2.73223C4 3.46447 4 4.64298 4 7V17C4 19.357 4 20.5355 4.73238 21.2678C5.46476 22 6.64351 22 9.001 22H12.0016C14.3591 22 15.5378 22 16.2702 21.2678C16.8908 20.6473 16.9855 19.7065 17 17.9999'
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

SendToMobileIcon.displayName = 'SendToMobileIcon';
export default SendToMobileIcon;
