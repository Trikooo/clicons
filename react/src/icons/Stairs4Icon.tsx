import React from 'react';
import config from '../config';

interface Stairs4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Stairs4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/stairs4)
 * @see {@link https://clicons.dev/icon/stairs4}
 */
const Stairs4Icon = React.forwardRef<SVGSVGElement, Stairs4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.5 15H3.5C3.03406 15 2.80109 15 2.61732 15.0761C2.37229 15.1776 2.17761 15.3723 2.07612 15.6173C2 15.8011 2 16.0341 2 16.5C2 16.9659 2 17.1989 2.07612 17.3827C2.17761 17.6277 2.37229 17.8224 2.61732 17.9239C2.80109 18 3.03406 18 3.5 18H20.5C20.9659 18 21.1989 18 21.3827 17.9239C21.6277 17.8224 21.8224 17.6277 21.9239 17.3827C22 17.1989 22 16.9659 22 16.5C22 16.0341 22 15.8011 21.9239 15.6173C21.8224 15.3723 21.6277 15.1776 21.3827 15.0761C21.1989 15 20.9659 15 20.5 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 12H6C5.05719 12 4.58579 12 4.29289 12.2929C4 12.5858 4 13.0572 4 14V15H20V14C20 13.0572 20 12.5858 19.7071 12.2929C19.4142 12 18.9428 12 18 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 9H8C7.05719 9 6.58579 9 6.29289 9.29289C6 9.58579 6 10.0572 6 11V12H18V11C18 10.0572 18 9.58579 17.7071 9.29289C17.4142 9 16.9428 9 16 9Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 6H10C9.05719 6 8.58579 6 8.29289 6.29289C8 6.58579 8 7.05719 8 8V9H16V8C16 7.05719 16 6.58579 15.7071 6.29289C15.4142 6 14.9428 6 14 6Z'
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

Stairs4Icon.displayName = 'Stairs4Icon';
export default Stairs4Icon;
