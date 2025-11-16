import React from 'react';
import config from '../config';

interface DragIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DragIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/drag)
 * @see {@link https://clicons.dev/icon/drag}
 */
const DragIcon = React.forwardRef<SVGSVGElement, DragIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.964 4H16.9719M20.964 4C20.964 4.56018 19.4727 5.60678 18.9679 6M20.964 4C20.964 3.43982 19.4727 2.39322 18.9679 2'
    }
  ],
  [
    'path',
    {
      d: 'M2.99921 4H6.99136M2.99921 4C2.99921 3.43982 4.49058 2.39322 4.99529 2M2.99921 4C2.99921 4.56018 4.49058 5.60678 4.99529 6'
    }
  ],
  [
    'path',
    {
      d: 'M9.81505 22.0006V21.0595C9.81505 20.4116 9.60526 19.781 9.21707 19.2622L5.39435 14.1534C5.07668 13.7288 4.83978 13.2141 4.98565 12.7043C5.34585 11.4454 6.76792 10.3261 8.35901 12.2974L9.95917 14.0049V3.59381C10.0573 1.76459 13.1325 1.18685 13.4504 3.59381V9.52698C14.933 9.33608 21.9162 10.378 20.9003 14.7917C20.8517 15.0026 20.8032 15.2167 20.7557 15.4279C20.5493 16.346 19.9407 17.98 19.2696 18.9355C18.5705 19.9309 18.897 21.5353 18.8172 22.0019'
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

DragIcon.displayName = 'DragIcon';
export default DragIcon;
