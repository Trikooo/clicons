import React from 'react';
import config from '../config';

interface BabyIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BabyIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/baby)
 * @see {@link https://clicons.dev/icon/baby}
 */
const BabyIcon = React.forwardRef<SVGSVGElement, BabyIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '12',
      cy: '12',
      r: '10'
    }
  ],
  [
    'path',
    {
      d: 'M14 16C13.4271 16.6318 12.7395 17 12 17C11.2605 17 10.5729 16.6318 10 16'
    }
  ],
  [
    'path',
    {
      d: 'M9 11.5C8.71357 11.1841 8.36974 11 8 11C7.63026 11 7.28643 11.1841 7 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M17 11.5C16.7136 11.1841 16.3697 11 16 11C15.6303 11 15.2864 11.1841 15 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C12.7684 8 13.4692 7.71115 14 7.23611'
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

BabyIcon.displayName = 'BabyIcon';
export default BabyIcon;
