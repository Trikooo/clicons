import React from 'react';
import config from '../config';

interface Cabinet4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Cabinet4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cabinet4)
 * @see {@link https://clicons.dev/icon/cabinet4}
 */
const Cabinet4Icon = React.forwardRef<SVGSVGElement, Cabinet4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 8H6C4.11438 8 3.17157 8 2.58579 8.53253C2 9.06507 2 9.92217 2 11.6364V14.3636C2 16.0778 2 16.9349 2.58579 17.4675C3.17157 18 4.11438 18 6 18H18C19.8856 18 20.8284 18 21.4142 17.4675C22 16.9349 22 16.0778 22 14.3636V11.6364C22 9.92217 22 9.06507 21.4142 8.53253C20.8284 8 19.8856 8 18 8Z'
    }
  ],
  [
    'path',
    {
      d: 'M5 18L4 22M19 18L20 22'
    }
  ],
  [
    'path',
    {
      d: 'M14 18V8'
    }
  ],
  [
    'path',
    {
      d: 'M7 11.5H9M7 14.5H9'
    }
  ],
  [
    'path',
    {
      d: 'M5.43934 7.56066C5 7.12132 5 6.41421 5 5C5 3.58579 5 2.87868 5.43934 2.43934C5.87868 2 6.58579 2 8 2C9.41421 2 10.1213 2 10.5607 2.43934C11 2.87868 11 3.58579 11 5C11 6.41421 11 7.12132 10.5607 7.56066C10.1213 8 9.41421 8 8 8C6.58579 8 5.87868 8 5.43934 7.56066Z'
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

Cabinet4Icon.displayName = 'Cabinet4Icon';
export default Cabinet4Icon;
