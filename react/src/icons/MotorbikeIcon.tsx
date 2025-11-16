import React from 'react';
import config from '../config';

interface MotorbikeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MotorbikeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/motorbike)
 * @see {@link https://clicons.dev/icon/motorbike}
 */
const MotorbikeIcon = React.forwardRef<SVGSVGElement, MotorbikeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '19.5',
      cy: '16.5',
      r: '2.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.416 18C14.1484 17.3875 14 16.7111 14 16C14 13.2386 16.2386 11 19 11C19.3425 11 19.6769 11.0344 20 11.1'
    }
  ],
  [
    'circle',
    {
      cx: '4.5',
      cy: '16.5',
      r: '2.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.43023 9.62979H8.15662C8.61216 9.62979 9.05405 9.47428 9.40918 9.18898L11.2373 7.7204C11.4148 7.57776 11.6358 7.5 11.8636 7.5H15L12.2843 12.4789C12.109 12.8001 11.7723 13 11.4064 13H9.5M6.43023 9.62979H4M6.43023 9.62979L9.5 13M9.5 13L7 16'
    }
  ],
  [
    'path',
    {
      d: 'M17 11L13.9923 5.73649C13.5873 5.02784 13.3849 4.67352 13.0835 4.43408C12.9313 4.31313 12.7622 4.21503 12.5817 4.14287C12.2243 4 11.8162 4 11 4'
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

MotorbikeIcon.displayName = 'MotorbikeIcon';
export default MotorbikeIcon;
