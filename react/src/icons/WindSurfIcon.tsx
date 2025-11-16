import React from 'react';
import config from '../config';

interface WindSurfIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WindSurfIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/wind-surf)
 * @see {@link https://clicons.dev/icon/wind-surf}
 */
const WindSurfIcon = React.forwardRef<SVGSVGElement, WindSurfIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 21L7 22'
    }
  ],
  [
    'path',
    {
      d: 'M22 19H2C7 20.7143 12.9751 22 17 22C20 22 22 19.7347 22 19Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.0103 2C18.1781 7 16.2964 16.3438 15 19'
    }
  ],
  [
    'path',
    {
      d: 'M16.2029 3.91879C15.8034 3.54155 15.0113 3.01128 14.9351 3.00177C14.0749 2.89451 13.9629 3.41804 12.9641 4.88797C11.6989 6.5487 8.80901 10.0524 7.79688 10.911M7.79688 10.911C8.37003 12.6904 9.3081 15.5156 15.0929 16.9358M7.79688 10.911C9.07691 12.6395 13.9342 13.0313 16.2029 13.0111'
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

WindSurfIcon.displayName = 'WindSurfIcon';
export default WindSurfIcon;
