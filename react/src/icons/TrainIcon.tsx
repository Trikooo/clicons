import React from 'react';
import config from '../config';

interface TrainIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TrainIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/train)
 * @see {@link https://clicons.dev/icon/train}
 */
const TrainIcon = React.forwardRef<SVGSVGElement, TrainIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 11V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V11C20 14.7712 20 16.6569 18.8284 17.8284C17.6569 19 15.7712 19 12 19C8.22876 19 6.34315 19 5.17157 17.8284C4 16.6569 4 14.7712 4 11Z'
    }
  ],
  [
    'path',
    {
      d: 'M4 12C4 12 7.73333 13 12 13C16.2667 13 20 12 20 12'
    }
  ],
  [
    'path',
    {
      d: 'M7 19L5 22'
    }
  ],
  [
    'path',
    {
      d: 'M17 19L19 22'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 16H6.5'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 16H19.5'
    }
  ],
  [
    'path',
    {
      d: 'M5 5H19'
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

TrainIcon.displayName = 'TrainIcon';
export default TrainIcon;
