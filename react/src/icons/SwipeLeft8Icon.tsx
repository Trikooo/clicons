import React from 'react';
import config from '../config';

interface SwipeLeft8IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SwipeLeft8Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/swipe-left8)
 * @see {@link https://clicons.dev/icon/swipe-left8}
 */
const SwipeLeft8Icon = React.forwardRef<SVGSVGElement, SwipeLeft8IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.0078 4.49698H20.9994M15.0078 4.49698C15.0078 3.7976 16.9993 2.49094 17.5043 2M15.0078 4.49698C15.0078 5.19637 16.9993 6.50303 17.5043 6.99397'
    }
  ],
  [
    'path',
    {
      d: 'M6.53624 14.4462V9.97685M6.53624 9.97685V4.45468C6.53624 3.63404 7.22077 2.97266 8.04222 2.97266C8.86367 2.97266 9.51096 3.63404 9.51096 4.45468V8.45574M6.53624 9.97685C5.21914 11.1692 3.80181 12.6755 3.61094 13.0613C2.72287 14.4119 2.81595 15.0657 3.80565 16.7182C4.64626 18.1217 5.77675 19.6794 5.84275 19.7541C6.51441 20.5146 6.38087 20.5147 7.3544 21.2287C8.22374 21.8315 10.027 22.2515 14.2543 21.8315C17.6981 21.3001 18.5232 18.2969 18.5053 16.8617V13.3175C18.7198 10.3717 17.4873 10.2387 15.2494 9.94876M9.51096 8.45574V10.9825M9.51096 8.45574C10.0694 7.54589 12.0977 7.91358 12.4931 9.6317M12.5288 10.9785V9.97685C12.5288 9.89788 12.5249 9.81866 12.5137 9.74054M12.4931 9.6317C12.4947 9.63893 12.4964 9.64618 12.498 9.65346C12.5043 9.68229 12.5095 9.71134 12.5137 9.74054M12.4931 9.6317C12.4972 9.66671 12.504 9.70299 12.5137 9.74054M12.4931 9.6317C12.3527 8.43417 15.3901 8.72609 15.5138 10.8321V11.9768'
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

SwipeLeft8Icon.displayName = 'SwipeLeft8Icon';
export default SwipeLeft8Icon;
