import React from 'react';
import config from '../config';

interface FlowerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FlowerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/flower)
 * @see {@link https://clicons.dev/icon/flower}
 */
const FlowerIcon = React.forwardRef<SVGSVGElement, FlowerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.4999 12.5C14.4999 13.8807 13.3807 15 11.9999 15C10.6192 15 9.49994 13.8807 9.49994 12.5C9.49994 11.1193 10.6192 10 11.9999 10C13.3807 10 14.4999 11.1193 14.4999 12.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9999 3C14.2091 3 15.998 4.91739 15.998 7.12653C16.3182 7.04393 16.6539 7 16.9999 7C19.2091 7 20.9999 8.79086 20.9999 11C20.9999 12.5964 20.0647 13.9745 18.7122 14.616C19.2071 15.2818 19.4999 16.1067 19.4999 17C19.4999 19.2091 17.7091 21 15.4999 21C13.9939 21 12.6823 20.1677 11.9999 18.938C11.3176 20.1677 10.006 21 8.49994 21C6.2908 21 4.49994 19.2091 4.49994 17C4.49994 16.1067 4.79277 15.2818 5.28767 14.616C3.93518 13.9745 2.99994 12.5964 2.99994 11C2.99994 8.79086 4.7908 7 6.99994 7C7.34595 7 7.68169 7.04393 8.0019 7.12652C8.0019 4.91738 9.7908 3 11.9999 3Z'
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

FlowerIcon.displayName = 'FlowerIcon';
export default FlowerIcon;
