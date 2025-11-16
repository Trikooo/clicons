import React from 'react';
import config from '../config';

interface StreetFoodIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name StreetFoodIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/street-food)
 * @see {@link https://clicons.dev/icon/street-food}
 */
const StreetFoodIcon = React.forwardRef<SVGSVGElement, StreetFoodIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 4.5C7 5.5 8 5.5 8 6.5C8 7.5 7 7.5 7 8.5C7 9.5 8 9.5 8 10.5C8 11.5 7 11.5 7 12.5C7 13.5 8 13.5 8 14.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 4.5C16 5.5 17 5.5 17 6.5C17 7.5 16 7.5 16 8.5C16 9.5 17 9.5 17 10.5C17 11.5 16 11.5 16 12.5C16 13.5 17 13.5 17 14.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 17V22'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 17V22'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 5C4.5 3.34315 5.84315 2 7.5 2C9.15685 2 10.5 3.34315 10.5 5V14C10.5 15.6569 9.15685 17 7.5 17C5.84315 17 4.5 15.6569 4.5 14V5Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 5C13.5 3.34315 14.8431 2 16.5 2C18.1569 2 19.5 3.34315 19.5 5V14C19.5 15.6569 18.1569 17 16.5 17C14.8431 17 13.5 15.6569 13.5 14V5Z'
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

StreetFoodIcon.displayName = 'StreetFoodIcon';
export default StreetFoodIcon;
