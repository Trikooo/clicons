import React from 'react';
import config from '../config';

interface HotelBellIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HotelBellIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hotel-bell)
 * @see {@link https://clicons.dev/icon/hotel-bell}
 */
const HotelBellIcon = React.forwardRef<SVGSVGElement, HotelBellIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 20.5H22'
    }
  ],
  [
    'path',
    {
      d: 'M3.05228 14.7749C3.51867 14.4791 3.99344 14.05 4.06165 13.502C4.55286 9.55471 7.9197 6.5 12 6.5C16.0803 6.5 19.4471 9.55471 19.9384 13.502C20.0066 14.05 20.4813 14.4791 20.9477 14.7749C21.3611 15.0371 21.6612 15.4673 21.7466 15.9796L22 17H2L2.2534 15.9796C2.33878 15.4673 2.63889 15.0371 3.05228 14.7749Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 6.5V3.5M12 3.5H9.5M12 3.5H14.5'
    }
  ],
  [
    'path',
    {
      d: 'M19 5.5L18.5 6.5M21.5 8L20.5009 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M5 5.5L5.5 6.5M3.49913 8.5L2.5 8'
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

HotelBellIcon.displayName = 'HotelBellIcon';
export default HotelBellIcon;
