import React from 'react';
import config from '../config';

interface CircleDotDashedIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CircleDotDashedIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/circle-dot-dashed)
 * @see {@link https://clicons.dev/icon/circle-dot-dashed}
 */
const CircleDotDashedIcon = React.forwardRef<SVGSVGElement, CircleDotDashedIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.1 2.18a9.93 9.93 0 0 1 3.8 0'
    }
  ],
  [
    'path',
    {
      d: 'M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7'
    }
  ],
  [
    'path',
    {
      d: 'M21.82 10.1a9.93 9.93 0 0 1 0 3.8'
    }
  ],
  [
    'path',
    {
      d: 'M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69'
    }
  ],
  [
    'path',
    {
      d: 'M13.9 21.82a9.94 9.94 0 0 1-3.8 0'
    }
  ],
  [
    'path',
    {
      d: 'M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7'
    }
  ],
  [
    'path',
    {
      d: 'M2.18 13.9a9.93 9.93 0 0 1 0-3.8'
    }
  ],
  [
    'path',
    {
      d: 'M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '12',
      r: '1'
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

CircleDotDashedIcon.displayName = 'CircleDotDashedIcon';
export default CircleDotDashedIcon;
