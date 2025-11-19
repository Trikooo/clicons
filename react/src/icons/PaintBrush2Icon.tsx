import React from 'react';
import config from '../config';

interface PaintBrush2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PaintBrush2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/paint-brush2)
 * @see {@link https://clicons.dev/icon/paint-brush2}
 */
const PaintBrush2Icon = React.forwardRef<SVGSVGElement, PaintBrush2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 5C4 4.25579 4 3.88369 4.08912 3.58019C4.30005 2.86183 4.86183 2.30005 5.58019 2.08912C5.88369 2 6.25579 2 7 2H14C14.7442 2 15.1163 2 15.4198 2.08912C16.1382 2.30005 16.7 2.86183 16.9109 3.58019C17 3.88369 17 4.25579 17 5C17 5.74421 17 6.11631 16.9109 6.41981C16.7 7.13817 16.1382 7.69995 15.4198 7.91088C15.1163 8 14.7442 8 14 8H7C6.25579 8 5.88369 8 5.58019 7.91088C4.86183 7.69995 4.30005 7.13817 4.08912 6.41981C4 6.11631 4 5.74421 4 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 17.5C12 17.0341 12 16.8011 12.0761 16.6173C12.1776 16.3723 12.3723 16.1776 12.6173 16.0761C12.8011 16 13.0341 16 13.5 16C13.9659 16 14.1989 16 14.3827 16.0761C14.6277 16.1776 14.8224 16.3723 14.9239 16.6173C15 16.8011 15 17.0341 15 17.5V20.5C15 20.9659 15 21.1989 14.9239 21.3827C14.8224 21.6277 14.6277 21.8224 14.3827 21.9239C14.1989 22 13.9659 22 13.5 22C13.0341 22 12.8011 22 12.6173 21.9239C12.3723 21.8224 12.1776 21.6277 12.0761 21.3827C12 21.1989 12 20.9659 12 20.5V17.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.249 5C18.1037 5 18.531 5 18.8681 5.15224C19.9978 5.6624 20.0005 6.86278 20.0005 8.00422C20.0005 8.96065 20.0005 9.43886 19.8701 9.84219C19.4513 11.1378 17.7387 11.768 16.0836 12.2373C14.9006 12.5727 14.3091 12.7404 13.9045 13.2756C13.5 13.8107 13.5 14.4389 13.5 15.6952V16'
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

PaintBrush2Icon.displayName = 'PaintBrush2Icon';
export default PaintBrush2Icon;
