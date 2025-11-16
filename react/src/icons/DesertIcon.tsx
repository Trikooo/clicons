import React from 'react';
import config from '../config';

interface DesertIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DesertIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/desert)
 * @see {@link https://clicons.dev/icon/desert}
 */
const DesertIcon = React.forwardRef<SVGSVGElement, DesertIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 7L8 21'
    }
  ],
  [
    'path',
    {
      d: 'M12 18L12 21'
    }
  ],
  [
    'path',
    {
      d: 'M3 21H15'
    }
  ],
  [
    'path',
    {
      d: 'M4 13V13.9596C4 14.8052 4 15.228 4.20108 15.5762C4.40216 15.9243 4.76839 16.1356 5.50083 16.5582L8 18'
    }
  ],
  [
    'path',
    {
      d: 'M12 9V11.9596C12 12.8052 12 13.228 11.7989 13.5762C11.5978 13.9243 11.2316 14.1356 10.4992 14.5582L8 16'
    }
  ],
  [
    'circle',
    {
      cx: '18',
      cy: '6',
      r: '3'
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

DesertIcon.displayName = 'DesertIcon';
export default DesertIcon;
