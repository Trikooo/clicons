import React from 'react';
import config from '../config';

interface WazeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WazeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/waze)
 * @see {@link https://clicons.dev/icon/waze}
 */
const WazeIcon = React.forwardRef<SVGSVGElement, WazeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.5 9V9.01'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 9V9.01'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 13C10.5 13 11.5 15 14 15C16.5 15 17.5 13 17.5 13'
    }
  ],
  [
    'path',
    {
      d: 'M11 20C11 21.1046 10.1046 22 9 22C7.89543 22 7 21.1046 7 20C7 18.8954 7.89543 18 9 18C10.1046 18 11 18.8954 11 20Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.9992 19.9446C11.6843 19.9866 12.3573 20 13 20C17.9706 20 22 15.9706 22 11C22 6.02944 17.9706 2 13 2C8.02944 2 4 6.02944 4 11C4 12.039 4 14 2 15C3.05768 17.3798 4.97354 18.6409 7.12557 19.3009'
    }
  ],
  [
    'path',
    {
      d: 'M17 22.0003C18.1046 22.0003 19 21.1049 19 20.0003C19 19.3295 18.6698 18.7359 18.163 18.373C17.2278 19.0291 16.1621 19.5118 15.0126 19.7744C15.0043 19.8486 15 19.9239 15 20.0003C15 21.1049 15.8954 22.0003 17 22.0003Z'
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

WazeIcon.displayName = 'WazeIcon';
export default WazeIcon;
