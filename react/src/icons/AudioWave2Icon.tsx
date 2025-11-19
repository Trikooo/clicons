import React from 'react';
import config from '../config';

interface AudioWave2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AudioWave2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/audio-wave2)
 * @see {@link https://clicons.dev/icon/audio-wave2}
 */
const AudioWave2Icon = React.forwardRef<SVGSVGElement, AudioWave2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 14V9.5C3 8.67157 3.67157 8 4.5 8C5.32843 8 6 8.67157 6 9.5V16.5C6 17.3284 6.67157 18 7.5 18C8.32843 18 9 17.3284 9 16.5V4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5V19.5C12 20.3284 12.6716 21 13.5 21C14.3284 21 15 20.3284 15 19.5V8.5C15 7.67157 15.6716 7 16.5 7C17.3284 7 18 7.67157 18 8.5V15.5C18 16.3284 18.6716 17 19.5 17C20.3284 17 21 16.3284 21 15.5V12'
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

AudioWave2Icon.displayName = 'AudioWave2Icon';
export default AudioWave2Icon;
