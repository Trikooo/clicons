import React from 'react';
import config from '../config';

interface RotateLeft4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RotateLeft4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rotate-left4)
 * @see {@link https://clicons.dev/icon/rotate-left4}
 */
const RotateLeft4Icon = React.forwardRef<SVGSVGElement, RotateLeft4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.14735 11.9194C4.52418 11.5654 3.7212 11.7864 3.35385 12.4132C2.98649 13.0399 3.19387 13.835 3.81703 14.1891L5.32148 15.0439M5.14735 11.9194L3.64289 11.0646C3.01973 10.7105 2.81236 9.91547 3.17971 9.28871C3.54707 8.66196 4.35004 8.44091 4.9732 8.79499L6.10145 9.43626M5.14735 11.9194L9.28456 14.2702M5.32148 15.0439C4.69832 14.6899 3.89534 14.9109 3.52799 15.5377C3.16063 16.1644 3.368 16.9595 3.99117 17.3136L8.63 19.9494C10.2648 20.8783 11.0822 21.3427 11.8798 21.462C12.3425 21.5313 13.0486 21.4215 13.5761 21.3127C14.0324 21.2186 14.5093 21.273 14.9093 21.5003L15.7854 21.998M5.32148 15.0439L8.70648 16.9673M6.10145 9.43626C5.47866 9.08205 5.27148 8.28717 5.63874 7.66058C6.0061 7.03382 6.80907 6.81278 7.43223 7.16685L13.7974 10.7833L13.2933 8.86278C13.0721 8.02011 13.6403 7.16195 14.5112 7.02339C15.1776 6.91736 15.8247 7.27166 16.0845 7.88474L17.9471 12.5734C18.3035 13.4705 19.1576 14.3331 19.998 14.8107M6.10145 9.43626L9.86257 11.5733'
    }
  ],
  [
    'path',
    {
      d: 'M9.36287 4.96465C9.75977 5.3603 11.4864 5.24616 12.1233 5.16671M9.36287 4.96465C8.96598 4.56901 8.95462 2.63697 9.03431 2.00208M9.36287 4.96465C10.3839 3.19642 14.4435 0.375874 18.4719 3.19642C20.4185 4.55942 20.6932 5.41838 21.0011 5.99381'
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

RotateLeft4Icon.displayName = 'RotateLeft4Icon';
export default RotateLeft4Icon;
