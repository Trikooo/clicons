import React from 'react';
import config from '../config';

interface RiyalRectangleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RiyalRectangleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/riyal-rectangle)
 * @see {@link https://clicons.dev/icon/riyal-rectangle}
 */
const RiyalRectangleIcon = React.forwardRef<SVGSVGElement, RiyalRectangleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.5 2.5H11.5C7.25736 2.5 5.13604 2.5 3.81802 3.81802C2.5 5.13604 2.5 7.25736 2.5 11.5V12.5C2.5 16.7426 2.5 18.864 3.81802 20.182C5.13604 21.5 7.25736 21.5 11.5 21.5H12.5C16.7426 21.5 18.864 21.5 20.182 20.182C21.5 18.864 21.5 16.7426 21.5 12.5V11.5C21.5 7.25736 21.5 5.13604 20.182 3.81802C18.864 2.5 16.7426 2.5 12.5 2.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 11V12C18 13.6569 16.6569 15 15 15'
    }
  ],
  [
    'path',
    {
      d: 'M11 8V12.5C11 13.0523 11.4477 13.5 12 13.5H13C13.5523 13.5 14 13.0523 14 12.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 8V12.5C8.5 13.0523 8.05228 13.5 7.5 13.5H6.5C5.94772 13.5 5.5 13.0523 5.5 12.5'
    }
  ],
  [
    'path',
    {
      d: 'M11 15.49V15.5'
    }
  ],
  [
    'path',
    {
      d: 'M13 15.5V15.51'
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

RiyalRectangleIcon.displayName = 'RiyalRectangleIcon';
export default RiyalRectangleIcon;
