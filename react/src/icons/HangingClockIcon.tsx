import React from 'react';
import config from '../config';

interface HangingClockIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HangingClockIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hanging-clock)
 * @see {@link https://clicons.dev/icon/hanging-clock}
 */
const HangingClockIcon = React.forwardRef<SVGSVGElement, HangingClockIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '17.5',
      cy: '4.5',
      r: '1.5'
    }
  ],
  [
    'circle',
    {
      cx: '17.5',
      cy: '15.5',
      r: '4.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 8H20'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 6V11'
    }
  ],
  [
    'path',
    {
      d: 'M2 6V21'
    }
  ],
  [
    'path',
    {
      d: 'M2 20C2 13.3726 7.37258 8 14 8'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 16.5L17.5 16V14'
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
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'bevel';
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

HangingClockIcon.displayName = 'HangingClockIcon';
export default HangingClockIcon;
