import React from 'react';
import config from '../config';

interface GarlandsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GarlandsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/garlands)
 * @see {@link https://clicons.dev/icon/garlands}
 */
const GarlandsIcon = React.forwardRef<SVGSVGElement, GarlandsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22.0007 3C19.8436 4.80898 16.1699 6 12.0007 6C7.83153 6 4.1579 4.80898 2.00073 3'
    }
  ],
  [
    'path',
    {
      d: 'M10.0007 6V11L12.0007 9.5L14.0007 11V6'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 4.49976L2 9.49891L4.5 8.49976L6 10.4998L7.5 5.99976'
    }
  ],
  [
    'path',
    {
      d: 'M20.4991 4.50171L21.9991 9.50086L19.4991 8.50171L17.9991 10.5017L16.4991 6.00171'
    }
  ],
  [
    'path',
    {
      d: 'M22 13C19.8428 14.809 16.1692 16 12 16C7.8308 16 4.15717 14.809 2 13'
    }
  ],
  [
    'path',
    {
      d: 'M10 16V21L12 19.5L14 21V16'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 14.5L2 19.4992L4.5 18.5L6 20.5L7.5 16'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 14.5L22 19.4992L19.5 18.5L18 20.5L16.5 16'
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

GarlandsIcon.displayName = 'GarlandsIcon';
export default GarlandsIcon;
