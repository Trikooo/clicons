import React from 'react';
import config from '../config';

interface TelevisionTableIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TelevisionTableIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/television-table)
 * @see {@link https://clicons.dev/icon/television-table}
 */
const TelevisionTableIcon = React.forwardRef<SVGSVGElement, TelevisionTableIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 14H6C3.518 14 3 14.518 3 17V19C3 21.482 3.518 22 6 22H18C20.482 22 21 21.482 21 19V17C21 14.518 20.482 14 18 14Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 18H8'
    }
  ],
  [
    'path',
    {
      d: 'M16 18H17'
    }
  ],
  [
    'path',
    {
      d: 'M6 7V6C6 4.11438 6 3.17157 6.58579 2.58579C7.17157 2 8.11438 2 10 2H14C15.8856 2 16.8284 2 17.4142 2.58579C18 3.17157 18 4.11438 18 6V7C18 8.88562 18 9.82843 17.4142 10.4142C16.8284 11 15.8856 11 14 11H10C8.11438 11 7.17157 11 6.58579 10.4142C6 9.82843 6 8.88562 6 7Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 11L10 14M13.5 11L14 14'
    }
  ],
  [
    'path',
    {
      d: 'M12 14V22'
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

TelevisionTableIcon.displayName = 'TelevisionTableIcon';
export default TelevisionTableIcon;
