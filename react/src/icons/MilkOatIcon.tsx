import React from 'react';
import config from '../config';

interface MilkOatIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MilkOatIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/milk-oat)
 * @see {@link https://clicons.dev/icon/milk-oat}
 */
const MilkOatIcon = React.forwardRef<SVGSVGElement, MilkOatIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.64 20.6357C22.1695 19.1068 22.717 17.1755 20.64 15.0994C18.5628 13.0232 15.1011 12.3312 13.7164 13.7153M20.64 20.6357C19.1104 22.1645 17.1782 22.7118 15.1011 20.6357C13.024 18.5595 12.3317 15.0994 13.7164 13.7153M20.64 20.6357L13.7164 13.7153'
    }
  ],
  [
    'path',
    {
      d: 'M11.9419 21.9985H8.00115M4.9856 4.94586L2.56174 7.45742C2.20193 7.83025 2.00085 8.32816 2.00085 8.84629V19.9985C2.00085 21.103 2.89628 21.9985 4.00085 21.9985H8.00115M4.9856 4.94586L8.00115 8.0386M4.9856 4.94586V3.50171C4.9856 2.67328 5.65717 2.00171 6.4856 2.00171H14.039C14.8793 2.00171 15.5557 2.69197 15.5387 3.53213L15.5177 4.5655C15.5129 4.80149 15.5918 5.03157 15.7403 5.21502L18.0263 8.0386M8.00115 8.0386V21.9985M8.00115 8.0386H18.0263M18.0263 8.0386V10.4828'
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

MilkOatIcon.displayName = 'MilkOatIcon';
export default MilkOatIcon;
