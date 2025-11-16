import React from 'react';
import config from '../config';

interface HotspotIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HotspotIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hotspot)
 * @see {@link https://clicons.dev/icon/hotspot}
 */
const HotspotIcon = React.forwardRef<SVGSVGElement, HotspotIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '12.0002',
      cy: '14',
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M4.00018 20.001C2.74436 18.3295 2.00018 16.2516 2.00018 14C2.00018 8.47715 6.47734 4 12.0002 4C17.523 4 22.0002 8.47715 22.0002 14C22.0002 16.2516 21.256 18.3295 20.0002 20.001'
    }
  ],
  [
    'path',
    {
      d: 'M7.52797 18C6.57789 16.9385 6.00018 15.5367 6.00018 14C6.00018 10.6863 8.68647 8 12.0002 8C15.3139 8 18.0002 10.6863 18.0002 14C18.0002 15.5367 17.4225 16.9385 16.4724 18'
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

HotspotIcon.displayName = 'HotspotIcon';
export default HotspotIcon;
