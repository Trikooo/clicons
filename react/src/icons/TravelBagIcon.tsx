import React from 'react';
import config from '../config';

interface TravelBagIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TravelBagIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/travel-bag)
 * @see {@link https://clicons.dev/icon/travel-bag}
 */
const TravelBagIcon = React.forwardRef<SVGSVGElement, TravelBagIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 6.5H9C6.17157 6.5 4.75736 6.5 3.87868 7.37868C3 8.25736 3 9.67157 3 12.5V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V12.5C21 9.67157 21 8.25736 20.1213 7.37868C19.2426 6.5 17.8284 6.5 15 6.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M9 6.5V6C9 4.58579 9 3.87868 9.43934 3.43934C9.87868 3 10.5858 3 12 3C13.4142 3 14.1213 3 14.5607 3.43934C15 3.87868 15 4.58579 15 6V6.5'
    }
  ],
  [
    'path',
    {
      d: 'M21 10.5C18.7909 10.5 17 8.70914 17 6.5'
    }
  ],
  [
    'path',
    {
      d: 'M9.25 12L8.5 12.75L9.25 13.5L10 12.75L9.25 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 17C5.20914 17 7 18.7909 7 21'
    }
  ],
  [
    'path',
    {
      d: 'M3 10.5C5.20914 10.5 7 8.70914 7 6.5'
    }
  ],
  [
    'path',
    {
      d: 'M21 17C18.7909 17 17 18.7909 17 21'
    }
  ],
  [
    'path',
    {
      d: 'M14 16.8L12.5 16.5L13.7 15.3L14 16.8Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 11V11.01'
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

TravelBagIcon.displayName = 'TravelBagIcon';
export default TravelBagIcon;
