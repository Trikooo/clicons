import React from 'react';
import config from '../config';

interface MoneyExchange3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MoneyExchange3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/money-exchange3)
 * @see {@link https://clicons.dev/icon/money-exchange3}
 */
const MoneyExchange3Icon = React.forwardRef<SVGSVGElement, MoneyExchange3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 12C3 8.68286 5.68286 6 9 6L8 8'
    }
  ],
  [
    'path',
    {
      d: 'M21 12C21 15.3171 18.3171 18 15 18L16 16'
    }
  ],
  [
    'path',
    {
      d: 'M18 9H15C13.5858 9 12.8787 9 12.4393 8.56066C12 8.12132 12 7.41421 12 6C12 4.58579 12 3.87868 12.4393 3.43934C12.8787 3 13.5858 3 15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6C21 7.41421 21 8.12132 20.5607 8.56066C20.1213 9 19.4142 9 18 9Z'
    }
  ],
  [
    'path',
    {
      d: 'M9 21H6C4.58579 21 3.87868 21 3.43934 20.5607C3 20.1213 3 19.4142 3 18C3 16.5858 3 15.8787 3.43934 15.4393C3.87868 15 4.58579 15 6 15H9C10.4142 15 11.1213 15 11.5607 15.4393C12 15.8787 12 16.5858 12 18C12 19.4142 12 20.1213 11.5607 20.5607C11.1213 21 10.4142 21 9 21Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.4998 6H16.5087'
    }
  ],
  [
    'path',
    {
      d: 'M7.49976 18H7.50874'
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

MoneyExchange3Icon.displayName = 'MoneyExchange3Icon';
export default MoneyExchange3Icon;
