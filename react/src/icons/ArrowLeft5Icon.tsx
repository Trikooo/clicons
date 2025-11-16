import React from 'react';
import config from '../config';

interface ArrowLeft5IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArrowLeft5Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/arrow-left5)
 * @see {@link https://clicons.dev/icon/arrow-left5}
 */
const ArrowLeft5Icon = React.forwardRef<SVGSVGElement, ArrowLeft5IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.00002 5.99951L4.00005 18.0002'
    }
  ],
  [
    'path',
    {
      d: 'M12.4968 12.0109V12.3814C12.5374 15.3525 12.4024 16.3847 11.1519 15.9055L10.8438 15.7236L10.5952 15.5508L10.06 15.1378L9.0596 14.2685L8.03672 13.4047L7.53672 12.9516L7.31406 12.7251L7.05189 12.346L6.99807 12.0097L7.05189 11.6757L7.31406 11.2967L7.53672 11.0701L8.03672 10.617L9.0596 9.75323L10.06 8.8839L10.5952 8.47091L10.8438 8.29813L11.1519 8.11621C12.4024 7.63699 12.5374 8.66922 12.4968 11.6403V12.0109ZM12.4968 12.0109H19.9998'
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

ArrowLeft5Icon.displayName = 'ArrowLeft5Icon';
export default ArrowLeft5Icon;
