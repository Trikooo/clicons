import React from 'react';
import config from '../config';

interface CloudMidSnowIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CloudMidSnowIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cloud-mid-snow)
 * @see {@link https://clicons.dev/icon/cloud-mid-snow}
 */
const CloudMidSnowIcon = React.forwardRef<SVGSVGElement, CloudMidSnowIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.4776 8.81069C17.485 8.81066 17.4925 8.81064 17.5 8.81064C19.9853 8.81064 22 10.7618 22 13.1686C22 15.4118 20.25 17.2591 18 17.5M17.4776 8.81069C17.4924 8.65119 17.5 8.48966 17.5 8.32642C17.5 5.38472 15.0376 3 12 3C9.12324 3 6.76233 5.13891 6.52042 7.86418M17.4776 8.81069C17.3753 9.90933 16.9286 10.9118 16.2428 11.716M6.52042 7.86418C3.98398 8.09794 2 10.1668 2 12.6844C2 15.027 3.71776 17.0514 6 17.5M6.52042 7.86418C6.67826 7.84964 6.83823 7.8422 7 7.8422C8.12582 7.8422 9.16474 8.20254 10.0005 8.81064'
    }
  ],
  [
    'path',
    {
      d: 'M12 15V21M14.5 16.5L9.50013 19.5M9.5 16.5L14.4999 19.5'
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

CloudMidSnowIcon.displayName = 'CloudMidSnowIcon';
export default CloudMidSnowIcon;
