import React from 'react';
import config from '../config';

interface Table3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Table3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/table3)
 * @see {@link https://clicons.dev/icon/table3}
 */
const Table3Icon = React.forwardRef<SVGSVGElement, Table3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 4L2 4'
    }
  ],
  [
    'path',
    {
      d: 'M3 4V4.65609C3 5.62272 3.228 6.57118 3.65961 7.40006L4.20846 8.45408C5.18551 10.3304 5.26288 12.6519 4.41361 14.609L3.29319 17.191C3.10038 17.6353 3 18.1253 3 18.6221V20M21 4V4.65609C21 5.62272 20.772 6.57118 20.3404 7.40006L19.7915 8.45408C18.8145 10.3304 18.7371 12.6519 19.5864 14.609L20.7068 17.191C20.8996 17.6353 21 18.1253 21 18.6221V20'
    }
  ],
  [
    'path',
    {
      d: 'M5 12H19'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 15H19.5'
    }
  ],
  [
    'path',
    {
      d: 'M14 7C13.7549 7.61287 13.2537 8 12.7056 8H11.2944C10.7463 8 10.2451 7.61287 10 7'
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

Table3Icon.displayName = 'Table3Icon';
export default Table3Icon;
