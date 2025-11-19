import React from 'react';
import config from '../config';

interface DiamondIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DiamondIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/diamond)
 * @see {@link https://clicons.dev/icon/diamond}
 */
const DiamondIcon = React.forwardRef<SVGSVGElement, DiamondIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.959 7.03438L8.04435 5.72804C10.1093 3.24268 11.1417 2 12.5 2C13.8583 2 14.8907 3.24268 16.9556 5.72803L18.041 7.03437C20.0137 9.4087 21 10.5959 21 12C21 13.4041 20.0137 14.5913 18.041 16.9656L16.9557 18.272C14.8907 20.7573 13.8583 22 12.5 22C11.1417 22 10.1093 20.7573 8.04435 18.272L6.95901 16.9656C4.98634 14.5913 4 13.4041 4 12C4 10.5959 4.98633 9.4087 6.959 7.03438Z'
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

DiamondIcon.displayName = 'DiamondIcon';
export default DiamondIcon;
