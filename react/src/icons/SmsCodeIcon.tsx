import React from 'react';
import config from '../config';

interface SmsCodeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SmsCodeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sms-code)
 * @see {@link https://clicons.dev/icon/sms-code}
 */
const SmsCodeIcon = React.forwardRef<SVGSVGElement, SmsCodeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.6436 4C18.4955 3.61742 18.2933 3.29898 18.0175 3.02513C16.9851 2 15.3234 2 12 2C8.67661 2 7.01491 2 5.98247 3.02513C5.70666 3.29898 5.50453 3.61742 5.3564 4M5 18C5.08715 19.4194 5.32629 20.3233 5.98247 20.9749C7.01491 22 8.67661 22 12 22C15.3234 22 16.9851 22 18.0175 20.9749C18.6737 20.3233 18.9128 19.4194 19 18'
    }
  ],
  [
    'path',
    {
      d: 'M6 10L8 12M8 10L6 12'
    }
  ],
  [
    'path',
    {
      d: 'M11 10L13 12M13 10L11 12'
    }
  ],
  [
    'path',
    {
      d: 'M16 10L18 12M18 10L16 12'
    }
  ],
  [
    'path',
    {
      d: 'M17 7H7C5.11438 7 4.17157 7 3.58579 7.58579C3 8.17157 3 9.11438 3 11C3 12.8856 3 13.8284 3.58579 14.4142C4.17157 15 5.11438 15 7 15H17C18.8856 15 19.8284 15 20.4142 14.4142C21 13.8284 21 12.8856 21 11C21 9.11438 21 8.17157 20.4142 7.58579C19.8284 7 18.8856 7 17 7Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 19V19.01'
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

SmsCodeIcon.displayName = 'SmsCodeIcon';
export default SmsCodeIcon;
