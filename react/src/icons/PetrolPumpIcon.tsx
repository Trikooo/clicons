import React from 'react';
import config from '../config';

interface PetrolPumpIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PetrolPumpIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/petrol-pump)
 * @see {@link https://clicons.dev/icon/petrol-pump}
 */
const PetrolPumpIcon = React.forwardRef<SVGSVGElement, PetrolPumpIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.5 21.5V8.5C3.5 5.67157 3.5 4.25736 4.37868 3.37868C5.25736 2.5 6.67157 2.5 9.5 2.5C12.3284 2.5 13.7426 2.5 14.6213 3.37868C15.5 4.25736 15.5 5.67157 15.5 8.5L15.5 21.5'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 10.5H15.5'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 21.5H16.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 14.5H16.5C17.6046 14.5 18.5 15.3954 18.5 16.5V17C18.5 17.8284 19.1716 18.5 20 18.5C20.8284 18.5 21.5 17.8284 21.5 17V11.5M20.5 7.5L20.9142 7.91421C21.2893 8.28929 21.5 8.79799 21.5 9.32843V11.5M20.5 7.5L18.5 5.5M20.5 7.5V9.67157C20.5 10.202 20.7107 10.7107 21.0858 11.0858L21.5 11.5'
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

PetrolPumpIcon.displayName = 'PetrolPumpIcon';
export default PetrolPumpIcon;
