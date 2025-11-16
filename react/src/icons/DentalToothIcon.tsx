import React from 'react';
import config from '../config';

interface DentalToothIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DentalToothIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/dental-tooth)
 * @see {@link https://clicons.dev/icon/dental-tooth}
 */
const DentalToothIcon = React.forwardRef<SVGSVGElement, DentalToothIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9 6C9.5 6.5 10.5033 6.41228 12 5.17632M12 5.17632C11.7786 4.99352 11.5486 4.78582 11.311 4.55032C9.0053 2.2656 5.86519 2.71292 4.39399 4.55032C3.37784 5.8194 0.777521 8.97857 7.14215 20.2396C7.40566 20.7058 7.9306 21 8.49601 21C9.398 21 10.103 20.2801 10.1323 19.4399C10.1945 17.6579 10.5397 15.6035 12 15.6035C13.4603 15.6035 13.8055 17.6579 13.8677 19.4399C13.897 20.2801 14.602 21 15.504 21C16.0694 21 16.5943 20.7058 16.8578 20.2396C23.2225 8.97857 20.6222 5.8194 19.606 4.55032C18.1348 2.71292 14.9947 2.2656 12.689 4.55032C12.4514 4.78582 12.2214 4.99352 12 5.17632Z'
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

DentalToothIcon.displayName = 'DentalToothIcon';
export default DentalToothIcon;
