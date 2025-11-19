import React from 'react';
import config from '../config';

interface ReplitIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ReplitIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/replit)
 * @see {@link https://clicons.dev/icon/replit}
 */
const ReplitIcon = React.forwardRef<SVGSVGElement, ReplitIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 3.5V8.5H5C4.44772 8.5 4 8.05228 4 7.5V3.5C4 2.94772 4.44772 2.5 5 2.5H11C11.5523 2.5 12 2.94772 12 3.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 15.5V20.5C12 21.0523 11.5523 21.5 11 21.5H5C4.44772 21.5 4 21.0523 4 20.5V16.5C4 15.9477 4.44772 15.5 5 15.5H12Z'
    }
  ],
  [
    'path',
    {
      d: 'M20 9.5V14.5C20 15.0523 19.5523 15.5 19 15.5H12V8.5H19C19.5523 8.5 20 8.94772 20 9.5Z'
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

ReplitIcon.displayName = 'ReplitIcon';
export default ReplitIcon;
