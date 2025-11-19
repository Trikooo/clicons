import React from 'react';
import config from '../config';

interface Hotel2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Hotel2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hotel2)
 * @see {@link https://clicons.dev/icon/hotel2}
 */
const Hotel2Icon = React.forwardRef<SVGSVGElement, Hotel2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 7V18C3 19.8856 3 20.8284 3.58579 21.4142C4.17157 22 5.11438 22 7 22H17C18.8856 22 19.8284 22 20.4142 21.4142C21 20.8284 21 19.8856 21 18V7'
    }
  ],
  [
    'path',
    {
      d: 'M17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7'
    }
  ],
  [
    'path',
    {
      d: 'M14 22.0001L14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V22.0001'
    }
  ],
  [
    'path',
    {
      d: 'M9 3H4.47214C4.16165 3 3.84734 3.08209 3.59811 3.32898C2.85619 4.06395 2.4281 5.28762 2 7H7M15 3H19.5279C19.8384 3 20.1527 3.08209 20.4019 3.32898C21.1438 4.06395 21.5719 5.28762 22 7H17'
    }
  ],
  [
    'path',
    {
      d: 'M6 11H6.5M6 14.5H6.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 11H18M17.5 14.5H18'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 8V9.5M10.5 11V9.5M13.5 8V9.5M13.5 11V9.5M10.5 9.5H13.5'
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

Hotel2Icon.displayName = 'Hotel2Icon';
export default Hotel2Icon;
