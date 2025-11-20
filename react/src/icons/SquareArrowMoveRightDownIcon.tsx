import React from 'react';
import config from '../config';

interface SquareArrowMoveRightDownIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SquareArrowMoveRightDownIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/square-arrow-move-right-down)
 * @see {@link https://clicons.dev/icon/square-arrow-move-right-down}
 */
const SquareArrowMoveRightDownIcon = React.forwardRef<SVGSVGElement, SquareArrowMoveRightDownIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.5502 15.1046C10.7789 15.7652 9.6863 17.1002 9.23284 16.9641M9.23284 16.9641C8.70468 16.9641 7.69746 15.6547 6.95898 15.1047M9.23284 16.9641C9.38659 14.5735 8.91377 11.4925 9.9214 10.2373C11.0396 8.91616 14.2191 9.39818 17.0333 9.26573M17.0333 9.26573C17.0924 9.93243 15.7916 10.7933 15.1181 11.5512M17.0333 9.26573C17.1564 8.82288 15.7631 7.69032 15.121 7.02637'
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

SquareArrowMoveRightDownIcon.displayName = 'SquareArrowMoveRightDownIcon';
export default SquareArrowMoveRightDownIcon;
