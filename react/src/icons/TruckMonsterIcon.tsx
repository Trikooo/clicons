import React from 'react';
import config from '../config';

interface TruckMonsterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TruckMonsterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/truck-monster)
 * @see {@link https://clicons.dev/icon/truck-monster}
 */
const TruckMonsterIcon = React.forwardRef<SVGSVGElement, TruckMonsterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21 14L20.7578 11.5776C20.6326 10.3263 20.5701 9.70067 20.201 9.239C19.832 8.77732 19.2355 8.5785 18.0425 8.18084C17.6735 8.05784 17.4234 7.93745 17.187 7.62499C16.4318 6.62664 15.3436 4.68636 14.5275 4.2579C14.0362 4 13.4568 4 12.2979 4H11C10.0572 4 9.58579 4 9.29289 4.29289C9 4.58579 9 5.05719 9 6V13.5'
    }
  ],
  [
    'path',
    {
      d: 'M9 9.5H3V14'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 8H14C13.0572 8 12.5858 8 12.2929 7.70711C12 7.41421 12 6.94281 12 6V4'
    }
  ],
  [
    'path',
    {
      d: 'M9 5H8'
    }
  ],
  [
    'path',
    {
      d: 'M12 10.5H13'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 17H10.5M9.5 14H14.5M4.5 14H3.5C3.03406 14 2.80109 14 2.61732 14.0761C2.00228 14.3309 2 14.9298 2 15.5C2 16.0702 2.00228 16.6691 2.61732 16.9239C2.80109 17 3.03406 17 3.5 17M19.5 14H20.5C20.9659 14 21.1989 14 21.3827 14.0761C21.9977 14.3309 22 14.9298 22 15.5C22 16.0702 21.9977 16.6691 21.3827 16.9239C21.1989 17 20.9659 17 20.5 17'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 16.5C10.5 18.433 8.933 20 7 20C5.067 20 3.5 18.433 3.5 16.5C3.5 14.567 5.067 13 7 13C8.933 13 10.5 14.567 10.5 16.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 20C18.933 20 20.5 18.433 20.5 16.5C20.5 14.567 18.933 13 17 13C15.067 13 13.5 14.567 13.5 16.5C13.5 18.433 15.067 20 17 20Z'
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

TruckMonsterIcon.displayName = 'TruckMonsterIcon';
export default TruckMonsterIcon;
