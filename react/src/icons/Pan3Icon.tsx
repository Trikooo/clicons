import React from 'react';
import config from '../config';

interface Pan3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Pan3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pan3)
 * @see {@link https://clicons.dev/icon/pan3}
 */
const Pan3Icon = React.forwardRef<SVGSVGElement, Pan3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 20L12 18.5M16 20V18.5M20 20V18.5'
    }
  ],
  [
    'path',
    {
      d: 'M10 20L22 20'
    }
  ],
  [
    'path',
    {
      d: 'M21.5556 11H10.4444C10.199 11 10 11.2487 10 11.5556C10 14.0102 11.5919 16 13.5556 16H18.4444C20.4081 16 22 14.0102 22 11.5556C22 11.2487 21.801 11 21.5556 11Z'
    }
  ],
  [
    'path',
    {
      d: 'M13 8C14.652 6.97775 12.348 5.02225 14 4M16 8C17.652 6.97775 15.348 5.02225 17 4M19 8C20.652 6.97775 18.348 5.02225 20 4'
    }
  ],
  [
    'path',
    {
      d: 'M10 11L8 9'
    }
  ],
  [
    'path',
    {
      d: 'M3.36797 4.36797C3.85859 3.87734 4.65404 3.87734 5.14466 4.36797L7.63203 6.85534C8.12266 7.34596 8.12266 8.14141 7.63203 8.63203C7.14141 9.12266 6.34596 9.12266 5.85534 8.63203L3.36797 6.14466C2.87734 5.65404 2.87734 4.85859 3.36797 4.36797Z'
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

Pan3Icon.displayName = 'Pan3Icon';
export default Pan3Icon;
