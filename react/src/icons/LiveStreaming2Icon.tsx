import React from 'react';
import config from '../config';

interface LiveStreaming2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LiveStreaming2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/live-streaming2)
 * @see {@link https://clicons.dev/icon/live-streaming2}
 */
const LiveStreaming2Icon = React.forwardRef<SVGSVGElement, LiveStreaming2IconProps>(
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
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 8C6.5 9 6 10.5 6 12C6 13.5 6.5 15 7.5 16'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 6C3 7.5 2 9.5 2 12C2 14.5 3 16.5 4.5 18'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 16C17.5 15 18 13.5 18 12C18 10.5 17.5 9 16.5 8'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 18C21 16.5 22 14.5 22 12C22 9.5 21 7.5 19.5 6'
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

LiveStreaming2Icon.displayName = 'LiveStreaming2Icon';
export default LiveStreaming2Icon;
