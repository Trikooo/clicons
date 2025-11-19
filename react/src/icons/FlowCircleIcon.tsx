import React from 'react';
import config from '../config';

interface FlowCircleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FlowCircleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/flow-circle)
 * @see {@link https://clicons.dev/icon/flow-circle}
 */
const FlowCircleIcon = React.forwardRef<SVGSVGElement, FlowCircleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 4.5C18 5.88071 16.8807 7 15.5 7C14.1193 7 13 5.88071 13 4.5C13 3.11929 14.1193 2 15.5 2C16.8807 2 18 3.11929 18 4.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 19.5C18 20.8807 16.8807 22 15.5 22C14.1193 22 13 20.8807 13 19.5C13 18.1193 14.1193 17 15.5 17C16.8807 17 18 18.1193 18 19.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 4.50006L18 4.49997M6 7.99988C6 6.59542 6 5.89319 6.33706 5.38874C6.48298 5.17036 6.67048 4.98286 6.88886 4.83694C7.39331 4.49988 8.09554 4.49988 9.5 4.49988H13M22 19.5002L18 19.5001M6 16.0002C6 17.4046 6 18.1069 6.33706 18.6113C6.48298 18.8297 6.67048 19.0172 6.88886 19.1631C7.39331 19.5002 8.09554 19.5002 9.5 19.5002H13'
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

FlowCircleIcon.displayName = 'FlowCircleIcon';
export default FlowCircleIcon;
