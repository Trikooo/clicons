import React from 'react';
import config from '../config';

interface Mouse16IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Mouse16Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mouse16)
 * @see {@link https://clicons.dev/icon/mouse16}
 */
const Mouse16Icon = React.forwardRef<SVGSVGElement, Mouse16IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 22C17.2 22 18.5 18.392 18.5 14C18.5 9.60799 17.2 6 12 6C6.79994 6 5.5 9.60797 5.5 14C5.5 18.392 6.79994 22 12 22Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 2C6 3.80215 7.74439 3.5 9.00657 3.5C11.0476 3.5 11.9337 3.87677 12 6V9'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 10.5C10.5 10.0341 10.5 9.80109 10.5761 9.61732C10.6776 9.37229 10.8723 9.17761 11.1173 9.07612C11.3011 9 11.5341 9 12 9C12.4659 9 12.6989 9 12.8827 9.07612C13.1277 9.17761 13.3224 9.37229 13.4239 9.61732C13.5 9.80109 13.5 10.0341 13.5 10.5V11.5C13.5 11.9659 13.5 12.1989 13.4239 12.3827C13.3224 12.6277 13.1277 12.8224 12.8827 12.9239C12.6989 13 12.4659 13 12 13C11.5341 13 11.3011 13 11.1173 12.9239C10.8723 12.8224 10.6776 12.6277 10.5761 12.3827C10.5 12.1989 10.5 11.9659 10.5 11.5V10.5Z'
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

Mouse16Icon.displayName = 'Mouse16Icon';
export default Mouse16Icon;
