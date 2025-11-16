import React from 'react';
import config from '../config';

interface DirectionLeft2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DirectionLeft2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/direction-left2)
 * @see {@link https://clicons.dev/icon/direction-left2}
 */
const DirectionLeft2Icon = React.forwardRef<SVGSVGElement, DirectionLeft2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.06006 5.67914C7.68595 4.85343 7.9989 4.44058 8.42672 4.22029C8.85454 4 9.34337 4 10.3211 4H16C16.9428 4 17.4142 4 17.7071 4.29289C18 4.58579 18 5.05719 18 6V9C18 9.94281 18 10.4142 17.7071 10.7071C17.4142 11 16.9428 11 16 11H10.3211C9.34337 11 8.85454 11 8.42672 10.7797C7.9989 10.5594 7.68595 10.1466 7.06006 9.32086L6.81211 8.99376C6.2707 8.27951 6 7.92239 6 7.5C6 7.07761 6.2707 6.72048 6.81211 6.00624L7.06006 5.67914Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.06006 5.67914C7.68595 4.85343 7.9989 4.44058 8.42672 4.22029C8.85454 4 9.34337 4 10.3211 4H16C16.9428 4 17.4142 4 17.7071 4.29289C18 4.58579 18 5.05719 18 6V9C18 9.94281 18 10.4142 17.7071 10.7071C17.4142 11 16.9428 11 16 11H10.3211C9.34337 11 8.85454 11 8.42672 10.7797C7.9989 10.5594 7.68595 10.1466 7.06006 9.32086L6.81211 8.99376C6.2707 8.27951 6 7.92239 6 7.5C6 7.07761 6.2707 6.72048 6.81211 6.00624L7.06006 5.67914Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 21L14 11'
    }
  ],
  [
    'path',
    {
      d: 'M14 4L14 3'
    }
  ],
  [
    'path',
    {
      d: 'M10 21H18'
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

DirectionLeft2Icon.displayName = 'DirectionLeft2Icon';
export default DirectionLeft2Icon;
