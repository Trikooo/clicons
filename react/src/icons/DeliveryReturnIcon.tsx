import React from 'react';
import config from '../config';

interface DeliveryReturnIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DeliveryReturnIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/delivery-return)
 * @see {@link https://clicons.dev/icon/delivery-return}
 */
const DeliveryReturnIcon = React.forwardRef<SVGSVGElement, DeliveryReturnIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.49933 7.50009V13.5001C2.49933 17.2713 2.49933 19.1569 3.6709 20.3285C4.84247 21.5001 6.72809 21.5001 10.4993 21.5001H13.9993M21.4993 14.0001V7.50009'
    }
  ],
  [
    'path',
    {
      d: 'M3.86842 5.3147L2.49933 7.50009H21.4993L20.2471 5.41312C19.3935 3.9903 18.9666 3.27889 18.2789 2.88949C17.5911 2.50009 16.7615 2.50009 15.1022 2.50009H8.95304C7.32931 2.50009 6.51744 2.50009 5.83946 2.87539C5.16148 3.25069 4.73046 3.9387 3.86842 5.3147Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9993 7.50009V2.50009'
    }
  ],
  [
    'path',
    {
      d: 'M15.9993 14.5001C15.9993 14.5001 13.4993 16.3413 13.4993 17.0001C13.4993 17.6589 15.9993 19.5001 15.9993 19.5001M13.9993 17.0001H19.2493C20.492 17.0001 21.4993 18.0075 21.4993 19.2501C21.4993 20.4927 20.492 21.5001 19.2493 21.5001H18.4993'
    }
  ],
  [
    'path',
    {
      d: 'M9.99933 10.5001H13.9993'
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

DeliveryReturnIcon.displayName = 'DeliveryReturnIcon';
export default DeliveryReturnIcon;
