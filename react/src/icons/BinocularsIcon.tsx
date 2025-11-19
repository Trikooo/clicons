import React from 'react';
import config from '../config';

interface BinocularsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BinocularsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/binoculars)
 * @see {@link https://clicons.dev/icon/binoculars}
 */
const BinocularsIcon = React.forwardRef<SVGSVGElement, BinocularsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.8551 15.5L18.9298 5.60666C18.6485 4.65457 17.7646 4 16.7601 4C15.475 4 14.4485 5.05662 14.502 6.32437L15 16M22 16.5C22 18.433 20.433 20 18.5 20C16.567 20 15 18.433 15 16.5C15 14.567 16.567 13 18.5 13C20.433 13 22 14.567 22 16.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 8H14M9 16H15'
    }
  ],
  [
    'path',
    {
      d: 'M2.14494 15.5L5.07067 5.60666C5.35192 4.65457 6.23586 4 7.24034 4C8.52545 4 9.55194 5.05662 9.49844 6.32437L9.00044 16M9 16.5C9 18.433 7.433 20 5.5 20C3.567 20 2 18.433 2 16.5C2 14.567 3.567 13 5.5 13C7.433 13 9 14.567 9 16.5Z'
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

BinocularsIcon.displayName = 'BinocularsIcon';
export default BinocularsIcon;
