import React from 'react';
import config from '../config';

interface MenuRestaurantIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MenuRestaurantIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/menu-restaurant)
 * @see {@link https://clicons.dev/icon/menu-restaurant}
 */
const MenuRestaurantIcon = React.forwardRef<SVGSVGElement, MenuRestaurantIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 17.9998V9.99976C20 8.11414 20 7.17133 19.4142 6.58554C18.8284 5.99976 17.8856 5.99976 16 5.99976H4V17.9998C4 19.8854 4 20.8282 4.58579 21.414C5.17157 21.9998 6.11438 21.9998 8 21.9998H16C17.8856 21.9998 18.8284 21.9998 19.4142 21.414C20 20.8282 20 19.8854 20 17.9998Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 10.9998C13.6569 10.9998 15 12.3429 15 13.9998M12 10.9998C10.3431 10.9998 9 12.3429 9 13.9998M12 10.9998V9.99976M15 13.9998H9M15 13.9998H16M9 13.9998H8'
    }
  ],
  [
    'path',
    {
      d: 'M8 17.9998H16'
    }
  ],
  [
    'path',
    {
      d: 'M4 5.99976L11.3846 2.90562C13.0337 2.21467 13.8582 1.8692 14.5149 2.04518C14.9408 2.1593 15.3173 2.41168 15.5859 2.76312C16 3.30508 16 4.2033 16 5.99976'
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

MenuRestaurantIcon.displayName = 'MenuRestaurantIcon';
export default MenuRestaurantIcon;
