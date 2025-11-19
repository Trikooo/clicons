import React from 'react';
import config from '../config';

interface BlenderIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BlenderIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/blender)
 * @see {@link https://clicons.dev/icon/blender}
 */
const BlenderIcon = React.forwardRef<SVGSVGElement, BlenderIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.4626 4H8.2133M18.4626 4L17.4377 17H9L8.72577 11M18.4626 4H20M8.2133 4H6.35619C5.09456 4 4.46374 4 4.15636 4.40307C3.84899 4.80614 4.03026 5.39566 4.39278 6.5747L4.66786 7.4693C4.90028 8.22521 5.0165 8.60316 5.26185 8.90436C5.5072 9.20555 5.85836 9.40133 6.56065 9.79288L8.72577 11M8.2133 4L8.72577 11'
    }
  ],
  [
    'path',
    {
      d: 'M15 2H12'
    }
  ],
  [
    'path',
    {
      d: 'M17.4668 17H9.05279C8.76014 17.9995 7.45643 20.7076 8.25559 21.634C8.57134 22 9.16523 22 10.353 22H16.5325C17.8279 22 18.4755 22 18.7911 21.5969C19.5834 20.5851 17.8973 17.9653 17.4668 17Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 8H15.5M17.5 11H15.5M17.5 14H15.5'
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

BlenderIcon.displayName = 'BlenderIcon';
export default BlenderIcon;
