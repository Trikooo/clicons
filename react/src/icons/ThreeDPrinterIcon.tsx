import React from 'react';
import config from '../config';

interface ThreeDPrinterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ThreeDPrinterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/three-d-printer)
 * @see {@link https://clicons.dev/icon/three-d-printer}
 */
const ThreeDPrinterIcon = React.forwardRef<SVGSVGElement, ThreeDPrinterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 2H2V2.5C2 3.60457 2.89543 4.5 4 4.5H8V2Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 2H16V4.5H20C21.1046 4.5 22 3.60457 22 2.5V2Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 2H8V10H16V2Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 13H10.5L8 10H16L13.5 13Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 13H10.5V14.7574C10.5 15.553 10.8161 16.3161 11.3787 16.8787L12 17.5L12.6213 16.8787C13.1839 16.3161 13.5 15.553 13.5 14.7574V13Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 22H10C11.1046 22 12 21.1046 12 20'
    }
  ],
  [
    'path',
    {
      d: 'M14 5V5.01'
    }
  ],
  [
    'path',
    {
      d: 'M14 7.5V7.51'
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

ThreeDPrinterIcon.displayName = 'ThreeDPrinterIcon';
export default ThreeDPrinterIcon;
