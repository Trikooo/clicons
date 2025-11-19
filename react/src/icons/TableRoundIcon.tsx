import React from 'react';
import config from '../config';

interface TableRoundIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TableRoundIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/table-round)
 * @see {@link https://clicons.dev/icon/table-round}
 */
const TableRoundIcon = React.forwardRef<SVGSVGElement, TableRoundIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'ellipse',
    {
      cx: '12',
      cy: '6.5',
      rx: '10',
      ry: '3'
    }
  ],
  [
    'path',
    {
      d: 'M12 20.5C12.8284 20.5 13.5898 20.2551 14.1904 19.8455C14.4774 19.6498 14.5909 19.242 14.4189 18.9153C14.0734 18.2595 13.3308 17.5 12 17.5C10.6692 17.5 9.92656 18.2595 9.58115 18.9153C9.40905 19.242 9.52257 19.6498 9.8096 19.8455C10.4102 20.2551 11.1716 20.5 12 20.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 17.5V9.5'
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

TableRoundIcon.displayName = 'TableRoundIcon';
export default TableRoundIcon;
