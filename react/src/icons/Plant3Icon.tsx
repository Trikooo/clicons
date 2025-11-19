import React from 'react';
import config from '../config';

interface Plant3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Plant3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/plant3)
 * @see {@link https://clicons.dev/icon/plant3}
 */
const Plant3Icon = React.forwardRef<SVGSVGElement, Plant3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5 11.5C14.5 11.5 12 13.5 12 17'
    }
  ],
  [
    'path',
    {
      d: 'M10.063 9.06301C11.3123 7.8137 11.3123 5.78815 10.063 4.53884C8.17794 2.65376 4.03078 3.03078 4.03078 3.03078C4.03078 3.03078 3.65376 7.17794 5.53884 9.06301C6.78815 10.3123 8.8137 10.3123 10.063 9.06301Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.8031 11.1969C15.874 12.2677 17.6102 12.2677 18.681 11.1969C20.2968 9.58109 19.9736 6.02638 19.9736 6.02638C19.9736 6.02638 16.4189 5.70322 14.8031 7.319C13.7323 8.38985 13.7323 10.126 14.8031 11.1969Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 9.5C10 9.5 12 12 12 16.9993'
    }
  ],
  [
    'path',
    {
      d: 'M21 21C18.8012 18.5471 15.5841 17 12 17C8.41592 17 5.19883 18.5471 3 21'
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

Plant3Icon.displayName = 'Plant3Icon';
export default Plant3Icon;
