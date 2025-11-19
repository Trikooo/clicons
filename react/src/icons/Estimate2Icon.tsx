import React from 'react';
import config from '../config';

interface Estimate2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Estimate2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/estimate2)
 * @see {@link https://clicons.dev/icon/estimate2}
 */
const Estimate2Icon = React.forwardRef<SVGSVGElement, Estimate2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.5 11V7.3C17.5 5.03726 17.5 3.90589 16.7247 3.20294C15.9494 2.5 14.7016 2.5 12.2059 2.5H7.79412C5.29845 2.5 4.05061 2.5 3.27531 3.20294C2.5 3.90589 2.5 5.03726 2.5 7.3V13.7C2.5 15.9627 2.5 17.0941 3.27531 17.7971C4.05061 18.5 5.29845 18.5 7.79412 18.5H11'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 6.5L14.5 6.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 10.5H6.5'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 10.5H10.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 10.5H14.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 14.5H6.5'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 14.5H10.5'
    }
  ],
  [
    'circle',
    {
      cx: '17.5',
      cy: '17.5',
      r: '4'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 18L17.5 17.5V16'
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

Estimate2Icon.displayName = 'Estimate2Icon';
export default Estimate2Icon;
