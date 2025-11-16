import React from 'react';
import config from '../config';

interface Stairs2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Stairs2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/stairs2)
 * @see {@link https://clicons.dev/icon/stairs2}
 */
const Stairs2Icon = React.forwardRef<SVGSVGElement, Stairs2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10 15H3.5C3.03406 15 2.80109 15 2.61732 15.0761C2.37229 15.1776 2.17761 15.3723 2.07612 15.6173C2 15.8011 2 16.0341 2 16.5C2 16.9659 2 17.1989 2.07612 17.3827C2.17761 17.6277 2.37229 17.8224 2.61732 17.9239C2.80109 18 3.03406 18 3.5 18H10V15Z'
    }
  ],
  [
    'path',
    {
      d: 'M13 12H7C6.05719 12 5.58579 12 5.29289 12.2929C5 12.5858 5 13.0572 5 14V15H13V12Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 18H18C19.8856 18 20.8284 18 21.4142 17.4142C22 16.8284 22 15.8856 22 14V8C22 7.05719 22 6.58579 21.7071 6.29289C21.4142 6 20.9428 6 20 6H19'
    }
  ],
  [
    'path',
    {
      d: 'M16 9H10C9.05719 9 8.58579 9 8.29289 9.29289C8 9.58579 8 10.0572 8 11V12H16V9Z'
    }
  ],
  [
    'path',
    {
      d: 'M19 6H13C12.0572 6 11.5858 6 11.2929 6.29289C11 6.58579 11 7.05719 11 8V9H19V6Z'
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

Stairs2Icon.displayName = 'Stairs2Icon';
export default Stairs2Icon;
