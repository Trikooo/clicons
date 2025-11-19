import React from 'react';
import config from '../config';

interface DragRight4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DragRight4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/drag-right4)
 * @see {@link https://clicons.dev/icon/drag-right4}
 */
const DragRight4Icon = React.forwardRef<SVGSVGElement, DragRight4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.998 13.0526V13.2264M18.998 13.2264C18.998 12.3517 18.3554 11.6051 17.4787 11.4613L16.2707 11.2632V12.1579M18.998 13.2264V15.4386C18.998 17.3832 18.998 18.3555 18.697 19.1296C18.2368 20.3132 17.2895 21.2485 16.0906 21.7029C15.3066 22 14.3218 22 12.3522 22C11.3193 22 10.8028 22 10.3222 21.8957C9.58891 21.7366 8.90715 21.4 8.33822 20.9163C7.96531 20.5992 7.65542 20.1913 7.03566 19.3755L4.30476 15.7805C3.88514 15.2281 3.89721 14.4654 4.3341 13.9262C4.90507 13.2215 5.96966 13.1633 6.61596 13.8014L7.99805 15.2557V6.5C7.99805 5.67157 8.66962 5 9.49805 5C10.3264 5 10.998 5.67157 10.998 6.5V9.4737M16.2707 12.1579C16.2707 11.1696 15.4567 10.3684 14.4525 10.3684H13.5435V11.2632M16.2707 12.1579V13.0526M10.998 9.4737H11.7253C12.7294 9.4737 13.5435 10.2749 13.5435 11.2632M10.998 9.4737V12.1579M13.5435 11.2632V12.1579'
    }
  ],
  [
    'path',
    {
      d: 'M11.436 9.5C12.6657 8.81764 13.498 7.50601 13.498 6C13.498 3.79086 11.7071 2 9.49805 2C7.28891 2 5.49805 3.79086 5.49805 6C5.49805 7.50601 6.33034 8.81764 7.56005 9.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.0193 3.99609L19.7627 5.43681C20.0178 5.70877 20.0604 5.91385 19.9346 6.2152C19.8891 6.32435 19.8117 6.41653 19.7232 6.49497L18.0193 8.00495M13.8516 5.98101H18.8361'
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

DragRight4Icon.displayName = 'DragRight4Icon';
export default DragRight4Icon;
