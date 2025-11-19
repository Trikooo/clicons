import React from 'react';
import config from '../config';

interface BatteriesEnergyIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BatteriesEnergyIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/batteries-energy)
 * @see {@link https://clicons.dev/icon/batteries-energy}
 */
const BatteriesEnergyIcon = React.forwardRef<SVGSVGElement, BatteriesEnergyIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.5 2L10 6H14L11.5 10'
    }
  ],
  [
    'path',
    {
      d: 'M17 6C17.9428 6 18.4142 6 18.7071 6.29289C19 6.58579 19 7.05719 19 8V10.5M7 6C6.05719 6 5.58579 6 5.29289 6.29289C5 6.58579 5 7.05719 5 8L5 10.5'
    }
  ],
  [
    'path',
    {
      d: 'M20 13H18C17.0572 13 16.5858 13 16.2929 13.2929C16 13.5858 16 14.0572 16 15V20C16 20.9428 16 21.4142 16.2929 21.7071C16.5858 22 17.0572 22 18 22H20C20.9428 22 21.4142 22 21.7071 21.7071C22 21.4142 22 20.9428 22 20V15C22 14.0572 22 13.5858 21.7071 13.2929C21.4142 13 20.9428 13 20 13Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 19H22'
    }
  ],
  [
    'path',
    {
      d: 'M16 16L22 16'
    }
  ],
  [
    'path',
    {
      d: 'M6 13H4C3.05719 13 2.58579 13 2.29289 13.2929C2 13.5858 2 14.0572 2 15V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H6C6.94281 22 7.41421 22 7.70711 21.7071C8 21.4142 8 20.9428 8 20V15C8 14.0572 8 13.5858 7.70711 13.2929C7.41421 13 6.94281 13 6 13Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 19H8'
    }
  ],
  [
    'path',
    {
      d: 'M2 16L8 16'
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

BatteriesEnergyIcon.displayName = 'BatteriesEnergyIcon';
export default BatteriesEnergyIcon;
