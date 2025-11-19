import React from 'react';
import config from '../config';

interface RightToLeftListTriangleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RightToLeftListTriangleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/right-to-left-list-triangle)
 * @see {@link https://clicons.dev/icon/right-to-left-list-triangle}
 */
const RightToLeftListTriangleIcon = React.forwardRef<SVGSVGElement, RightToLeftListTriangleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 5.5L13 5.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.6 16.8926C17.5333 17.607 17 17.9642 17 18.5C17 19.0358 17.5333 19.393 18.6 20.1074C19.6667 20.8218 20.2 21.1789 20.6 20.9111C21 20.6432 21 19.9288 21 18.5C21 17.0712 21 16.3568 20.6 16.0889C20.2 15.8211 19.6667 16.1782 18.6 16.8926Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.6 3.89263C17.5333 4.60702 17 4.96421 17 5.5C17 6.03579 17.5333 6.39298 18.6 7.10737C19.6667 7.82176 20.2 8.17895 20.6 7.91105C21 7.64316 21 6.92877 21 5.5C21 4.07123 21 3.35684 20.6 3.08895C20.2 2.82105 19.6667 3.17824 18.6 3.89263Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 12L13 12'
    }
  ],
  [
    'path',
    {
      d: 'M3 18.5L13 18.5'
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

RightToLeftListTriangleIcon.displayName = 'RightToLeftListTriangleIcon';
export default RightToLeftListTriangleIcon;
