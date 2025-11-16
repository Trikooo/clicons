import React from 'react';
import config from '../config';

interface FrameworksIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FrameworksIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/frameworks)
 * @see {@link https://clicons.dev/icon/frameworks}
 */
const FrameworksIcon = React.forwardRef<SVGSVGElement, FrameworksIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13 2H11C10.4477 2 10 2.44772 10 3V5C10 5.55228 10.4477 6 11 6H13C13.5523 6 14 5.55228 14 5V3C14 2.44772 13.5523 2 13 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M13 18H11C10.4477 18 10 18.4477 10 19V21C10 21.5523 10.4477 22 11 22H13C13.5523 22 14 21.5523 14 21V19C14 18.4477 13.5523 18 13 18Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 4H16C17.4142 4 18.1213 4 18.5607 4.43934C19 4.87868 19 5.58579 19 7'
    }
  ],
  [
    'path',
    {
      d: 'M10 4H8C6.58579 4 5.87868 4 5.43934 4.43934C5 4.87868 5 5.58579 5 7'
    }
  ],
  [
    'path',
    {
      d: 'M10 20H8C6.58579 20 5.87868 20 5.43934 19.5607C5 19.1213 5 18.4142 5 17'
    }
  ],
  [
    'path',
    {
      d: 'M14 20H16C17.4142 20 18.1213 20 18.5607 19.5607C19 19.1213 19 18.4142 19 17'
    }
  ],
  [
    'path',
    {
      d: 'M10 12H14'
    }
  ],
  [
    'path',
    {
      d: 'M21 13V11C21 10.4477 20.5523 10 20 10L18 10C17.4477 10 17 10.4477 17 11L17 13C17 13.5523 17.4477 14 18 14H20C20.5523 14 21 13.5523 21 13Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 13V11C7 10.4477 6.55228 10 6 10L4 10C3.44772 10 3 10.4477 3 11L3 13C3 13.5523 3.44772 14 4 14H6C6.55228 14 7 13.5523 7 13Z'
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

FrameworksIcon.displayName = 'FrameworksIcon';
export default FrameworksIcon;
