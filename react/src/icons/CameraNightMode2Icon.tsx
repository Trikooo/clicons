import React from 'react';
import config from '../config';

interface CameraNightMode2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CameraNightMode2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/camera-night-mode2)
 * @see {@link https://clicons.dev/icon/camera-night-mode2}
 */
const CameraNightMode2Icon = React.forwardRef<SVGSVGElement, CameraNightMode2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 14.5V8.27201C22 7.01721 20.9828 6 19.728 6C19.2679 6 18.8327 5.79084 18.5452 5.43154L18 4.75C17.6086 4.26074 17.4129 4.01611 17.1647 3.84705C16.9991 3.73428 16.8176 3.64702 16.6261 3.58819C16.3391 3.5 16.0258 3.5 15.3992 3.5H13.6008C12.9742 3.5 12.6609 3.5 12.3739 3.58819C12.1824 3.64702 12.0009 3.73428 11.8353 3.84705C11.5871 4.01611 11.3914 4.26074 11 4.75C10.6086 5.23926 10.4129 5.48389 10.1647 5.65295C9.99914 5.76572 9.81759 5.85298 9.62612 5.91181C9.33906 6 9.02578 6 8.39922 6H8C5.17157 6 3.75736 6 2.87868 6.87868C2 7.75736 2 9.17157 2 12V14.5C2 17.3284 2 18.7426 2.87868 19.6213C3.75736 20.5 5.17157 20.5 8 20.5H16C18.8284 20.5 20.2426 20.5 21.1213 19.6213C22 18.7426 22 17.3284 22 14.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M5 9H7'
    }
  ],
  [
    'path',
    {
      d: 'M12.8311 11.0066C12.8311 10.4694 12.9478 9.95964 13.1556 9.5C11.8848 10.0746 10.9999 11.3523 10.9999 12.8377C10.9999 14.8603 12.6396 16.5 14.6622 16.5C16.1476 16.5 17.4254 15.6152 17.9999 14.3443C17.5403 14.5521 17.0306 14.6689 16.4934 14.6689C14.4707 14.6689 12.8311 13.0292 12.8311 11.0066Z'
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

CameraNightMode2Icon.displayName = 'CameraNightMode2Icon';
export default CameraNightMode2Icon;
