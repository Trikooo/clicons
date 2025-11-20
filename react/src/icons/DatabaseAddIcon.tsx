import React from 'react';
import config from '../config';

interface DatabaseAddIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DatabaseAddIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/database-add)
 * @see {@link https://clicons.dev/icon/database-add}
 */
const DatabaseAddIcon = React.forwardRef<SVGSVGElement, DatabaseAddIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 15C6.58172 15 3 13.6569 3 12'
    }
  ],
  [
    'path',
    {
      d: 'M19 5V11.5M3 5V19C3 20.6569 6.58172 22 11 22C11.1679 22 11.3346 21.9981 11.5 21.9942'
    }
  ],
  [
    'path',
    {
      d: 'M11 8C15.4183 8 19 6.65685 19 5C19 3.34315 15.4183 2 11 2C6.58172 2 3 3.34315 3 5C3 6.65685 6.58172 8 11 8Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 16.6667V18M17 18V19.3333M17 18H18.3333M17 18H15.6667M21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 15.7909 14.7909 14 17 14C19.2091 14 21 15.7909 21 18Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 10.8411C6.60158 11.0219 7.27434 11.1709 8 11.281'
    }
  ],
  [
    'path',
    {
      d: 'M6 17.8411C6.60158 18.0219 7.27434 18.1709 8 18.281'
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

DatabaseAddIcon.displayName = 'DatabaseAddIcon';
export default DatabaseAddIcon;
