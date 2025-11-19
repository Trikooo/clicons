import React from 'react';
import config from '../config';

interface ArrowExpandDiagonalIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArrowExpandDiagonalIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/arrow-expand-diagonal)
 * @see {@link https://clicons.dev/icon/arrow-expand-diagonal}
 */
const ArrowExpandDiagonalIcon = React.forwardRef<SVGSVGElement, ArrowExpandDiagonalIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 8L16 16'
    }
  ],
  [
    'path',
    {
      d: 'M17 3.23663C17.7506 3.22596 20.2363 2.70959 20.7634 3.23663C21.2904 3.76367 20.774 6.24941 20.7634 7'
    }
  ],
  [
    'path',
    {
      d: 'M3.23663 17C3.22596 17.7506 2.70959 20.2363 3.23663 20.7634C3.76367 21.2904 6.24941 20.774 7 20.7634'
    }
  ],
  [
    'path',
    {
      d: 'M14.9981 9.00737L20.3838 3.62158'
    }
  ],
  [
    'path',
    {
      d: 'M3.62598 20.3741L9.01172 14.9883'
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

ArrowExpandDiagonalIcon.displayName = 'ArrowExpandDiagonalIcon';
export default ArrowExpandDiagonalIcon;
