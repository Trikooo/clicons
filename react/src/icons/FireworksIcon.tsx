import React from 'react';
import config from '../config';

interface FireworksIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FireworksIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/fireworks)
 * @see {@link https://clicons.dev/icon/fireworks}
 */
const FireworksIcon = React.forwardRef<SVGSVGElement, FireworksIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 18C17.5 12.5 12 11 12 11C12 11 8 14.5 8 21'
    }
  ],
  [
    'path',
    {
      d: 'M2 10.0249C3.33333 9.01472 7.2 7.80245 12 11.0352C13.1667 9.35033 16.8 6.38511 22 8.00281'
    }
  ],
  [
    'path',
    {
      d: 'M15 5C14 5.66667 12 7.8 12 11C11.6667 9.33333 10 5.6 6 4'
    }
  ],
  [
    'path',
    {
      d: 'M6 14C6.98663 13 9.55185 11 11.9198 11C12.9064 12.1667 13.8069 14 13.3997 18'
    }
  ],
  [
    'path',
    {
      d: 'M13 20.4922V20.5022'
    }
  ],
  [
    'path',
    {
      d: 'M17 3V3.01'
    }
  ],
  [
    'path',
    {
      d: 'M20 12V12.01'
    }
  ],
  [
    'path',
    {
      d: 'M11 4V4.01'
    }
  ],
  [
    'path',
    {
      d: 'M18 11V11.01'
    }
  ],
  [
    'path',
    {
      d: 'M3 3V3.01'
    }
  ],
  [
    'path',
    {
      d: 'M4 16V16.01'
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

FireworksIcon.displayName = 'FireworksIcon';
export default FireworksIcon;
