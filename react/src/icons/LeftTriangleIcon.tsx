import React from 'react';
import config from '../config';

interface LeftTriangleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LeftTriangleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/left-triangle)
 * @see {@link https://clicons.dev/icon/left-triangle}
 */
const LeftTriangleIcon = React.forwardRef<SVGSVGElement, LeftTriangleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 20V22'
    }
  ],
  [
    'path',
    {
      d: 'M20 8V6.48477C20 3.77749 20 2.42383 19.2091 2.07276C18.4182 1.72168 17.4766 2.65735 15.5934 4.5287L4.71649 15.3371C2.7279 17.3131 1.73361 18.3012 2.06169 19.1506C2.38977 20 3.76568 20 6.51751 20H8M11 20H17.3944C18.6227 20 19.2368 20 19.6184 19.6036C20 19.2072 20 18.5692 20 17.2932V13C20 12.0572 20 11.5858 20.2929 11.2929C20.5858 11 21.0572 11 22 11'
    }
  ],
  [
    'path',
    {
      d: 'M20 15H19C17.1144 15 16.1716 15 15.5858 15.5858C15 16.1716 15 17.1144 15 19V20'
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

LeftTriangleIcon.displayName = 'LeftTriangleIcon';
export default LeftTriangleIcon;
