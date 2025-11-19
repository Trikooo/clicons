import React from 'react';
import config from '../config';

interface DirectionRight2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DirectionRight2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/direction-right2)
 * @see {@link https://clicons.dev/icon/direction-right2}
 */
const DirectionRight2Icon = React.forwardRef<SVGSVGElement, DirectionRight2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.8516 5.67914C16.1736 4.85343 15.8345 4.44058 15.3711 4.22029C14.9076 4 14.378 4 13.3189 4H8C7.05719 4 6.58579 4 6.29289 4.29289C6 4.58579 6 5.05719 6 6V9C6 9.94281 6 10.4142 6.29289 10.7071C6.58579 11 7.05719 11 8 11H13.3189C14.378 11 14.9076 11 15.3711 10.7797C15.8345 10.5594 16.1736 10.1466 16.8516 9.32086L17.1202 8.99376C17.7067 8.27951 18 7.92239 18 7.5C18 7.07761 17.7067 6.72048 17.1202 6.00624L16.8516 5.67914Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 11L10 21'
    }
  ],
  [
    'path',
    {
      d: 'M10 3L10 4'
    }
  ],
  [
    'path',
    {
      d: 'M6 21H14'
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

DirectionRight2Icon.displayName = 'DirectionRight2Icon';
export default DirectionRight2Icon;
