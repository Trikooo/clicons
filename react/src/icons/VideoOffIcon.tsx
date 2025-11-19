import React from 'react';
import config from '../config';

interface VideoOffIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name VideoOffIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/video-off)
 * @see {@link https://clicons.dev/icon/video-off}
 */
const VideoOffIcon = React.forwardRef<SVGSVGElement, VideoOffIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.00189 1.99988L21.9772 21.9999'
    }
  ],
  [
    'path',
    {
      d: 'M16.8516 16.8677C16.7224 17.8061 16.4665 18.4668 15.9595 18.9744C14.9356 19.9996 13.2877 19.9996 9.992 19.9996H8.99323C5.69749 19.9996 4.04961 19.9996 3.02575 18.9744C2.00189 17.9493 2.00189 16.2994 2.00189 12.9996V10.9996C2.00189 7.69971 2.00189 6.04979 3.02575 5.02466C3.36827 4.68172 3.78062 4.45351 4.30114 4.30164'
    }
  ],
  [
    'path',
    {
      d: 'M8.23627 4.0004C8.47815 3.99988 8.72995 3.99988 8.99217 3.99988H9.99093C13.2867 3.99988 14.9346 3.99988 15.9584 5.02501C16.9822 6.05013 16.9822 7.70005 16.9822 10.9999V12.7573M16.9822 9.2313L19.3018 7.52901C20.7729 6.54061 21.4489 7.17184 21.6674 7.64835C22.1191 8.92801 21.9768 11.3935 21.9768 14.5416C21.8703 16.5549 21.5952 16.7718 21.3137 16.9938L21.3107 16.9961'
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

VideoOffIcon.displayName = 'VideoOffIcon';
export default VideoOffIcon;
