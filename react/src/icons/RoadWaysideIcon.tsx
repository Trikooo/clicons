import React from 'react';
import config from '../config';

interface RoadWaysideIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RoadWaysideIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/road-wayside)
 * @see {@link https://clicons.dev/icon/road-wayside}
 */
const RoadWaysideIcon = React.forwardRef<SVGSVGElement, RoadWaysideIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.5 2.5C15.5 5.32843 15.5 6.74264 16.3787 7.62132C17.2574 8.5 18.6716 8.5 21.5 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 21.5C15.5 18.6716 15.5 17.2574 16.3787 16.3787C17.2574 15.5 18.6716 15.5 21.5 15.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 2.5C8.5 5.32843 8.5 6.74264 7.62132 7.62132C6.74264 8.5 5.32843 8.5 2.5 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 21.5C8.5 18.6716 8.5 17.2574 7.62132 16.3787C6.74264 15.5 5.32843 15.5 2.5 15.5'
    }
  ],
  [
    'path',
    {
      d: 'M15 12.0001C15 13.657 13.6569 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 10.3433 10.3431 9.00012 12 9.00012C13.6569 9.00012 15 10.3433 15 12.0001Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 2.5V4.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 12L19.5 12'
    }
  ],
  [
    'path',
    {
      d: 'M12 19.5V21.5'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 12L2.5 12'
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

RoadWaysideIcon.displayName = 'RoadWaysideIcon';
export default RoadWaysideIcon;
