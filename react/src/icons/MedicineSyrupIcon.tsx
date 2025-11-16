import React from 'react';
import config from '../config';

interface MedicineSyrupIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MedicineSyrupIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/medicine-syrup)
 * @see {@link https://clicons.dev/icon/medicine-syrup}
 */
const MedicineSyrupIcon = React.forwardRef<SVGSVGElement, MedicineSyrupIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.5 15.75C9.5 17.4069 10.75 18 12 18C13.25 18 14.5 17.4069 14.5 15.75C14.5 14.0931 12 12 12 12C12 12 9.5 14.0931 9.5 15.75Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.06845 2H14.9316C15.8529 2 16.3135 2 16.5997 2.29289C17.1334 2.83907 17.1334 5.16093 16.5997 5.70711C16.3135 6 15.8529 6 14.9316 6H9.06845C8.14715 6 7.6865 6 7.40029 5.70711C6.86657 5.16093 6.86657 2.83907 7.40029 2.29289C7.6865 2 8.14715 2 9.06845 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 6C8.16493 6.32986 8.24741 6.49481 8.30606 6.6557C8.61211 7.49515 8.52805 8.42732 8.07678 9.19848C7.99029 9.34628 7.87965 9.49381 7.65836 9.78885L7.25493 10.3268C6.80486 10.9269 6.57983 11.2269 6.41674 11.5556C6.252 11.8877 6.13421 12.241 6.06677 12.6055C6 12.9664 6 13.3414 6 14.0915V16C6 18.8284 6 20.2426 6.87868 21.1213C7.75736 22 9.17157 22 12 22C14.8284 22 16.2426 22 17.1213 21.1213C18 20.2426 18 18.8284 18 16V14.0915C18 13.3414 18 12.9664 17.9332 12.6055C17.8658 12.241 17.748 11.8877 17.5833 11.5556C17.4202 11.2269 17.1951 10.9269 16.7451 10.3268L16.3416 9.78885C16.1204 9.49381 16.0097 9.34628 15.9232 9.19848C15.4719 8.42732 15.3879 7.49515 15.6939 6.6557C15.7526 6.49481 15.8351 6.32987 16 6'
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

MedicineSyrupIcon.displayName = 'MedicineSyrupIcon';
export default MedicineSyrupIcon;
