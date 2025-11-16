import React from 'react';
import config from '../config';

interface Directions2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Directions2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/directions2)
 * @see {@link https://clicons.dev/icon/directions2}
 */
const Directions2Icon = React.forwardRef<SVGSVGElement, Directions2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.1961 3.19938C17.7215 2.6096 17.4842 2.3147 17.1597 2.15735C16.8353 2 16.4646 2 15.7232 2H13.6095C12.8508 2 12.4714 2 12.2357 2.24408C12 2.48816 12 2.88099 12 3.66667V7H15.7232C16.4646 7 16.8353 7 17.1597 6.84265C17.4842 6.6853 17.7215 6.3904 18.1961 5.80061L18.3841 5.56697C18.7947 5.0568 19 4.80171 19 4.5C19 4.19829 18.7947 3.9432 18.3841 3.43303L18.1961 3.19938Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.1961 12.1994C17.7215 11.6096 17.4842 11.3147 17.1597 11.1574C16.8353 11 16.4646 11 15.7232 11H12V16H15.7232C16.4646 16 16.8353 16 17.1597 15.8426C17.4842 15.6853 17.7215 15.3904 18.1961 14.8006L18.3841 14.567C18.7947 14.0568 19 13.8017 19 13.5C19 13.1983 18.7947 12.9432 18.3841 12.433L18.1961 12.1994Z'
    }
  ],
  [
    'path',
    {
      d: 'M5.80388 8.19938C6.27851 7.6096 6.51583 7.3147 6.84026 7.15735C7.16469 7 7.53539 7 8.2768 7H12V12H8.2768C7.53539 12 7.16469 12 6.84026 11.8426C6.51583 11.6853 6.27851 11.3904 5.80388 10.8006L5.61585 10.567C5.20528 10.0568 5 9.80171 5 9.5C5 9.19829 5.20528 8.9432 5.61585 8.43303L5.80388 8.19938Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 22L12 3'
    }
  ],
  [
    'path',
    {
      d: 'M9 22H15'
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

Directions2Icon.displayName = 'Directions2Icon';
export default Directions2Icon;
