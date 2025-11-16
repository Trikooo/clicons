import React from 'react';
import config from '../config';

interface AlgorithmIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AlgorithmIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/algorithm)
 * @see {@link https://clicons.dev/icon/algorithm}
 */
const AlgorithmIcon = React.forwardRef<SVGSVGElement, AlgorithmIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.5 2V4M13.5 2V4M8 6.5H6M8 9.5H6M18 6.5H16M18 9.5H16M13.3333 4H10.6667C9.40959 4 8.78105 4 8.39052 4.39052C8 4.78105 8 5.40959 8 6.66667V9.33333C8 10.5904 8 11.219 8.39052 11.6095C8.78105 12 9.40959 12 10.6667 12H13.3333C14.5904 12 15.219 12 15.6095 11.6095C16 11.219 16 10.5904 16 9.33333V6.66667C16 5.40959 16 4.78105 15.6095 4.39052C15.219 4 14.5904 4 13.3333 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M3.61732 21.9239C3.80109 22 4.03406 22 4.5 22C4.96594 22 5.19891 22 5.38268 21.9239C5.62771 21.8224 5.82239 21.6277 5.92388 21.3827C6 21.1989 6 20.9659 6 20.5C6 20.0341 6 19.8011 5.92388 19.6173C5.82239 19.3723 5.62771 19.1776 5.38268 19.0761C5.19891 19 4.96594 19 4.5 19C4.03406 19 3.80109 19 3.61732 19.0761C3.37229 19.1776 3.17761 19.3723 3.07612 19.6173C3 19.8011 3 20.0341 3 20.5C3 20.9659 3 21.1989 3.07612 21.3827C3.17761 21.6277 3.37229 21.8224 3.61732 21.9239Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.1173 21.9239C11.3011 22 11.5341 22 12 22C12.4659 22 12.6989 22 12.8827 21.9239C13.1277 21.8224 13.3224 21.6277 13.4239 21.3827C13.5 21.1989 13.5 20.9659 13.5 20.5C13.5 20.0341 13.5 19.8011 13.4239 19.6173C13.3224 19.3723 13.1277 19.1776 12.8827 19.0761C12.6989 19 12.4659 19 12 19C11.5341 19 11.3011 19 11.1173 19.0761C10.8723 19.1776 10.6776 19.3723 10.5761 19.6173C10.5 19.8011 10.5 20.0341 10.5 20.5C10.5 20.9659 10.5 21.1989 10.5761 21.3827C10.6776 21.6277 10.8723 21.8224 11.1173 21.9239Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 19V12'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 19C4.5 17.5955 4.5 16.8933 4.83706 16.3889C4.98298 16.1705 5.17048 15.983 5.38886 15.8371C5.89331 15.5 6.59554 15.5 8 15.5H16C17.4045 15.5 18.1067 15.5 18.6111 15.8371C18.8295 15.983 19.017 16.1705 19.1629 16.3889C19.5 16.8933 19.5 17.5955 19.5 19'
    }
  ],
  [
    'path',
    {
      d: 'M18.6173 21.9239C18.8011 22 19.0341 22 19.5 22C19.9659 22 20.1989 22 20.3827 21.9239C20.6277 21.8224 20.8224 21.6277 20.9239 21.3827C21 21.1989 21 20.9659 21 20.5C21 20.0341 21 19.8011 20.9239 19.6173C20.8224 19.3723 20.6277 19.1776 20.3827 19.0761C20.1989 19 19.9659 19 19.5 19C19.0341 19 18.8011 19 18.6173 19.0761C18.3723 19.1776 18.1776 19.3723 18.0761 19.6173C18 19.8011 18 20.0341 18 20.5C18 20.9659 18 21.1989 18.0761 21.3827C18.1776 21.6277 18.3723 21.8224 18.6173 21.9239Z'
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

AlgorithmIcon.displayName = 'AlgorithmIcon';
export default AlgorithmIcon;
