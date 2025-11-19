import React from 'react';
import config from '../config';

interface ValidationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ValidationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/validation)
 * @see {@link https://clicons.dev/icon/validation}
 */
const ValidationIcon = React.forwardRef<SVGSVGElement, ValidationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.6034 8.58326L18.8152 7.77534C19.4562 7.34802 20.234 7.14124 20.8709 6.70794C21.003 6.61809 21.1286 6.5146 21.2457 6.39747C22.2514 5.39149 22.2514 3.76047 21.2457 2.75449C20.2399 1.7485 18.6092 1.7485 17.6034 2.75449C17.4863 2.87161 17.3828 2.99721 17.293 3.12931C16.8598 3.76635 16.653 4.54433 16.2258 5.1854L15.418 6.39747M17.6034 8.58326L15.418 6.39747M17.6034 8.58326L19.3012 11.2518C19.7989 12.034 19.6866 13.057 19.0311 13.7126C18.6449 14.0989 18.0188 14.0989 17.6326 13.7126L10.2896 6.36828C9.90345 5.98201 9.90345 5.35574 10.2896 4.96947C10.9451 4.31385 11.968 4.20155 12.75 4.69933L15.418 6.39747'
    }
  ],
  [
    'path',
    {
      d: 'M16 16.8943C15.1213 19.8469 12.3861 22 9.148 22C5.20027 22 2 18.7997 2 14.852C2 11.6139 4.15309 8.87874 7.10572 8'
    }
  ],
  [
    'path',
    {
      d: 'M7 15.6667C7 15.6667 7.625 15.6667 8.25 17C8.25 17 10.2353 13.6667 12 13'
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

ValidationIcon.displayName = 'ValidationIcon';
export default ValidationIcon;
