import React from 'react';
import config from '../config';

interface ScrollHorizontalIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ScrollHorizontalIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/scroll-horizontal)
 * @see {@link https://clicons.dev/icon/scroll-horizontal}
 */
const ScrollHorizontalIcon = React.forwardRef<SVGSVGElement, ScrollHorizontalIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M2.00023 12.0672C1.95947 10.6863 7.34458 7.43916 7.8518 8.08367C8.42696 8.81452 7.05181 10.9863 6.74208 11.6779C6.55582 12.0938 6.56093 12.2741 6.77271 12.6896C7.73186 14.571 8.20766 15.5084 7.91196 15.9136C7.44063 16.5595 2.04001 13.4149 2.00023 12.0672Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.9989 12.0672C22.0396 10.6863 16.6545 7.43916 16.1473 8.08367C15.5721 8.81452 16.9473 10.9863 17.257 11.6779C17.4433 12.0938 17.4382 12.2741 17.2264 12.6896C16.2672 14.571 15.7915 15.5084 16.0871 15.9136C16.5585 16.5595 21.9591 13.4149 21.9989 12.0672Z'
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

ScrollHorizontalIcon.displayName = 'ScrollHorizontalIcon';
export default ScrollHorizontalIcon;
