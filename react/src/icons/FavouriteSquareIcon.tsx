import React from 'react';
import config from '../config';

interface FavouriteSquareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FavouriteSquareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/favourite-square)
 * @see {@link https://clicons.dev/icon/favourite-square}
 */
const FavouriteSquareIcon = React.forwardRef<SVGSVGElement, FavouriteSquareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 12C2 7.75736 2 5.63604 3.31802 4.31802C4.63604 3 6.75736 3 11 3C15.2426 3 17.364 3 18.682 4.31802C20 5.63604 20 7.75736 20 12C20 16.2426 20 18.364 18.682 19.682C17.364 21 15.2426 21 11 21C6.75736 21 4.63604 21 3.31802 19.682C2 18.364 2 16.2426 2 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 16.5C11 16.5 6 13.3235 6 10.25C6 8.73122 7.05263 7.5 8.5 7.5C9.25 7.5 10 7.76471 11 8.82353C12 7.76471 12.75 7.5 13.5 7.5C14.9474 7.5 16 8.73122 16 10.25C16 13.3235 11 16.5 11 16.5Z'
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

FavouriteSquareIcon.displayName = 'FavouriteSquareIcon';
export default FavouriteSquareIcon;
