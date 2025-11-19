import React from 'react';
import config from '../config';

interface Sorting91IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Sorting91Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sorting91)
 * @see {@link https://clicons.dev/icon/sorting91}
 */
const Sorting91Icon = React.forwardRef<SVGSVGElement, Sorting91IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 20.9994V14.9481C7 14.3736 7 14.0863 6.76959 14.0149C6.26306 13.8577 5.5 14.999 5.5 14.999M7 20.9994H5.5M7 20.9994H8.5'
    }
  ],
  [
    'path',
    {
      d: 'M9 6.5V4.75C9 3.92504 9 3.51256 8.70711 3.25628C8.41421 3 7.94281 3 7 3C6.05719 3 5.58579 3 5.29289 3.25628C5 3.51256 5 3.92504 5 4.75C5 5.57496 5 5.98744 5.29289 6.24372C5.58579 6.5 6.05719 6.5 7 6.5H9ZM9 6.5V7.375C9 8.61244 9 9.23116 8.56066 9.61558C8.12132 10 7.41421 10 6 10H5'
    }
  ],
  [
    'path',
    {
      d: 'M16.5001 19.999V3.99902M16.5001 19.999C15.7999 19.999 14.4916 18.0047 14.0001 17.499M16.5001 19.999C17.2003 19.999 18.5086 18.0047 19.0001 17.499'
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

Sorting91Icon.displayName = 'Sorting91Icon';
export default Sorting91Icon;
