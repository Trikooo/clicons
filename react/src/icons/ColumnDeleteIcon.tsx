import React from 'react';
import config from '../config';

interface ColumnDeleteIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ColumnDeleteIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/column-delete)
 * @see {@link https://clicons.dev/icon/column-delete}
 */
const ColumnDeleteIcon = React.forwardRef<SVGSVGElement, ColumnDeleteIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.5 3C6.90446 3 7.60669 3 8.11114 3.37919C8.32952 3.54335 8.51702 3.75429 8.66294 3.99997C9 4.56747 9 5.35748 9 6.9375L9 17.0625C9 18.6425 9 19.4325 8.66294 20C8.51702 20.2457 8.32952 20.4566 8.11114 20.6208C7.60669 21 6.90446 21 5.5 21C4.09554 21 3.39331 21 2.88886 20.6208C2.67048 20.4566 2.48298 20.2457 2.33706 20C2 19.4325 2 18.6425 2 17.0625L2 6.9375C2 5.35748 2 4.56747 2.33706 3.99997C2.48298 3.75429 2.67048 3.54335 2.88886 3.37919C3.39331 3 4.09554 3 5.5 3Z'
    }
  ],
  [
    'path',
    {
      d: 'M20 11.9375L20 17.0625C20 18.6425 20 19.4325 19.6629 20C19.517 20.2457 19.3295 20.4566 19.1111 20.6208C18.6067 21 17.9045 21 16.5 21C15.0955 21 14.3933 21 13.8889 20.6208C13.6705 20.4566 13.483 20.2457 13.3371 20C13 19.4325 13 18.6425 13 17.0625L13 6.9375C13 5.35748 13 4.56747 13.3371 3.99997'
    }
  ],
  [
    'path',
    {
      d: 'M22 8.99936L16 3M22 3.00064L16 9'
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

ColumnDeleteIcon.displayName = 'ColumnDeleteIcon';
export default ColumnDeleteIcon;
