import React from 'react';
import config from '../config';

interface CardExchangeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CardExchangeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/card-exchange)
 * @see {@link https://clicons.dev/icon/card-exchange}
 */
const CardExchangeIcon = React.forwardRef<SVGSVGElement, CardExchangeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 16C2 18.2109 2 19.3164 2.70187 20.0544C2.81413 20.1725 2.93785 20.2817 3.07164 20.3807C3.90809 21 5.16095 21 7.66667 21H8.33333C10.8391 21 12.0919 21 12.9284 20.3807C13.0621 20.2817 13.1859 20.1725 13.2981 20.0544C14 19.3164 14 18.2109 14 16C14 13.7891 14 12.6836 13.2981 11.9456C13.1859 11.8275 13.0621 11.7183 12.9284 11.6193C12.0919 11 10.8391 11 8.33333 11H7.66667C5.16095 11 3.90809 11 3.07164 11.6193C2.93785 11.7183 2.81413 11.8275 2.70187 11.9456C2 12.6836 2 13.7891 2 16Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 8.00001C10 5.78908 10 4.68362 10.7019 3.94557C10.8141 3.82753 10.9379 3.71835 11.0716 3.6193C11.9081 3.00001 13.1609 3.00001 15.6667 3.00001H16.3333C18.8391 3.00001 20.0919 3.00001 20.9284 3.6193C21.0621 3.71835 21.1859 3.82753 21.2981 3.94557C22 4.68362 22 5.78908 22 8.00001C22 10.2109 22 11.3164 21.2981 12.0544C21.1859 12.1725 21.0621 12.2817 20.9284 12.3807C20.1696 12.9425 19.0683 12.9947 17 12.9995'
    }
  ],
  [
    'path',
    {
      d: 'M2 15L14 15'
    }
  ],
  [
    'path',
    {
      d: 'M10 7L22 7'
    }
  ],
  [
    'path',
    {
      d: 'M2 9C2 5.68286 4.68286 3 8 3L7.14286 4.71429'
    }
  ],
  [
    'path',
    {
      d: 'M22 15C22 18.3171 19.3171 21 16 21L16.8571 19.2857'
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

CardExchangeIcon.displayName = 'CardExchangeIcon';
export default CardExchangeIcon;
