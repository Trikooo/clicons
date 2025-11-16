import React from 'react';
import config from '../config';

interface ElectricHomeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ElectricHomeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/electric-home)
 * @see {@link https://clicons.dev/icon/electric-home}
 */
const ElectricHomeIcon = React.forwardRef<SVGSVGElement, ElectricHomeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 8.58505V13.5005C20 17.2717 20 19.1574 18.8284 20.3289C18.0203 21.1371 16.8723 21.3878 15 21.4655M4 8.58505V13.5005C4 17.2717 4 19.1574 5.17157 20.3289C6.23465 21.392 7.88563 21.4905 10.9998 21.4996C11.5521 21.5012 12 21.0528 12 20.5005V17.5005'
    }
  ],
  [
    'path',
    {
      d: 'M22 10.5003L17.6569 6.33582C14.9902 3.77883 13.6569 2.50034 12 2.50034C10.3431 2.50034 9.00981 3.77883 6.34315 6.33582L2 10.5003'
    }
  ],
  [
    'path',
    {
      d: 'M14.001 9.00034V11.5003M10.001 11.5003V9.00034M8.50553 12.3803C8.46629 11.9054 8.87602 11.5003 9.39552 11.5003H14.6104C15.1299 11.5003 15.5396 11.9054 15.5004 12.3803L15.3931 13.6777C15.316 14.6104 14.9786 15.5093 14.4133 16.2879L14.0628 16.7706C13.7319 17.2264 13.1741 17.5003 12.5768 17.5003H11.4291C10.8318 17.5003 10.2741 17.2264 9.94308 16.7706L9.59262 16.2879C9.02726 15.5093 8.68984 14.6104 8.61276 13.6777L8.50553 12.3803Z'
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

ElectricHomeIcon.displayName = 'ElectricHomeIcon';
export default ElectricHomeIcon;
