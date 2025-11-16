import React from 'react';
import config from '../config';

interface Cupcake3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Cupcake3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cupcake3)
 * @see {@link https://clicons.dev/icon/cupcake3}
 */
const Cupcake3Icon = React.forwardRef<SVGSVGElement, Cupcake3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4ZM12 4C12 3.5 12.4 2.4 14 2'
    }
  ],
  [
    'path',
    {
      d: 'M10 6C7.79149 6 5.9019 8.49273 7.24928 10.0811C5.6231 9.73961 4 10.9457 4 12.5341C4 15.4859 8.66165 15.9075 9.27999 13.0367C9.84382 15.6544 14.1562 15.6544 14.72 13.0367C15.3384 15.9075 20 15.4859 20 12.5341C20 10.9457 18.3769 9.73961 16.7507 10.0811C18.0981 8.49273 16.2085 6 14 6'
    }
  ],
  [
    'path',
    {
      d: 'M6 15L7.17111 19.0989C7.57006 20.4952 7.76954 21.1934 8.30421 21.5967C8.83888 22 9.56499 22 11.0172 22H12.9828C14.435 22 15.1611 22 15.6958 21.5967C16.2305 21.1934 16.4299 20.4952 16.8289 19.0989L18 15'
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

Cupcake3Icon.displayName = 'Cupcake3Icon';
export default Cupcake3Icon;
