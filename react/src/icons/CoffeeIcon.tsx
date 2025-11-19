import React from 'react';
import config from '../config';

interface CoffeeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CoffeeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/coffee)
 * @see {@link https://clicons.dev/icon/coffee}
 */
const CoffeeIcon = React.forwardRef<SVGSVGElement, CoffeeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5 7L6.7602 17.4048C7.06616 19.2134 7.21914 20.1177 7.76007 20.7417C9.21438 22.4194 14.7856 22.4194 16.2399 20.7417C16.7809 20.1177 16.9338 19.2134 17.2398 17.4048L19 7'
    }
  ],
  [
    'path',
    {
      d: 'M5 7L5.74278 5.2876C6.35168 3.88385 6.65613 3.18197 7.29101 2.7856C8.88049 1.79324 14.9452 1.68444 16.709 2.7856C17.3439 3.18197 17.6483 3.88385 18.2572 5.2876L19 7'
    }
  ],
  [
    'path',
    {
      d: 'M4 7H20'
    }
  ],
  [
    'ellipse',
    {
      cx: '12',
      cy: '14.5',
      rx: '2',
      ry: '2.5'
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

CoffeeIcon.displayName = 'CoffeeIcon';
export default CoffeeIcon;
