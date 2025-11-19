import React from 'react';
import config from '../config';

interface MoonSlowWindIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MoonSlowWindIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/moon-slow-wind)
 * @see {@link https://clicons.dev/icon/moon-slow-wind}
 */
const MoonSlowWindIcon = React.forwardRef<SVGSVGElement, MoonSlowWindIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.5483 18C20.7476 16.9645 21.5819 15.6272 22 14.1756C19.5473 14.4746 17.0369 13.3432 15.7234 11.1113C14.4099 8.87928 14.6664 6.1807 16.1567 4.2463C14.1701 3.75234 11.9929 3.98823 10.0779 5.07295C7.30713 6.64236 5.83056 9.56635 6.0155 12.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 15.3739C3.13649 16.1865 4.59053 16.1865 5.72702 15.3739C6.41225 14.8754 7.31476 14.8754 7.99999 15.3739C9.13648 16.1865 10.6072 16.2049 11.727 15.3924M17 19.6352C15.8635 18.8226 14.4095 18.8226 13.273 19.6352C12.5877 20.1338 11.6685 20.1153 10.9833 19.6167C9.8468 18.8042 8.39277 18.8042 7.27299 19.6167C6.57104 20.1153 5.68524 20.1153 5 19.6167'
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

MoonSlowWindIcon.displayName = 'MoonSlowWindIcon';
export default MoonSlowWindIcon;
