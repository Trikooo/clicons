import React from 'react';
import config from '../config';

interface RotateBottomRightIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RotateBottomRightIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rotate-bottom-right)
 * @see {@link https://clicons.dev/icon/rotate-bottom-right}
 */
const RotateBottomRightIcon = React.forwardRef<SVGSVGElement, RotateBottomRightIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 17C18.2998 17 19.9497 17 20.9749 15.9749C22 14.9497 22 13.2998 22 10C22 6.70017 22 5.05025 20.9749 4.02513C19.9497 3 18.2998 3 15 3C11.7002 3 10.0503 3 9.02513 4.02513C8 5.05025 8 6.70017 8 10C8 13.2998 8 14.9497 9.02513 15.9749C10.0503 17 11.7002 17 15 17Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 14.4201L3.11013 13.0744C3.70104 12.3581 3.99649 12 4.36364 12L4.36364 13C4.36364 16.7712 4.36364 18.6569 5.53521 19.8284C6.70678 21 8.5924 21 12.3636 21L13 21'
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

RotateBottomRightIcon.displayName = 'RotateBottomRightIcon';
export default RotateBottomRightIcon;
