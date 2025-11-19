import React from 'react';
import config from '../config';

interface SolarPanel5IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SolarPanel5Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/solar-panel5)
 * @see {@link https://clicons.dev/icon/solar-panel5}
 */
const SolarPanel5Icon = React.forwardRef<SVGSVGElement, SolarPanel5IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8'
    }
  ],
  [
    'path',
    {
      d: 'M15.7933 11H8.20668C7.2338 11 6.74735 11 6.37446 11.2671C6.00157 11.5342 5.83077 12.005 5.48917 12.9466L4.76359 14.9466C4.09554 16.7881 3.76151 17.7088 4.19435 18.3544C4.62719 19 5.57849 19 7.48111 19H16.5189C18.4215 19 19.3728 19 19.8057 18.3544C20.2385 17.7088 19.9045 16.7881 19.2364 14.9466L18.5108 12.9466C18.1692 12.005 17.9984 11.5342 17.6255 11.2671C17.2526 11 16.7662 11 15.7933 11Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 11V19'
    }
  ],
  [
    'path',
    {
      d: 'M19 15H5'
    }
  ],
  [
    'path',
    {
      d: 'M12 19V22M12 22H14M12 22H10'
    }
  ],
  [
    'path',
    {
      d: 'M12 2.5V2'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 8H18'
    }
  ],
  [
    'path',
    {
      d: 'M6 8L6.5 8'
    }
  ],
  [
    'path',
    {
      d: 'M15.8887 4.11088L16.2422 3.75732'
    }
  ],
  [
    'path',
    {
      d: 'M7.75781 3.75781L8.11137 4.11137'
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

SolarPanel5Icon.displayName = 'SolarPanel5Icon';
export default SolarPanel5Icon;
