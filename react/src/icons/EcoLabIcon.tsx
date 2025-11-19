import React from 'react';
import config from '../config';

interface EcoLabIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name EcoLabIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/eco-lab)
 * @see {@link https://clicons.dev/icon/eco-lab}
 */
const EcoLabIcon = React.forwardRef<SVGSVGElement, EcoLabIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 5V9'
    }
  ],
  [
    'path',
    {
      d: 'M8 2H10C11.1046 2 12 2.89543 12 4V5H10C8.89543 5 8 4.10457 8 3V2Z'
    }
  ],
  [
    'path',
    {
      d: 'M15 9V19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19V9H15Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 9H16'
    }
  ],
  [
    'path',
    {
      d: 'M16 3H14C12.8954 3 12 3.89543 12 5V6H14C15.1046 6 16 5.10457 16 4V3Z'
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

EcoLabIcon.displayName = 'EcoLabIcon';
export default EcoLabIcon;
