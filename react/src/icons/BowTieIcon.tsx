import React from 'react';
import config from '../config';

interface BowTieIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BowTieIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bow-tie)
 * @see {@link https://clicons.dev/icon/bow-tie}
 */
const BowTieIcon = React.forwardRef<SVGSVGElement, BowTieIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10 9.5022C9 8.50179 6.02143 5.77926 4.66065 6.01432C1.11312 6.62711 1.11312 17.3771 4.66065 17.9899C6.02143 18.2249 9 15.5025 10 14.5021'
    }
  ],
  [
    'path',
    {
      d: 'M14 9.5022C15 8.50179 17.9786 5.77926 19.3393 6.01432C22.8869 6.62711 22.8869 17.3771 19.3393 17.9899C17.9786 18.2249 15 15.5025 14 14.5022'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 12.002C9.5 9.90315 10.1219 9.00195 12 9.00195C13.749 9.00195 14.5 9.74822 14.5 12.002C14.5 14.1008 13.8781 15.002 12 15.002C10.1219 15.002 9.5 14.1008 9.5 12.002Z'
    }
  ],
  [
    'path',
    {
      d: 'M9 12.002H8'
    }
  ],
  [
    'path',
    {
      d: 'M16 12.002H15'
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

BowTieIcon.displayName = 'BowTieIcon';
export default BowTieIcon;
