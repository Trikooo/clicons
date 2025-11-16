import React from 'react';
import config from '../config';

interface GasStoveIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GasStoveIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/gas-stove)
 * @see {@link https://clicons.dev/icon/gas-stove}
 */
const GasStoveIcon = React.forwardRef<SVGSVGElement, GasStoveIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.5 6C2.5 2.69067 3.19067 2 6.5 2H18.5C21.8093 2 22.5 2.69067 22.5 6V18C22.5 21.3093 21.8093 22 18.5 22H6.5C3.19067 22 2.5 21.3093 2.5 18V6Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 19H10.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 19.0089V19'
    }
  ],
  [
    'circle',
    {
      cx: '12.5',
      cy: '10',
      r: '4'
    }
  ],
  [
    'path',
    {
      d: 'M16 10H17.5M12.5 13.5V15M9 10H7.5M12.5 6.5V5'
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

GasStoveIcon.displayName = 'GasStoveIcon';
export default GasStoveIcon;
