import React from 'react';
import config from '../config';

interface MoneyNotFound3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MoneyNotFound3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/money-not-found3)
 * @see {@link https://clicons.dev/icon/money-not-found3}
 */
const MoneyNotFound3Icon = React.forwardRef<SVGSVGElement, MoneyNotFound3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 3L21 21'
    }
  ],
  [
    'path',
    {
      d: 'M10.2321 10.2322C9.77966 10.6846 9.49982 11.3096 9.49982 12C9.49982 13.3807 10.6191 14.5 11.9998 14.5C12.6902 14.5 13.3152 14.2202 13.7676 13.7677'
    }
  ],
  [
    'path',
    {
      d: 'M21.6567 17.6567C21.8699 17.3788 22 17.0452 22 16.6823V6.92705C22 6.35889 21.6756 5.84452 21.1329 5.67632C20.1903 5.38421 18.4794 5 16 5C13.3535 5 11.8276 5.56032 9.79122 5.79122M18.2194 18.2194C17.5647 18.1519 16.8248 18.1094 16 18.1094C11.2491 18.1094 10.1096 19.9151 3.1448 18.3792C2.47265 18.231 2 17.6265 2 16.9382V6.92116C2 5.94531 2.92079 5.23366 3.87798 5.42361C4.54928 5.55682 5.16308 5.65694 5.72951 5.72951'
    }
  ],
  [
    'path',
    {
      d: 'M2.00049 14.4961C4.20963 14.4961 6.00049 16.287 6.00049 18.4961M22 9.46899C20.2655 9.46899 18.5005 7.53964 18.5005 5.5M2 9C3.89206 9 5.59814 7.50048 5.90439 5.90439M19.6804 15.6804C20.3523 15.2499 21.1706 15 22 15'
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

MoneyNotFound3Icon.displayName = 'MoneyNotFound3Icon';
export default MoneyNotFound3Icon;
