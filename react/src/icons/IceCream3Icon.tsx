import React from 'react';
import config from '../config';

interface IceCream3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name IceCream3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ice-cream3)
 * @see {@link https://clicons.dev/icon/ice-cream3}
 */
const IceCream3Icon = React.forwardRef<SVGSVGElement, IceCream3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 2C9.00353 2 6.31715 4.74891 7.15597 7.78336C7.38917 8.627 6 8.96316 6 9.873C6 12.5824 10.5 9.83716 10.5 12.7868C10.5 14.4044 13 14.4044 13 12.7868C13 9.62712 18 12.8244 18 9.873C18 8.96316 16.6108 8.627 16.844 7.78336C17.6828 4.74891 14.9965 2 12 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 11L8.32693 13.9652C9.82073 19.3217 10.5676 22 12 22C13.4324 22 14.1793 19.3217 15.6731 13.9652L16.5 11'
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

IceCream3Icon.displayName = 'IceCream3Icon';
export default IceCream3Icon;
