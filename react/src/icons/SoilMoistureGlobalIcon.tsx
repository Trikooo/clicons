import React from 'react';
import config from '../config';

interface SoilMoistureGlobalIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SoilMoistureGlobalIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/soil-moisture-global)
 * @see {@link https://clicons.dev/icon/soil-moisture-global}
 */
const SoilMoistureGlobalIcon = React.forwardRef<SVGSVGElement, SoilMoistureGlobalIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17 19.5034C17 18.2482 18.0532 17.0077 18.7924 16.2917C19.1939 15.9028 19.8061 15.9028 20.2076 16.2917C20.9468 17.0077 22 18.2482 22 19.5034C22 20.7341 21.0533 22 19.5 22C17.9467 22 17 20.7341 17 19.5034Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.9999 12C17.8993 12 14.3751 14.4682 12.832 18'
    }
  ],
  [
    'path',
    {
      d: 'M21.9984 8C15.6563 8 10.2992 12.217 8.57812 18'
    }
  ],
  [
    'path',
    {
      d: 'M21.9993 4C13.4329 4 6.26423 9.98405 4.44531 18'
    }
  ],
  [
    'path',
    {
      d: 'M2 10C2.87815 10 3.72986 10.1132 4.54134 10.3258'
    }
  ],
  [
    'path',
    {
      d: 'M2 6C3.86605 6 5.64683 6.36509 7.27481 7.02772'
    }
  ],
  [
    'path',
    {
      d: 'M2 2C5.17533 2 8.15863 2.82221 10.7486 4.26534'
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

SoilMoistureGlobalIcon.displayName = 'SoilMoistureGlobalIcon';
export default SoilMoistureGlobalIcon;
