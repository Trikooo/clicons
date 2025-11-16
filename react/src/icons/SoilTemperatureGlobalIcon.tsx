import React from 'react';
import config from '../config';

interface SoilTemperatureGlobalIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SoilTemperatureGlobalIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/soil-temperature-global)
 * @see {@link https://clicons.dev/icon/soil-temperature-global}
 */
const SoilTemperatureGlobalIcon = React.forwardRef<SVGSVGElement, SoilTemperatureGlobalIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.832 18.0001C13.1442 17.2857 13.5374 16.6148 14 15.999'
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
      d: 'M19 22C20.6569 22 22 20.6569 22 19C22 18.3038 21.7629 17.663 21.365 17.154C20.861 16.5093 20.609 16.1869 20.5545 16.0286C20.5 15.8704 20.5 15.6628 20.5 15.2478V12.5C20.5 11.6716 19.8284 11 19 11C18.1716 11 17.5 11.6716 17.5 12.5V15.2478C17.5 15.6628 17.5 15.8704 17.4455 16.0286C17.391 16.1869 17.139 16.5093 16.635 17.154C16.2371 17.663 16 18.3038 16 19C16 20.6569 17.3431 22 19 22Z'
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

SoilTemperatureGlobalIcon.displayName = 'SoilTemperatureGlobalIcon';
export default SoilTemperatureGlobalIcon;
