import React from 'react';
import config from '../config';

interface Mouse18IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Mouse18Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mouse18)
 * @see {@link https://clicons.dev/icon/mouse18}
 */
const Mouse18Icon = React.forwardRef<SVGSVGElement, Mouse18IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 7V2.5M12 13V11'
    }
  ],
  [
    'path',
    {
      d: 'M7.32948 4.4758C8.3873 4.23124 9.44531 3.70349 10.5038 2.89255C11.2805 2.29747 11.6689 1.99993 12.0012 2C12.3334 2.00007 12.7219 2.29794 13.4988 2.89369C14.5555 3.70396 15.6126 4.23133 16.6698 4.47578C17.4472 4.65552 17.8358 4.74538 18.0319 4.92956C18.228 5.11373 18.3175 5.40051 18.4964 5.97405C20.7629 13.2374 19.2955 19.4907 13.0181 21.7565C12.5682 21.9188 12.3433 22 12.0018 22C11.6603 22 11.4354 21.9188 10.9855 21.7565C4.70756 19.4907 3.23607 13.2373 5.50297 5.97386C5.68195 5.4004 5.77144 5.11367 5.96751 4.92951C6.16359 4.74535 6.55222 4.6555 7.32948 4.4758Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 8.5C10.5 8.03406 10.5 7.80109 10.5761 7.61732C10.6776 7.37229 10.8723 7.17761 11.1173 7.07612C11.3011 7 11.5341 7 12 7C12.4659 7 12.6989 7 12.8827 7.07612C13.1277 7.17761 13.3224 7.37229 13.4239 7.61732C13.5 7.80109 13.5 8.03406 13.5 8.5V9.5C13.5 9.96594 13.5 10.1989 13.4239 10.3827C13.3224 10.6277 13.1277 10.8224 12.8827 10.9239C12.6989 11 12.4659 11 12 11C11.5341 11 11.3011 11 11.1173 10.9239C10.8723 10.8224 10.6776 10.6277 10.5761 10.3827C10.5 10.1989 10.5 9.96594 10.5 9.5V8.5Z'
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

Mouse18Icon.displayName = 'Mouse18Icon';
export default Mouse18Icon;
