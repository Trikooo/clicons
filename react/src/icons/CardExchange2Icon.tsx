import React from 'react';
import config from '../config';

interface CardExchange2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CardExchange2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/card-exchange2)
 * @see {@link https://clicons.dev/icon/card-exchange2}
 */
const CardExchange2Icon = React.forwardRef<SVGSVGElement, CardExchange2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 14.0057C22 17.3206 19.3171 20.0017 16 20.0017L16.8571 18.2886'
    }
  ],
  [
    'path',
    {
      d: 'M2 10.0086C2 6.69363 4.68286 4.01257 8 4.01257L7.14286 5.72571'
    }
  ],
  [
    'path',
    {
      d: 'M10.9658 5.52406H21.7723M13.4658 10.9943H19.4999C20.8806 10.9943 21.9999 9.87573 21.9999 8.49595V4.49674C21.9999 3.11695 20.8806 1.99841 19.4999 1.99841H13.4658C12.0851 1.99841 10.9658 3.11695 10.9658 4.49674V8.49595C10.9658 9.87573 12.0851 10.9943 13.4658 10.9943Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 16.5314H12.8065M4.5 22.0016H10.5341C11.9148 22.0016 13.0341 20.8831 13.0341 19.5033V15.5041C13.0341 14.1243 11.9148 13.0057 10.5341 13.0057H4.5C3.11929 13.0057 2 14.1243 2 15.5041V19.5033C2 20.8831 3.11929 22.0016 4.5 22.0016Z'
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

CardExchange2Icon.displayName = 'CardExchange2Icon';
export default CardExchange2Icon;
