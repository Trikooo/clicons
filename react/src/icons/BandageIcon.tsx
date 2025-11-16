import React from 'react';
import config from '../config';

interface BandageIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BandageIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bandage)
 * @see {@link https://clicons.dev/icon/bandage}
 */
const BandageIcon = React.forwardRef<SVGSVGElement, BandageIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.9525 4.84083C15.1797 3.61361 15.7933 3 16.5558 3C17.3183 3 17.9319 3.61361 19.1592 4.84083C20.3864 6.06806 21 6.68167 21 7.44417C21 8.20667 20.3864 8.82028 19.1592 10.0475M10.0475 19.1592C8.82028 20.3864 8.20667 21 7.44417 21C6.68167 21 6.06806 20.3864 4.84084 19.1592C3.61361 17.9319 3 17.3183 3 16.5558C3 15.7933 3.61361 15.1797 4.84084 13.9525'
    }
  ],
  [
    'path',
    {
      d: 'M6.79333 12L4.84084 10.0475C3.61361 8.82028 3 8.20667 3 7.44417C3 6.68167 3.61361 6.06806 4.84084 4.84083C6.06806 3.61361 6.68167 3 7.44417 3C8.20667 3 8.82028 3.61361 10.0475 4.84083L12 6.79333M6.79333 12L12 6.79333M6.79333 12L12 17.2067M12 6.79333L17.2067 12M17.2067 12L19.1592 13.9525C20.3864 15.1797 21 15.7933 21 16.5558C21 17.3183 20.3864 17.9319 19.1592 19.1592C17.9319 20.3864 17.3183 21 16.5558 21C15.7933 21 15.1797 20.3864 13.9525 19.1592L12 17.2067M17.2067 12L12 17.2067'
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

BandageIcon.displayName = 'BandageIcon';
export default BandageIcon;
