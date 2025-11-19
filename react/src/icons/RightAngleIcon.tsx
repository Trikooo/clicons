import React from 'react';
import config from '../config';

interface RightAngleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RightAngleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/right-angle)
 * @see {@link https://clicons.dev/icon/right-angle}
 */
const RightAngleIcon = React.forwardRef<SVGSVGElement, RightAngleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 5C3.39322 4.59544 4.43982 3 5 3C5.56018 3 6.60678 4.59544 7 5'
    }
  ],
  [
    'path',
    {
      d: 'M19 17C19.4046 17.3932 21 18.4398 21 19C21 19.5602 19.4046 20.6068 19 21'
    }
  ],
  [
    'path',
    {
      d: 'M5 12H6C8.82843 12 10.2426 12 11.1213 12.8787C12 13.7574 12 15.1716 12 18V19'
    }
  ],
  [
    'path',
    {
      d: 'M21 19H11C8.17157 19 6.75736 19 5.87868 18.1213C5 17.2426 5 15.8284 5 13L5 3'
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

RightAngleIcon.displayName = 'RightAngleIcon';
export default RightAngleIcon;
