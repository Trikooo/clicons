import React from 'react';
import config from '../config';

interface BiomassEnergyIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BiomassEnergyIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/biomass-energy)
 * @see {@link https://clicons.dev/icon/biomass-energy}
 */
const BiomassEnergyIcon = React.forwardRef<SVGSVGElement, BiomassEnergyIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 14.4986C20 18.6415 16.4183 22 12 22C7.58172 22 4 18.6415 4 14.4986L4 14.2794C4 13.5451 4 13.178 4.25365 13.0433C4.80339 12.7515 6 14 6 14'
    }
  ],
  [
    'path',
    {
      d: 'M4 9.50139C4 5.35849 7.58172 2 12 2C16.4183 2 20 5.35849 20 9.50139V9.72063C20 10.4549 20 10.822 19.7463 10.9567C19.1966 11.2485 18 10 18 10'
    }
  ],
  [
    'path',
    {
      d: 'M11.9796 11.1605C11.2601 12.5841 10.7346 14.8928 11.5622 17.5M11.1431 15.0283C6.89727 12.0079 9.81401 8.53376 12.5599 6.78017C12.8913 6.56855 13.057 6.46274 13.2499 6.5119C13.4428 6.56106 13.5355 6.73406 13.7209 7.08005C15.2623 9.95702 16.3667 14.4893 11.1431 15.0283Z'
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

BiomassEnergyIcon.displayName = 'BiomassEnergyIcon';
export default BiomassEnergyIcon;
