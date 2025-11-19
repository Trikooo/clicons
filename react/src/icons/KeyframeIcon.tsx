import React from 'react';
import config from '../config';

interface KeyframeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KeyframeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/keyframe)
 * @see {@link https://clicons.dev/icon/keyframe}
 */
const KeyframeIcon = React.forwardRef<SVGSVGElement, KeyframeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.38188 5.00507C10.5901 3.66836 11.1943 3 12 3C12.8057 3 13.4099 3.66836 14.6181 5.00507L17.5897 8.29254C19.1966 10.0702 20 10.9591 20 12C20 13.0409 19.1966 13.9298 17.5897 15.7075L14.6181 18.9949C13.4099 20.3316 12.8057 21 12 21C11.1943 21 10.5901 20.3316 9.38188 18.9949L6.41031 15.7075C4.80344 13.9298 4 13.0409 4 12C4 10.9591 4.80344 10.0702 6.41031 8.29254L9.38188 5.00507Z'
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

KeyframeIcon.displayName = 'KeyframeIcon';
export default KeyframeIcon;
