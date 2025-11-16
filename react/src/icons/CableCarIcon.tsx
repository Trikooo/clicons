import React from 'react';
import config from '../config';

interface CableCarIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CableCarIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cable-car)
 * @see {@link https://clicons.dev/icon/cable-car}
 */
const CableCarIcon = React.forwardRef<SVGSVGElement, CableCarIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.41268 11.6239C4.14236 12.8529 4 14.1289 4 15.4375C4 16.3375 4.06733 17.2219 4.1973 18.0863C4.44397 19.7269 4.56731 20.5471 5.41113 21.2736C6.25496 22 7.27731 22 9.322 22H14.678C16.7227 22 17.745 22 18.5889 21.2736C19.4327 20.5471 19.556 19.7269 19.8027 18.0863C19.9327 17.2219 20 16.3375 20 15.4375C20 14.1289 19.8576 12.8529 19.5873 11.6239C19.2501 10.0905 19.0814 9.32383 18.2581 8.66191C17.4348 8 16.4673 8 14.5325 8H9.46753C7.53265 8 6.56522 8 5.7419 8.66191C4.91858 9.32383 4.74994 10.0905 4.41268 11.6239Z'
    }
  ],
  [
    'path',
    {
      d: 'M4 2H14M20 2H14M14 2L12 5.5M9 5.5H15'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 16H19.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 9V16'
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

CableCarIcon.displayName = 'CableCarIcon';
export default CableCarIcon;
