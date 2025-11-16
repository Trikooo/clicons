import React from 'react';
import config from '../config';

interface Mosque5IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Mosque5Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mosque5)
 * @see {@link https://clicons.dev/icon/mosque5}
 */
const Mosque5Icon = React.forwardRef<SVGSVGElement, Mosque5IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.5125 6C15.9698 4 18.3389 3 19 2C19.6611 3 22.0302 4 20.4875 6H17.5125Z'
    }
  ],
  [
    'path',
    {
      d: 'M13 11.5V14H7L7 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.02497 11.5C3.93968 7.5 8.67782 5.5 9.99996 3.5C11.3222 5.5 16.0603 7.5 12.975 11.5H9.99998H7.02497Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 22H3V17C3 15.5858 3 14.8787 3.43934 14.4393C3.87868 14 4.58579 14 6 14H14C15.4142 14 16.1213 14 16.5607 14.4393C17 14.8787 17 15.5858 17 17V22Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 22V21C8 20.0218 8 19.5326 8.14218 19.0874C8.23639 18.7924 8.37572 18.5137 8.55523 18.2613C8.8261 17.8804 9.2174 17.5869 10 17C10.7826 17.5869 11.1739 17.8804 11.4448 18.2613C11.6243 18.5137 11.7636 18.7924 11.8578 19.0874C12 19.5326 12 20.0218 12 21V22'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 6L17 15M17 22H21L20.5 6'
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

Mosque5Icon.displayName = 'Mosque5Icon';
export default Mosque5Icon;
