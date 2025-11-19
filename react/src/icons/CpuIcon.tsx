import React from 'react';
import config from '../config';

interface CpuIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CpuIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cpu)
 * @see {@link https://clicons.dev/icon/cpu}
 */
const CpuIcon = React.forwardRef<SVGSVGElement, CpuIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 2V4'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 2V4'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 20V22'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 20V22'
    }
  ],
  [
    'path',
    {
      d: 'M13 9L9 13'
    }
  ],
  [
    'path',
    {
      d: 'M15 13L13 15'
    }
  ],
  [
    'path',
    {
      d: 'M22 14.5L20 14.5'
    }
  ],
  [
    'path',
    {
      d: 'M4 9.5L2 9.5'
    }
  ],
  [
    'path',
    {
      d: 'M4 14.5L2 14.5'
    }
  ],
  [
    'path',
    {
      d: 'M22 9.5L20 9.5'
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

CpuIcon.displayName = 'CpuIcon';
export default CpuIcon;
