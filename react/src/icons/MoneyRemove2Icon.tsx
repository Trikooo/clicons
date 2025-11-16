import React from 'react';
import config from '../config';

interface MoneyRemove2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MoneyRemove2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/money-remove2)
 * @see {@link https://clicons.dev/icon/money-remove2}
 */
const MoneyRemove2Icon = React.forwardRef<SVGSVGElement, MoneyRemove2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.4998 11C14.4998 12.3807 13.3805 13.5 11.9998 13.5C10.6191 13.5 9.49982 12.3807 9.49982 11C9.49982 9.61929 10.6191 8.5 11.9998 8.5C13.3805 8.5 14.4998 9.61929 14.4998 11Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 12.5V5.92705C22 5.35889 21.6756 4.84452 21.1329 4.67632C20.1903 4.38421 18.4794 4 16 4C11.4209 4 10.1967 5.67747 3.87798 4.42361C2.92079 4.23366 2 4.94531 2 5.92116V15.9382C2 16.6265 2.47265 17.231 3.1448 17.3792C9.59373 18.8013 11.0483 17.3585 15 17.137'
    }
  ],
  [
    'path',
    {
      d: 'M2 8C3.95133 8 5.70483 6.40507 5.92901 4.75417M18.5005 4.5C18.5005 6.53964 20.2655 8.46899 22 8.46899M6.00049 17.4961C6.00049 15.287 4.20963 13.4961 2.00049 13.4961'
    }
  ],
  [
    'path',
    {
      d: 'M22 15.5L19.75 17.75M19.75 17.75L17.5 20M19.75 17.75L17.5 15.5M19.75 17.75L22 20'
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

MoneyRemove2Icon.displayName = 'MoneyRemove2Icon';
export default MoneyRemove2Icon;
