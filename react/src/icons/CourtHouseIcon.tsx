import React from 'react';
import config from '../config';

interface CourtHouseIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CourtHouseIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/court-house)
 * @see {@link https://clicons.dev/icon/court-house}
 */
const CourtHouseIcon = React.forwardRef<SVGSVGElement, CourtHouseIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5 9.08333C5 7.91667 6 7.5 6.5 7.5C7.49411 7.5 8 8.25383 8 9.08333C8 11.0163 6.65685 12 5 12C3.34315 12 2 10.433 2 8.5C2 6.567 3.34315 5 5 5H19C20.6569 5 22 6.567 22 8.5C22 10.433 20.6569 12 19 12C17.3431 12 16 11.0163 16 9.08333C16 8.25383 16.5059 7.5 17.5 7.5C18 7.5 19 7.91667 19 9.08333'
    }
  ],
  [
    'path',
    {
      d: 'M3 20C3 19.4477 3.44772 19 4 19H20C20.5523 19 21 19.4477 21 20V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V20Z'
    }
  ],
  [
    'path',
    {
      d: 'M13 9H11'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 19L9.5 15M14.5 19L14.5 15'
    }
  ],
  [
    'path',
    {
      d: 'M19 5C19 3.58579 19 2.87868 18.5607 2.43934C18.1213 2 17.4142 2 16 2H8C6.58579 2 5.87868 2 5.43934 2.43934C5 2.87868 5 3.58579 5 5'
    }
  ],
  [
    'path',
    {
      d: 'M5 12V19H19V12'
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

CourtHouseIcon.displayName = 'CourtHouseIcon';
export default CourtHouseIcon;
