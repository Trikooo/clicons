import React from 'react';
import config from '../config';

interface NaturalFoodIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name NaturalFoodIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/natural-food)
 * @see {@link https://clicons.dev/icon/natural-food}
 */
const NaturalFoodIcon = React.forwardRef<SVGSVGElement, NaturalFoodIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.05857 11.7421C6.97712 11.9781 8.73113 10.5535 8.97628 8.56018C9.22142 6.56689 6.93885 4.64584 7.76802 2C3.66477 2.59449 2.25056 5.90113 2.02862 7.70572C1.78348 9.69901 3.14003 11.5062 5.05857 11.7421Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 20C5.07536 15.3242 4.76992 11.1941 5.13275 8'
    }
  ],
  [
    'path',
    {
      d: 'M9.50786 17.6681C10.6828 20.0602 13.5206 20.7199 15.8463 19.1415C18.172 17.5631 18.5378 13.1898 22 11.6651C18.3054 7.57247 13.6971 9.04998 11.5916 10.4789C9.26587 12.0573 8.33296 15.276 9.50786 17.6681Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 22C8.37778 17.9044 11.2644 15.43 14 14'
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

NaturalFoodIcon.displayName = 'NaturalFoodIcon';
export default NaturalFoodIcon;
