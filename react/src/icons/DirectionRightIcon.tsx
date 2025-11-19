import React from 'react';
import config from '../config';

interface DirectionRightIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DirectionRightIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/direction-right)
 * @see {@link https://clicons.dev/icon/direction-right}
 */
const DirectionRightIcon = React.forwardRef<SVGSVGElement, DirectionRightIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.8516 5.67914C17.1736 4.85343 16.8345 4.44058 16.3711 4.22029C15.9076 4 15.378 4 14.3189 4H9V11H14.3189C15.378 11 15.9076 11 16.3711 10.7797C16.8345 10.5594 17.1736 10.1466 17.8516 9.32086L18.1202 8.99376C18.7067 8.27951 19 7.92239 19 7.5C19 7.07761 18.7067 6.72048 18.1202 6.00624L17.8516 5.67914Z'
    }
  ],
  [
    'path',
    {
      d: 'M9 3L9 21'
    }
  ],
  [
    'path',
    {
      d: 'M5 21H13'
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

DirectionRightIcon.displayName = 'DirectionRightIcon';
export default DirectionRightIcon;
