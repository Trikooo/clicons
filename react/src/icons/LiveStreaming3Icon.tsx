import React from 'react';
import config from '../config';

interface LiveStreaming3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LiveStreaming3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/live-streaming3)
 * @see {@link https://clicons.dev/icon/live-streaming3}
 */
const LiveStreaming3Icon = React.forwardRef<SVGSVGElement, LiveStreaming3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.5376 18.592C14.4312 19.5 12.7875 19.5 9.5 19.5C6.21252 19.5 4.56878 19.5 3.46243 18.592C3.25989 18.4258 3.07418 18.2401 2.90796 18.0376C2 16.9312 2 15.2875 2 12C2 8.71252 2 7.06878 2.90796 5.96243C3.07418 5.75989 3.25989 5.57418 3.46243 5.40796C4.56878 4.5 6.21252 4.5 9.5 4.5C12.7875 4.5 14.4312 4.5 15.5376 5.40796C15.7401 5.57418 15.9258 5.75989 16.092 5.96243C17 7.06878 17 8.71252 17 12C17 15.2875 17 16.9312 16.092 18.0376C15.9258 18.2401 15.7401 18.4258 15.5376 18.592Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 13V11L19.6 7.53333C19.8518 7.19759 20.247 7 20.6667 7C21.403 7 22 7.59695 22 8.33333V15.6667C22 16.403 21.403 17 20.6667 17C20.247 17 19.8518 16.8024 19.6 16.4667L17 13Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 13.5C10.3284 13.5 11 12.8284 11 12C11 11.1716 10.3284 10.5 9.5 10.5M9.5 13.5C8.67157 13.5 8 12.8284 8 12C8 11.1716 8.67157 10.5 9.5 10.5M9.5 13.5V10.5'
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

LiveStreaming3Icon.displayName = 'LiveStreaming3Icon';
export default LiveStreaming3Icon;
