import React from 'react';
import config from '../config';

interface ArrowTriangleRightToLineIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArrowTriangleRightToLineIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/arrow-triangle-right-to-line)
 * @see {@link https://clicons.dev/icon/arrow-triangle-right-to-line}
 */
const ArrowTriangleRightToLineIcon = React.forwardRef<SVGSVGElement, ArrowTriangleRightToLineIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.9999 6L19.9998 18.0007'
    }
  ],
  [
    'path',
    {
      d: 'M11.5028 12.0113V12.3819C11.4622 15.353 11.5972 16.3852 12.8477 15.906L13.1558 15.7241L13.4044 15.5513L13.9396 15.1383L14.94 14.269L15.9629 13.4052L16.4629 12.9521L16.6855 12.7255L16.9477 12.3465L17.0015 12.0102L16.9477 11.6762L16.6855 11.2971L16.4629 11.0706L15.9629 10.6175L14.94 9.75372L13.9396 8.88439L13.4044 8.4714L13.1558 8.29862L12.8477 8.1167C11.5972 7.63748 11.4622 8.66971 11.5028 11.6408V12.0113ZM11.5028 12.0113H3.99983'
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

ArrowTriangleRightToLineIcon.displayName = 'ArrowTriangleRightToLineIcon';
export default ArrowTriangleRightToLineIcon;
