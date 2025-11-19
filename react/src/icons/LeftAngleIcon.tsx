import React from 'react';
import config from '../config';

interface LeftAngleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LeftAngleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/left-angle)
 * @see {@link https://clicons.dev/icon/left-angle}
 */
const LeftAngleIcon = React.forwardRef<SVGSVGElement, LeftAngleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21 5C20.6068 4.59544 19.5602 3 19 3C18.4398 3 17.3932 4.59544 17 5'
    }
  ],
  [
    'path',
    {
      d: 'M5 17C4.59544 17.3932 3 18.4398 3 19C3 19.5602 4.59544 20.6068 5 21'
    }
  ],
  [
    'path',
    {
      d: 'M19 12H18C15.1716 12 13.7574 12 12.8787 12.8787C12 13.7574 12 15.1716 12 18V19'
    }
  ],
  [
    'path',
    {
      d: 'M3 19H13C15.8284 19 17.2426 19 18.1213 18.1479C19 17.2959 19 15.9245 19 13.1818V3'
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

LeftAngleIcon.displayName = 'LeftAngleIcon';
export default LeftAngleIcon;
