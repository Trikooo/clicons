import React from 'react';
import config from '../config';

interface Logout4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Logout4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/logout4)
 * @see {@link https://clicons.dev/icon/logout4}
 */
const Logout4Icon = React.forwardRef<SVGSVGElement, Logout4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 17.499C15 18.429 15 18.894 14.8978 19.2755C14.6204 20.3108 13.8117 21.1194 12.7765 21.3968C12.395 21.499 11.93 21.499 11 21.499H9C6.17157 21.499 4.75736 21.499 3.87868 20.6204C3 19.7417 3 18.3275 3 15.499V8.50113C3 5.67292 3 4.25882 3.87859 3.38015C4.75718 2.50149 6.17129 2.50137 8.9995 2.50113L11.0016 2.50097C11.9298 2.50089 12.394 2.50085 12.7748 2.60266C13.8113 2.87976 14.621 3.68933 14.8982 4.72584C15 5.10667 15 5.5708 15 6.49904'
    }
  ],
  [
    'path',
    {
      d: 'M15 19.501C17.8284 19.501 19.2426 19.501 20.1213 18.6223C21 17.7436 21 16.3294 21 13.501V10.501C21 7.67253 21 6.25832 20.1213 5.37964C19.2426 4.50096 17.8284 4.50096 15 4.50096'
    }
  ],
  [
    'path',
    {
      d: 'M16 12.001H9M14.5001 9.50096C14.5001 9.50096 17 11.3422 17 12.001C17 12.6598 14.5 14.501 14.5 14.501'
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

Logout4Icon.displayName = 'Logout4Icon';
export default Logout4Icon;
