import React from 'react';
import config from '../config';

interface ArrowTriangleDownToLineIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArrowTriangleDownToLineIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/arrow-triangle-down-to-line)
 * @see {@link https://clicons.dev/icon/arrow-triangle-down-to-line}
 */
const ArrowTriangleDownToLineIcon = React.forwardRef<SVGSVGElement, ArrowTriangleDownToLineIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 19.9985H17.9997'
    }
  ],
  [
    'path',
    {
      d: 'M11.996 4.00195V11.53M14.5055 14.5899L15.9502 12.6384C16.2907 12.1784 15.9594 11.53 15.3839 11.53H8.67439C8.10419 11.53 7.77156 12.1679 8.10132 12.6291L9.50342 14.5899L11.444 16.9564C11.7237 17.2976 12.2484 17.2996 12.5307 16.9606L14.5055 14.5899Z'
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

ArrowTriangleDownToLineIcon.displayName = 'ArrowTriangleDownToLineIcon';
export default ArrowTriangleDownToLineIcon;
