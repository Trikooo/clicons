import React from 'react';
import config from '../config';

interface SwipeDown2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SwipeDown2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/swipe-down2)
 * @see {@link https://clicons.dev/icon/swipe-down2}
 */
const SwipeDown2Icon = React.forwardRef<SVGSVGElement, SwipeDown2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.5 8.00195V2.00195M18.5 8.00195C17.7998 8.00195 16.4915 6.00765 16 5.50195M18.5 8.00195C19.2002 8.00195 20.5085 6.00765 21 5.50195'
    }
  ],
  [
    'path',
    {
      d: 'M15.3913 21.998C15.3395 20.084 15.4684 19.8535 15.6052 19.4277C15.7419 19.002 16.6982 17.4665 17.0366 16.3695C18.1313 12.8202 17.111 12.0653 15.7507 11.0588C14.2422 9.94257 11.3968 9.37728 9.98573 9.49966V3.7462C9.98573 2.78288 9.20481 2.00195 8.24148 2.00195C7.27816 2.00195 6.49723 2.78288 6.49723 3.7462V9.96607M6.49774 21.9988V20.9854C6.43328 20.041 5.49529 18.9235 4.32672 17.3166C3.12509 15.576 2.86688 14.6973 3.05591 13.8848C3.15329 13.4694 3.40594 12.7832 4.64647 11.6104L6.49723 9.96607M6.49723 14.0323V9.96607'
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

SwipeDown2Icon.displayName = 'SwipeDown2Icon';
export default SwipeDown2Icon;
