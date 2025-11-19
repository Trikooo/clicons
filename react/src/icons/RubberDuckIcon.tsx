import React from 'react';
import config from '../config';

interface RubberDuckIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RubberDuckIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rubber-duck)
 * @see {@link https://clicons.dev/icon/rubber-duck}
 */
const RubberDuckIcon = React.forwardRef<SVGSVGElement, RubberDuckIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.50119 6V6.01'
    }
  ],
  [
    'path',
    {
      d: 'M4.62721 6C5.07125 4.27477 6.63735 3 8.50119 3C10.7103 3 12.5012 4.79086 12.5012 7C12.5012 8.19469 11.9774 9.26706 11.147 10H16.9784C18.3568 10 19.0012 8.88071 19.0012 7.5C22.5012 11 21.97 15 21.97 15C21.97 18.5 18.5012 21 13.0012 21H8.99192C5.95947 21 3.50119 18.5376 3.50119 15.5C3.50119 13.3105 4.7784 11.4198 6.62723 10.5348C5.96394 10.1824 5.41163 9.6488 5.03632 9M4.62721 6L2.00119 7C2.19128 8 3.06442 9 5.03632 9M4.62721 6L5.21434 6.85464C5.67228 7.52122 5.59786 8.41801 5.03632 9'
    }
  ],
  [
    'path',
    {
      d: 'M11.0012 18H12.5012C14.7103 18 17.5012 15.2091 17.5012 13H11.0012C9.62048 13 8.50119 14.1193 8.50119 15.5C8.50119 16.8807 9.62048 18 11.0012 18Z'
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

RubberDuckIcon.displayName = 'RubberDuckIcon';
export default RubberDuckIcon;
