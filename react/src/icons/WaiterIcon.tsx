import React from 'react';
import config from '../config';

interface WaiterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WaiterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/waiter)
 * @see {@link https://clicons.dev/icon/waiter}
 */
const WaiterIcon = React.forwardRef<SVGSVGElement, WaiterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 22.0017V16.0275C20 15.0787 20 14.6043 19.8416 14.2303C19.6413 13.7575 19.2669 13.3798 18.7958 13.1755C18.4232 13.0139 17.9488 13.0099 17 13.0017C17 18.0017 12 20.0017 12 20.0017C12 20.0017 7 18.0017 7 13.0017C6.06812 13.0017 5.60218 13.0017 5.23463 13.154C4.74458 13.357 4.35523 13.7463 4.15224 14.2364C4 14.6039 4 15.0699 4 16.0017V22.0017'
    }
  ],
  [
    'path',
    {
      d: 'M12 13.5L14 12.5V14.5L12 13.5ZM12 13.5L10 12.5002V14.5002L12 13.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 6.50012V5.50012C15.5 3.56713 13.933 2.00012 12 2.00012C10.067 2.00012 8.5 3.56713 8.5 5.50012V6.50012C8.5 8.43312 10.067 10.0001 12 10.0001C13.933 10.0001 15.5 8.43312 15.5 6.50012Z'
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

WaiterIcon.displayName = 'WaiterIcon';
export default WaiterIcon;
