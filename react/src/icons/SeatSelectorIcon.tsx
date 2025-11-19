import React from 'react';
import config from '../config';

interface SeatSelectorIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SeatSelectorIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/seat-selector)
 * @see {@link https://clicons.dev/icon/seat-selector}
 */
const SeatSelectorIcon = React.forwardRef<SVGSVGElement, SeatSelectorIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 18V11.5C7 10.6716 6.32843 10 5.5 10C4.67157 10 4 10.6716 4 11.5V16C4 17.1046 4.89543 18 6 18H7Z'
    }
  ],
  [
    'path',
    {
      d: 'M20 16V11.5C20 10.6716 19.3284 10 18.5 10C17.6716 10 17 10.6716 17 11.5V18H18C19.1046 18 20 17.1046 20 16Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 14H7V18H17V14Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 22H9.5V18H14.5V22Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 22H17'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 10V8C18.5 5.17157 18.5 3.75736 17.6213 2.87868C16.7426 2 15.3284 2 12.5 2H11.5C8.67157 2 7.25736 2 6.37868 2.87868C5.5 3.75736 5.5 5.17157 5.5 8V10'
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

SeatSelectorIcon.displayName = 'SeatSelectorIcon';
export default SeatSelectorIcon;
