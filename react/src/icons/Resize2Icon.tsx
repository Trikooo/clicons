import React from 'react';
import config from '../config';

interface Resize2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Resize2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/resize2)
 * @see {@link https://clicons.dev/icon/resize2}
 */
const Resize2Icon = React.forwardRef<SVGSVGElement, Resize2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.36734 12.171L9.50123 14V4.25C9.50123 3.2835 10.2847 2.5 11.2512 2.5C12.2177 2.5 13.0012 3.2835 13.0012 4.25V9.5L15.9891 9.97757C17.9177 10.2669 18.8821 10.4115 19.5613 10.8184C20.6833 11.4906 21.4961 12.5 21.4961 13.9736C21.4961 15 21.2424 15.6886 20.6257 17.5387C20.2344 18.7127 20.0387 19.2996 19.7197 19.7643C19.1944 20.5293 18.4194 21.0878 17.5276 21.3442C16.9859 21.5 16.3672 21.5 15.1297 21.5H14.0808C12.4356 21.5 11.613 21.5 10.8807 21.1981C10.7494 21.144 10.621 21.0829 10.4962 21.0151C9.80014 20.6371 9.28143 19.9987 8.244 18.7219L4.8855 14.5883C4.36941 13.9531 4.36596 13.0441 4.87723 12.405C5.49174 11.6369 6.62046 11.5308 7.36734 12.171Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 4.5L20 4.5M16 4.5C16 5.06018 17.4943 6.10678 18 6.5M16 4.5C16 3.93982 17.4943 2.89322 18 2.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 4.5L2.5 4.5M6.5 4.5C6.5 3.93982 5.0057 2.89322 4.5 2.5M6.5 4.5C6.5 5.06018 5.0057 6.10678 4.5 6.5'
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

Resize2Icon.displayName = 'Resize2Icon';
export default Resize2Icon;
