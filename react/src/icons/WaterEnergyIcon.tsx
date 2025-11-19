import React from 'react';
import config from '../config';

interface WaterEnergyIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WaterEnergyIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/water-energy)
 * @see {@link https://clicons.dev/icon/water-energy}
 */
const WaterEnergyIcon = React.forwardRef<SVGSVGElement, WaterEnergyIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.2532 19.9167C19.8129 18.2147 21.5 15.3044 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C11.2744 2.5 10.5678 2.58134 9.88889 2.73541M17.2532 19.9167V17M17.2532 19.9167H20.5M6.72222 4.09975C4.17625 5.80396 2.5 8.70623 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C12.7256 21.5 13.4322 21.4187 14.1111 21.2646M6.72222 4.09975V7M6.72222 4.09975H3.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10 12 7 12 7C12 7 8.5 10 8.5 12.5C8.5 14.433 10.067 16 12 16Z'
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

WaterEnergyIcon.displayName = 'WaterEnergyIcon';
export default WaterEnergyIcon;
