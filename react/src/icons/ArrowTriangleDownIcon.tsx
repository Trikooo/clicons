import React from 'react';
import config from '../config';

interface ArrowTriangleDownIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArrowTriangleDownIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/arrow-triangle-down)
 * @see {@link https://clicons.dev/icon/arrow-triangle-down}
 */
const ArrowTriangleDownIcon = React.forwardRef<SVGSVGElement, ArrowTriangleDownIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.3974 18.5859L9.63606 17.6194C8.40258 16.0536 7.78584 15.2707 8.06715 14.6354C8.34847 14 9.31185 14 11.2386 14H12.7613C14.6881 14 15.6514 14 15.9328 14.6354C16.2141 15.2707 15.5973 16.0536 14.3638 17.6194L13.6025 18.5858C12.8598 19.5286 12.4885 20 12 20C11.5114 20 11.1401 19.5286 10.3974 18.5859Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 14V4'
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

ArrowTriangleDownIcon.displayName = 'ArrowTriangleDownIcon';
export default ArrowTriangleDownIcon;
