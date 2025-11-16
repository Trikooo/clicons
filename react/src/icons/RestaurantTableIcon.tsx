import React from 'react';
import config from '../config';

interface RestaurantTableIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RestaurantTableIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/restaurant-table)
 * @see {@link https://clicons.dev/icon/restaurant-table}
 */
const RestaurantTableIcon = React.forwardRef<SVGSVGElement, RestaurantTableIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 17C4.5 17 4.5 16 3 16L4.17111 11.9011C4.57006 10.5048 4.76954 9.80661 5.30421 9.4033C5.83888 9 6.56499 9 8.01721 9H15.9828C17.435 9 18.1611 9 18.6958 9.4033C19.2305 9.80661 19.4299 10.5048 19.8289 11.9011L21 16C19.5 16 19.5 17 18 17C16.5 17 16.5 16 15 16C13.5 16 13.5 17 12 17C10.5 17 10.5 16 9 16C7.5 16 7.5 17 6 17Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 9V8C8 5.79086 9.79086 4 12 4M16 9V8C16 5.79086 14.2091 4 12 4M12 4V3'
    }
  ],
  [
    'path',
    {
      d: 'M12 17V21M12 21H14M12 21H10'
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

RestaurantTableIcon.displayName = 'RestaurantTableIcon';
export default RestaurantTableIcon;
