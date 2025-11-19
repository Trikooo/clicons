import React from 'react';
import config from '../config';

interface Plant2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Plant2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/plant2)
 * @see {@link https://clicons.dev/icon/plant2}
 */
const Plant2Icon = React.forwardRef<SVGSVGElement, Plant2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5 10.5C14.5 10.5 12 12.5 12 15'
    }
  ],
  [
    'path',
    {
      d: 'M6 15H18'
    }
  ],
  [
    'path',
    {
      d: 'M7 15L7.50938 18.5657C7.7433 20.2031 7.86026 21.0218 8.42419 21.5109C8.98812 22 9.81514 22 11.4692 22H12.5308C14.1849 22 15.0119 22 15.5758 21.5109C16.1397 21.0218 16.2567 20.2031 16.4906 18.5657L17 15'
    }
  ],
  [
    'path',
    {
      d: 'M10.063 8.06301C11.3123 6.8137 11.3123 4.78815 10.063 3.53884C8.17794 1.65376 4.03078 2.03078 4.03078 2.03078C4.03078 2.03078 3.65376 6.17794 5.53884 8.06301C6.78815 9.31233 8.8137 9.31233 10.063 8.06301Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.8031 10.1969C15.874 11.2677 17.6102 11.2677 18.681 10.1969C20.2968 8.58109 19.9736 5.02638 19.9736 5.02638C19.9736 5.02638 16.4189 4.70322 14.8031 6.319C13.7323 7.38985 13.7323 9.12602 14.8031 10.1969Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 8.5C10 8.5 12 11 12 14.9993'
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

Plant2Icon.displayName = 'Plant2Icon';
export default Plant2Icon;
