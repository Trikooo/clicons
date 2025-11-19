import React from 'react';
import config from '../config';

interface EdgeStyleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name EdgeStyleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/edge-style)
 * @see {@link https://clicons.dev/icon/edge-style}
 */
const EdgeStyleIcon = React.forwardRef<SVGSVGElement, EdgeStyleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 6H21'
    }
  ],
  [
    'path',
    {
      d: 'M3 10H10.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 10L21 10'
    }
  ],
  [
    'path',
    {
      d: 'M3 14H7'
    }
  ],
  [
    'path',
    {
      d: 'M10 14H14'
    }
  ],
  [
    'path',
    {
      d: 'M17 14H21'
    }
  ],
  [
    'path',
    {
      d: 'M3 18H5.11765M8.29412 18H10.4118M13.5882 18H15.7059M18.8824 18H21'
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

EdgeStyleIcon.displayName = 'EdgeStyleIcon';
export default EdgeStyleIcon;
