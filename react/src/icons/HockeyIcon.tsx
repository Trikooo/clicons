import React from 'react';
import config from '../config';

interface HockeyIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HockeyIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hockey)
 * @see {@link https://clicons.dev/icon/hockey}
 */
const HockeyIcon = React.forwardRef<SVGSVGElement, HockeyIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11.8614 19.224L20.8481 3.72126C21.1689 3.16783 20.9654 2.47169 20.3905 2.15561C19.8259 1.8452 19.1047 2.01295 18.754 2.53628L8.61227 17.6689C8.23552 18.2311 7.46084 18.4113 6.85433 18.0778C6.04998 17.6356 6.17032 16.8476 6.44582 16.1473C6.70887 15.4787 6.42574 14.727 5.77639 14.37C4.91469 13.8963 4.03029 14.3288 3.57111 15.0861C2.25235 17.2611 3.35339 20.3548 5.48365 21.526C7.75091 22.7724 10.5962 21.4065 11.8614 19.224Z'
    }
  ],
  [
    'circle',
    {
      cx: '18.5',
      cy: '19.5',
      r: '2.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 7L18 8.5'
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

HockeyIcon.displayName = 'HockeyIcon';
export default HockeyIcon;
