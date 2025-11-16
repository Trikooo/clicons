import React from 'react';
import config from '../config';

interface PathfinderMinusFrontIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PathfinderMinusFrontIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pathfinder-minus-front)
 * @see {@link https://clicons.dev/icon/pathfinder-minus-front}
 */
const PathfinderMinusFrontIcon = React.forwardRef<SVGSVGElement, PathfinderMinusFrontIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9 14.9998C8.83843 15 8.67184 15 8.5 15C5.68353 15 4.2753 15 3.31779 14.2364C3.11289 14.073 2.92699 13.8871 2.76359 13.6822C2 12.7247 2 11.3165 2 8.5C2 5.68353 2 4.2753 2.76359 3.31779C2.92699 3.11289 3.11289 2.92699 3.31779 2.76359C4.2753 2 5.68353 2 8.5 2C11.3165 2 12.7247 2 13.6822 2.76359C13.8871 2.92699 14.073 3.11289 14.2364 3.31779C15 4.2753 15 5.68353 15 8.5C15 8.67184 15 8.83843 14.9998 9'
    }
  ],
  [
    'path',
    {
      d: 'M9 14.9998C9.00267 12.5132 9.04641 11.2167 9.76342 10.3176C9.92682 10.1127 10.1127 9.92682 10.3176 9.76342C11.2167 9.04641 12.5132 9.00267 14.9998 9'
    }
  ],
  [
    'path',
    {
      d: 'M22 14.5V16.5M16.5 22H14.5M22 12C21.9345 11.1196 21.7782 10.5249 21.4047 10.0579C21.2673 9.88599 21.1109 9.73003 20.9385 9.59294C20.4718 9.22181 19.8778 9.06568 19 9H18.5M22 19C21.9343 19.8778 21.7782 20.4718 21.4071 20.9385C21.27 21.1109 21.114 21.2673 20.9421 21.4047C20.4751 21.7782 19.8804 21.9345 19 22M12 22C11.1222 21.9343 10.5282 21.7782 10.0615 21.4071C9.88914 21.27 9.73274 21.114 9.59527 20.9421C9.22182 20.4751 9.06547 19.8804 9 19L9 18.5'
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

PathfinderMinusFrontIcon.displayName = 'PathfinderMinusFrontIcon';
export default PathfinderMinusFrontIcon;
