import React from 'react';
import config from '../config';

interface Shaka4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Shaka4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/shaka4)
 * @see {@link https://clicons.dev/icon/shaka4}
 */
const Shaka4Icon = React.forwardRef<SVGSVGElement, Shaka4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.51147 10C7.51147 9.17162 8.18247 8.50004 9.01019 8.50004C9.83792 8.50004 10.5089 9.17162 10.5089 10M7.51147 10L6.2653 3.88298C6.1371 3.08598 5.44981 2.5 4.64324 2.5C3.64488 2.5 2.87728 3.38384 3.01631 4.37332L4.51402 13.1669C4.51402 13.1669 4.8418 16.1847 5.17257 17.0498C5.57664 18.6894 6.51232 19.7414 6.51232 21.5002M7.51147 10V12C7.51147 12.8285 8.18247 13.5 9.01019 13.5C9.83792 13.5 10.5089 12.8285 10.5089 12V11.5001M13.5064 9.00004C13.5067 8.17191 14.1776 7.50068 15.0051 7.50068C15.8328 7.50068 16.5038 8.17226 16.5038 9.00068L16.5036 11C16.5036 11.8285 15.8326 12.5 15.0049 12.5C14.1772 12.5 13.5062 11.8285 13.5062 11M13.5064 9.00004L13.5062 11M13.5064 9.00004V9.50004C13.5064 8.67162 12.8354 8.00004 12.0076 8.00004C11.1799 8.00004 10.5089 8.67162 10.5089 9.50004V11.5001M13.5062 11L13.5062 11.5C13.5063 12.3284 12.8353 13 12.0076 13C11.1799 13 10.5089 12.3285 10.5089 11.5001M16.5038 12.9625L18.1227 11.3371C18.8331 10.6239 20.0031 10.689 20.6307 11.4765C21.1108 12.0791 21.1241 12.9316 20.6629 13.549L17.0663 18.1472C16.3781 19.0269 16.0042 20.3829 16.0042 21.5002'
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

Shaka4Icon.displayName = 'Shaka4Icon';
export default Shaka4Icon;
