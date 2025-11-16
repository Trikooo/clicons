import React from 'react';
import config from '../config';

interface Cylinder4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Cylinder4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cylinder4)
 * @see {@link https://clicons.dev/icon/cylinder4}
 */
const Cylinder4Icon = React.forwardRef<SVGSVGElement, Cylinder4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 19L9.87868 21.1213M9.87868 21.1213C10.4216 21.6642 11.1716 22 12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 19.8284 9.33579 20.5784 9.87868 21.1213Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 16H14C16.8089 16 18.2134 16 19.2223 15.3259C19.659 15.034 20.034 14.659 20.3259 14.2223C21 13.2134 21 11.8089 21 9C21 6.19108 21 4.78661 20.3259 3.77772C20.034 3.34096 19.659 2.96596 19.2223 2.67412C18.2134 2 16.8089 2 14 2H10C7.19108 2 5.78661 2 4.77772 2.67412C4.34096 2.96596 3.96596 3.34096 3.67412 3.77772C3 4.78661 3 6.19108 3 9C3 11.8089 3 13.2134 3.67412 14.2223C3.96596 14.659 4.34096 15.034 4.77772 15.3259C5.78661 16 7.19108 16 10 16Z'
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

Cylinder4Icon.displayName = 'Cylinder4Icon';
export default Cylinder4Icon;
