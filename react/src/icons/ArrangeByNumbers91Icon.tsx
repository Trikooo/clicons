import React from 'react';
import config from '../config';

interface ArrangeByNumbers91IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArrangeByNumbers91Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/arrange-by-numbers91)
 * @see {@link https://clicons.dev/icon/arrange-by-numbers91}
 */
const ArrangeByNumbers91Icon = React.forwardRef<SVGSVGElement, ArrangeByNumbers91IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.99988 21.0003V14.9491C6.99988 14.3746 6.99988 14.0873 6.76947 14.0158C6.26294 13.8587 5.49988 15 5.49988 15M6.99988 21.0003H5.49988M6.99988 21.0003H8.49988'
    }
  ],
  [
    'path',
    {
      d: 'M8.99988 6.50098V4.75098C8.99988 3.92602 8.99988 3.51354 8.70698 3.25726C8.41409 3.00098 7.94269 3.00098 6.99988 3.00098C6.05707 3.00098 5.58566 3.00098 5.29277 3.25726C4.99988 3.51354 4.99988 3.92602 4.99988 4.75098C4.99988 5.57593 4.99988 5.98841 5.29277 6.2447C5.58566 6.50098 6.05707 6.50098 6.99988 6.50098H8.99988ZM8.99988 6.50098V7.37598C8.99988 8.61341 8.99988 9.23213 8.56054 9.61655C8.1212 10.001 7.41409 10.001 5.99988 10.001H4.99988'
    }
  ],
  [
    'path',
    {
      d: 'M16.4999 20V4M16.4999 20C15.7997 20 14.4915 18.0057 13.9999 17.5M16.4999 20C17.2002 20 18.5084 18.0057 18.9999 17.5'
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

ArrangeByNumbers91Icon.displayName = 'ArrangeByNumbers91Icon';
export default ArrangeByNumbers91Icon;
