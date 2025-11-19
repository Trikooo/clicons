import React from 'react';
import config from '../config';

interface Book4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Book4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/book4)
 * @see {@link https://clicons.dev/icon/book4}
 */
const Book4Icon = React.forwardRef<SVGSVGElement, Book4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.543 2H6.5C5.11929 2 4 3.11929 4 4.5C4 4.5454 4.00121 4.59053 4.0036 4.63533M6.5 4.5H16C16.9428 4.5 17.4142 4.5 17.7071 4.79289C18 5.08579 18 5.55719 18 6.5M4.0036 4.63533C4.0739 5.95312 5.16469 7 6.5 7H16C17.8856 7 18.8284 7 19.4142 7.58579C20 8.17157 20 9.11438 20 11L20 18C20 19.8856 20 20.8284 19.4142 21.4142C18.8284 22 17.8856 22 16 22H10.0036C7.17517 22 5.76096 22 4.88228 21.1213C4.0036 20.2426 4.0036 18.8284 4.0036 16V4.63533ZM4.0036 4.63533V4.50127'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 12.5H8.5M12.5 16.5H8.5'
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

Book4Icon.displayName = 'Book4Icon';
export default Book4Icon;
