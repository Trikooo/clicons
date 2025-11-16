import React from 'react';
import config from '../config';

interface CupcakeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CupcakeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cupcake)
 * @see {@link https://clicons.dev/icon/cupcake}
 */
const CupcakeIcon = React.forwardRef<SVGSVGElement, CupcakeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 13.5789L7.06237 18.0148C7.42652 19.5353 7.6086 20.2956 8.03895 20.8437C8.3231 21.2057 8.68075 21.4972 9.08605 21.6971C9.69988 22 10.4506 22 11.9521 22C13.5228 22 14.3081 22 14.9399 21.6754C15.3567 21.4613 15.7206 21.1498 16.0035 20.7652C16.4323 20.1822 16.5863 19.3783 16.8944 17.7706L18 12'
    }
  ],
  [
    'path',
    {
      d: 'M12 10C8.04103 10.4949 6 9.5 6.48618 7.54383M6.48618 7.54383C5.07413 7.78754 4 9.51833 4 11C4 12.6569 5 14 7 14C9 14 16 13 16 13C18.5 12.5 20 11 20 9.5C20 7.29086 18.2091 6 16 6C16 3.79086 14.2091 2 12 2C13 3 11.5 4.25 10 5C9 5.5 6.97235 5.58766 6.48618 7.54383Z'
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

CupcakeIcon.displayName = 'CupcakeIcon';
export default CupcakeIcon;
