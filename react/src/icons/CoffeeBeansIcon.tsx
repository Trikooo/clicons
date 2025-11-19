import React from 'react';
import config from '../config';

interface CoffeeBeansIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CoffeeBeansIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/coffee-beans)
 * @see {@link https://clicons.dev/icon/coffee-beans}
 */
const CoffeeBeansIcon = React.forwardRef<SVGSVGElement, CoffeeBeansIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13 5.64868C10.158 2.80666 6.20842 2.1484 4.17841 4.17841M4.17841 4.17841C2.1484 6.20842 2.80666 10.158 5.64868 13M4.17841 4.17841C4.42346 5.40363 5.72249 8.07432 8.95707 8.95647'
    }
  ],
  [
    'path',
    {
      d: 'M9.21114 19.7889C11.2975 21.8753 15.3568 21.1987 18.2778 18.2778C21.1987 15.3568 21.8753 11.2975 19.7889 9.21114M9.21114 19.7889C7.12475 17.7025 7.80129 13.6432 10.7222 10.7222C13.6432 7.80129 17.7025 7.12475 19.7889 9.21114M9.21114 19.7889C10.7222 19.2852 13.5829 18.8717 14.8781 14.1225C15.7847 10.7981 18.5296 9.46299 19.7889 9.21114'
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

CoffeeBeansIcon.displayName = 'CoffeeBeansIcon';
export default CoffeeBeansIcon;
