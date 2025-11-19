import React from 'react';
import config from '../config';

interface RightTriangleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RightTriangleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/right-triangle)
 * @see {@link https://clicons.dev/icon/right-triangle}
 */
const RightTriangleIcon = React.forwardRef<SVGSVGElement, RightTriangleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 8V6.48477C4 3.77748 4 2.42383 4.79089 2.07276C5.58178 1.72168 6.52338 2.65735 8.40659 4.5287L19.2835 15.3371C21.2721 17.3131 22.2664 18.3012 21.9383 19.1506C21.6102 20 20.2343 20 17.4825 20H16M13 22C13 21.0572 13 20.5858 12.7071 20.2929C12.4142 20 11.9428 20 11 20H6.60556C5.37729 20 4.76315 20 4.38158 19.6036C4 19.2072 4 18.5692 4 17.2932V13C4 12.0572 4 11.5858 3.70711 11.2929C3.41421 11 2.94281 11 2 11'
    }
  ],
  [
    'path',
    {
      d: 'M4 15H5C6.88562 15 7.82843 15 8.41421 15.5858C9 16.1716 9 17.1144 9 19V20'
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

RightTriangleIcon.displayName = 'RightTriangleIcon';
export default RightTriangleIcon;
