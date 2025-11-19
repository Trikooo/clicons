import React from 'react';
import config from '../config';

interface Bread3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Bread3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bread3)
 * @see {@link https://clicons.dev/icon/bread3}
 */
const Bread3Icon = React.forwardRef<SVGSVGElement, Bread3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 11C15 8.23858 13.1011 6 10.7588 6C9.1261 6 7.5 7 7 8'
    }
  ],
  [
    'path',
    {
      d: 'M19 11C19 8.79086 17.4818 7 15.609 7C15.0267 7 14.4787 7.1731 14 7.47806'
    }
  ],
  [
    'path',
    {
      d: 'M22 12C22 15.3137 17.5228 18 12 18C6.47715 18 2 15.3137 2 12'
    }
  ],
  [
    'path',
    {
      d: 'M8.88973 11C8.5012 9.27477 7.13086 8 5.5 8C3.567 8 2 9.79086 2 12C2 13.6569 6.47715 15 12 15C17.5228 15 22 13.6569 22 12C22 11.0054 20.4499 9.02165 18.5314 9.00018'
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

Bread3Icon.displayName = 'Bread3Icon';
export default Bread3Icon;
