import React from 'react';
import config from '../config';

interface AmieIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AmieIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/amie)
 * @see {@link https://clicons.dev/icon/amie}
 */
const AmieIcon = React.forwardRef<SVGSVGElement, AmieIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 8.5C3 9.82963 3.47182 11.0491 4.25716 12C3.47182 12.9509 3 14.1704 3 15.5C3 18.5376 5.46243 21 8.5 21C9.82963 21 11.0491 20.5282 12 19.7428C12.9509 20.5282 14.1704 21 15.5 21C18.5376 21 21 18.5376 21 15.5C21 14.1704 20.5282 12.9509 19.7428 12C20.5282 11.0491 21 9.82963 21 8.5C21 5.46243 18.5376 3 15.5 3C14.1704 3 12.9509 3.47182 12 4.25716C11.0491 3.47182 9.82963 3 8.5 3C5.46243 3 3 5.46243 3 8.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 9.5C10.5 8.67157 11.1716 8 12 8C12.8284 8 13.5 8.67157 13.5 9.5V14.5C13.5 15.3284 12.8284 16 12 16C11.1716 16 10.5 15.3284 10.5 14.5V9.5Z'
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

AmieIcon.displayName = 'AmieIcon';
export default AmieIcon;
