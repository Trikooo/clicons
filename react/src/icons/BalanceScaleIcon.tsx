import React from 'react';
import config from '../config';

interface BalanceScaleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BalanceScaleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/balance-scale)
 * @see {@link https://clicons.dev/icon/balance-scale}
 */
const BalanceScaleIcon = React.forwardRef<SVGSVGElement, BalanceScaleIconProps>(
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
      cy: '5',
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M10 5H4M14 5H20'
    }
  ],
  [
    'path',
    {
      d: 'M17 21H7'
    }
  ],
  [
    'path',
    {
      d: 'M12 7V21'
    }
  ],
  [
    'path',
    {
      d: 'M22 14C22 15.6569 20.6569 17 19 17C17.3431 17 16 15.6569 16 14M22 14L19.5 8H18.5L16 14M22 14H16'
    }
  ],
  [
    'path',
    {
      d: 'M8 14C8 15.6569 6.65685 17 5 17C3.34315 17 2 15.6569 2 14M8 14L5.5 8H4.5L2 14M8 14H2'
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

BalanceScaleIcon.displayName = 'BalanceScaleIcon';
export default BalanceScaleIcon;
