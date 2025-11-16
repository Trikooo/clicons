import React from 'react';
import config from '../config';

interface EquipmentGymIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name EquipmentGymIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/equipment-gym)
 * @see {@link https://clicons.dev/icon/equipment-gym}
 */
const EquipmentGymIcon = React.forwardRef<SVGSVGElement, EquipmentGymIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.75 11.5H16.25C17.6429 11.5 18 11.9094 18 13.25C18 14.6429 17.5906 15 16.25 15H7.75C6.3571 15 6 14.5906 6 13.25C6 11.8571 6.40936 11.5 7.75 11.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.75 15H16.25C17.6429 15 18 15.4094 18 16.75C18 18.1429 17.5906 18.5 16.25 18.5H7.75C6.3571 18.5 6 18.0906 6 16.75C6 15.3571 6.40936 15 7.75 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.75 18.5H16.25C17.6429 18.5 18 18.9094 18 20.25C18 21.6429 17.5906 22 16.25 22H7.75C6.3571 22 6 21.5906 6 20.25C6 18.8571 6.40936 18.5 7.75 18.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 7.49917L21.201 6.50039C20.6109 5.76277 20.3158 5.39396 19.9051 5.19656C19.5608 5.03105 19.1731 5.00432 18.5 5M2 7.49917L2.79902 6.50039C3.38912 5.76277 3.68417 5.39396 4.09487 5.19656C4.43923 5.03105 4.82691 5.00432 5.5 5M16 5L8 5'
    }
  ],
  [
    'path',
    {
      d: 'M16 2V11.5M8 2V11.5'
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

EquipmentGymIcon.displayName = 'EquipmentGymIcon';
export default EquipmentGymIcon;
