import React from 'react';
import config from '../config';

interface ArrowTriangleLeftToLineIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArrowTriangleLeftToLineIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/arrow-triangle-left-to-line)
 * @see {@link https://clicons.dev/icon/arrow-triangle-left-to-line}
 */
const ArrowTriangleLeftToLineIcon = React.forwardRef<SVGSVGElement, ArrowTriangleLeftToLineIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 5.99951L4.00003 18.0002'
    }
  ],
  [
    'path',
    {
      d: 'M12.4968 12.0109V12.3814C12.5374 15.3525 12.4024 16.3847 11.1519 15.9055L10.8438 15.7236L10.5952 15.5508L10.06 15.1378L9.05958 14.2685L8.0367 13.4047L7.5367 12.9516L7.31404 12.7251L7.05187 12.346L6.99805 12.0097L7.05187 11.6757L7.31404 11.2967L7.5367 11.0701L8.0367 10.617L9.05958 9.75323L10.06 8.8839L10.5952 8.47091L10.8438 8.29813L11.1519 8.11621C12.4024 7.63699 12.5374 8.66922 12.4968 11.6403V12.0109ZM12.4968 12.0109H19.9998'
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

ArrowTriangleLeftToLineIcon.displayName = 'ArrowTriangleLeftToLineIcon';
export default ArrowTriangleLeftToLineIcon;
