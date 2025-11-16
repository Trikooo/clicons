import React from 'react';
import config from '../config';

interface TrafficJamIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TrafficJamIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/traffic-jam)
 * @see {@link https://clicons.dev/icon/traffic-jam}
 */
const TrafficJamIcon = React.forwardRef<SVGSVGElement, TrafficJamIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5 9H18C19.8856 9 20.8284 9 21.4142 9.58579C22 10.1716 22 11.1144 22 13V14H16M21 9L20.6431 7.21554C20.3353 5.67627 20.1813 4.90663 19.6284 4.45332C19.0754 4 18.2905 4 16.7208 4H13.0792C11.5095 4 10.7246 4 10.1716 4.45332C9.61867 4.90663 9.46475 5.67627 9.15689 7.21553L9 8'
    }
  ],
  [
    'path',
    {
      d: 'M22 14V16H21V14H22Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 13H6C4.11438 13 3.17157 13 2.58579 13.5858C2 14.1716 2 15.1144 2 17V18H16V17C16 15.1144 16 14.1716 15.4142 13.5858C14.8284 13 13.8856 13 12 13Z'
    }
  ],
  [
    'path',
    {
      d: 'M15 13L14.6431 11.2155C14.3353 9.67627 14.1813 8.90663 13.6284 8.45332C13.0754 8 12.2905 8 10.7208 8H7.27922C5.70946 8 4.92459 8 4.37163 8.45332C3.81867 8.90663 3.66475 9.67627 3.35689 11.2155L3 13'
    }
  ],
  [
    'path',
    {
      d: 'M11 17H7L6 18H12L11 17Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 15.5V15.51'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 15.5V15.51'
    }
  ],
  [
    'path',
    {
      d: 'M2 20V18H3V20H2Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 18V20H15V18H16Z'
    }
  ],
  [
    'path',
    {
      d: 'M19.5004 11.5V11.51'
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

TrafficJamIcon.displayName = 'TrafficJamIcon';
export default TrafficJamIcon;
