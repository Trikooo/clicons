import React from 'react';
import config from '../config';

interface ArrowTriangleDownRight2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArrowTriangleDownRight2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/arrow-triangle-down-right2)
 * @see {@link https://clicons.dev/icon/arrow-triangle-down-right2}
 */
const ArrowTriangleDownRight2Icon = React.forwardRef<SVGSVGElement, ArrowTriangleDownRight2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.5 13.5L6 6'
    }
  ],
  [
    'path',
    {
      d: 'M15.541 17.9172L14.2992 17.8043C12.2873 17.6214 11.2814 17.53 11.0447 16.8761C10.8079 16.2223 11.5222 15.508 12.9507 14.0795L14.0795 12.9507C15.508 11.5222 16.2223 10.8079 16.8761 11.0447C17.53 11.2814 17.6214 12.2873 17.8043 14.2992L17.9172 15.541C18.0273 16.7523 18.0824 17.358 17.7202 17.7202C17.358 18.0824 16.7523 18.0273 15.541 17.9172Z'
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

ArrowTriangleDownRight2Icon.displayName = 'ArrowTriangleDownRight2Icon';
export default ArrowTriangleDownRight2Icon;
