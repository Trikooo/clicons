import React from 'react';
import config from '../config';

interface SquareCircleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SquareCircleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/square-circle)
 * @see {@link https://clicons.dev/icon/square-circle}
 */
const SquareCircleIcon = React.forwardRef<SVGSVGElement, SquareCircleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.29297 11.208C7.95663 11.1731 8.50071 11.2088 8.76097 11.82C9.06097 12.5245 9.90097 14.76 10.081 15.24C10.2885 15.7933 10.621 16.08 11.625 15.996'
    }
  ],
  [
    'path',
    {
      d: 'M11.9119 11.208C10.8319 11.148 9.89767 12.8632 9.4639 13.62C8.9239 14.46 8.0399 16.02 7.00391 15.996'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 11H14.5C14.5 11 16.5049 9.67917 16.7244 9.52908C16.9439 9.37899 17.5 9.05382 17.5 8.32833C17.5 7.60284 16.7751 6.99999 16.0073 7C15.2396 7.00001 14.5 7.53452 14.5 8.33583'
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

SquareCircleIcon.displayName = 'SquareCircleIcon';
export default SquareCircleIcon;
