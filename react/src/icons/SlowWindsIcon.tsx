import React from 'react';
import config from '../config';

interface SlowWindsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SlowWindsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/slow-winds)
 * @see {@link https://clicons.dev/icon/slow-winds}
 */
const SlowWindsIcon = React.forwardRef<SVGSVGElement, SlowWindsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21 5.63247C19.8635 4.81397 18.4095 4.81397 17.273 5.63247C16.5877 6.13474 15.6685 6.11614 14.9833 5.61388C13.8468 4.79537 12.3928 4.79537 11.273 5.61388C10.571 6.11614 9.68524 6.11614 9 5.61388'
    }
  ],
  [
    'path',
    {
      d: 'M3 9.37672C4.16839 10.1953 5.66323 10.1953 6.83162 9.37672C7.53608 8.87443 8.46392 8.87443 9.16838 9.37672C10.3368 10.1953 11.8488 10.2139 13 9.39531'
    }
  ],
  [
    'path',
    {
      d: 'M21 14.6233C19.8635 13.8047 18.4095 13.8047 17.273 14.6233C16.5877 15.1256 15.6852 15.1256 15 14.6233C13.8635 13.8047 12.3928 13.7861 11.273 14.6047C10.571 15.107 9.68524 15.107 9 14.6047'
    }
  ],
  [
    'path',
    {
      d: 'M3 18.3767C4.16839 19.1953 5.66323 19.1953 6.83162 18.3767C7.53608 17.8744 8.46392 17.8744 9.16838 18.3767C10.3368 19.1953 11.8488 19.2139 13 18.3953'
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

SlowWindsIcon.displayName = 'SlowWindsIcon';
export default SlowWindsIcon;
