import React from 'react';
import config from '../config';

interface GpsOffIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GpsOffIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/gps-off)
 * @see {@link https://clicons.dev/icon/gps-off}
 */
const GpsOffIcon = React.forwardRef<SVGSVGElement, GpsOffIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.0172 18.0169C16.4796 19.5511 14.3574 20.4997 12.0137 20.4997C7.31925 20.4997 3.51367 16.6941 3.51367 11.9997C3.51367 9.65593 4.46225 7.53375 5.99643 5.99609'
    }
  ],
  [
    'path',
    {
      d: 'M22.5 12H20.5'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 12H1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 1.5L12 3.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 20.5V22.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 2L22 22'
    }
  ],
  [
    'path',
    {
      d: 'M8.33594 4.32282C9.4491 3.79546 10.6968 3.5 12.0145 3.5C16.709 3.5 20.5145 7.24977 20.5145 11.8753C20.5145 13.1738 20.2147 14.4032 19.6795 15.5'
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

GpsOffIcon.displayName = 'GpsOffIcon';
export default GpsOffIcon;
