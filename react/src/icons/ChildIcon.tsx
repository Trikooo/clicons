import React from 'react';
import config from '../config';

interface ChildIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChildIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/child)
 * @see {@link https://clicons.dev/icon/child}
 */
const ChildIcon = React.forwardRef<SVGSVGElement, ChildIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.5 11C2.67157 11 2 10.3284 2 9.5C2 8.67157 2.67157 8 3.5 8H4.25203C5.14012 4.54955 8.27232 2 12 2C15.7277 2 18.8599 4.54955 19.748 8H20C20.8284 8 21.5 8.67157 21.5 9.5C21.5 10.3284 20.8284 11 20 11H19.9381C19.446 14.9463 16.0796 18 12 18C7.92038 18 4.55399 14.9463 4.06189 11H3.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 8H6C9.31371 8 12 5.31371 12 2'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 8H18C14.6863 8 12 5.31371 12 2'
    }
  ],
  [
    'path',
    {
      d: 'M12 15C12.5523 15 13 14.5523 13 14H11C11 14.5523 11.4477 15 12 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 22C18 20.208 17.2144 18.5994 15.9687 17.5M6 22C6 20.208 6.78563 18.5994 8.03126 17.5'
    }
  ],
  [
    'path',
    {
      d: 'M9 10V10.01'
    }
  ],
  [
    'path',
    {
      d: 'M15 10V10.01'
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

ChildIcon.displayName = 'ChildIcon';
export default ChildIcon;
