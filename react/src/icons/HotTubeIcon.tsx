import React from 'react';
import config from '../config';

interface HotTubeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HotTubeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hot-tube)
 * @see {@link https://clicons.dev/icon/hot-tube}
 */
const HotTubeIcon = React.forwardRef<SVGSVGElement, HotTubeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.6644 16.9864L3 13H21L20.3356 16.9864C19.9365 19.3809 19.737 20.5781 18.8977 21.2891C18.0585 22 16.8448 22 14.4172 22H9.58276C7.15525 22 5.94149 22 5.10226 21.2891C4.26302 20.5781 4.06348 19.3809 3.6644 16.9864Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.6 10C19.1333 9.44772 19.1333 8.55228 18.6 8C18.0667 7.44772 18.0667 6.55228 18.6 6M15.4 10C15.9333 9.44772 15.9333 8.55228 15.4 8C14.8667 7.44772 14.8667 6.55228 15.4 6'
    }
  ],
  [
    'path',
    {
      d: 'M3 13H2M21 13H22'
    }
  ],
  [
    'path',
    {
      d: 'M5 13V9.8513C5 8.82886 5.82885 8 6.8513 8C8.18 8 9.40683 8.71196 10.0661 9.8656L13 15M9 4C9 5.10457 8.10457 6 7 6C5.89543 6 5 5.10457 5 4C5 2.89543 5.89543 2 7 2C8.10457 2 9 2.89543 9 4Z'
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

HotTubeIcon.displayName = 'HotTubeIcon';
export default HotTubeIcon;
