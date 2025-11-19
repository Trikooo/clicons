import React from 'react';
import config from '../config';

interface ChartDownIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChartDownIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chart-down)
 * @see {@link https://clicons.dev/icon/chart-down}
 */
const ChartDownIcon = React.forwardRef<SVGSVGElement, ChartDownIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.5 10.5V19.5C3.5 19.9659 3.5 20.1989 3.57612 20.3827C3.67761 20.6277 3.87229 20.8224 4.11732 20.9239C4.30109 21 4.53406 21 5 21C5.46594 21 5.69891 21 5.88268 20.9239C6.12771 20.8224 6.32239 20.6277 6.42388 20.3827C6.5 20.1989 6.5 19.9659 6.5 19.5V10.5C6.5 10.0341 6.5 9.80109 6.42388 9.61732C6.32239 9.37229 6.12771 9.17761 5.88268 9.07612C5.69891 9 5.46594 9 5 9C4.53406 9 4.30109 9 4.11732 9.07612C3.87229 9.17761 3.67761 9.37229 3.57612 9.61732C3.5 9.80109 3.5 10.0341 3.5 10.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 8L19.5 10.5L17 12.5'
    }
  ],
  [
    'path',
    {
      d: 'M19.0001 10.502C19.0001 10.502 11.5001 10.502 4.00012 3.00195'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 14V19.5C10.5 19.9659 10.5 20.1989 10.5761 20.3827C10.6776 20.6277 10.8723 20.8224 11.1173 20.9239C11.3011 21 11.5341 21 12 21C12.4659 21 12.6989 21 12.8827 20.9239C13.1277 20.8224 13.3224 20.6277 13.4239 20.3827C13.5 20.1989 13.5 19.9659 13.5 19.5V14C13.5 13.5341 13.5 13.3011 13.4239 13.1173C13.3224 12.8723 13.1277 12.6776 12.8827 12.5761C12.6989 12.5 12.4659 12.5 12 12.5C11.5341 12.5 11.3011 12.5 11.1173 12.5761C10.8723 12.6776 10.6776 12.8723 10.5761 13.1173C10.5 13.3011 10.5 13.5341 10.5 14Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 16.5V19.5C17.5 19.9659 17.5 20.1989 17.5761 20.3827C17.6776 20.6277 17.8723 20.8224 18.1173 20.9239C18.3011 21 18.5341 21 19 21C19.4659 21 19.6989 21 19.8827 20.9239C20.1277 20.8224 20.3224 20.6277 20.4239 20.3827C20.5 20.1989 20.5 19.9659 20.5 19.5V16.5C20.5 16.0341 20.5 15.8011 20.4239 15.6173C20.3224 15.3723 20.1277 15.1776 19.8827 15.0761C19.6989 15 19.4659 15 19 15C18.5341 15 18.3011 15 18.1173 15.0761C17.8723 15.1776 17.6776 15.3723 17.5761 15.6173C17.5 15.8011 17.5 16.0341 17.5 16.5Z'
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

ChartDownIcon.displayName = 'ChartDownIcon';
export default ChartDownIcon;
