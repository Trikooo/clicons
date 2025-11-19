import React from 'react';
import config from '../config';

interface SwipeRight3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SwipeRight3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/swipe-right3)
 * @see {@link https://clicons.dev/icon/swipe-right3}
 */
const SwipeRight3Icon = React.forwardRef<SVGSVGElement, SwipeRight3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.87124 12.671L8.00514 14.5V4.75C8.00514 3.7835 8.78864 3 9.75514 3C10.7216 3 11.5051 3.7835 11.5051 4.75V10L14.493 10.4776C16.4216 10.7669 17.386 10.9115 18.0652 11.3184C19.1872 11.9906 20 13 20 14.4736C20 15.5 19.7463 16.1886 19.1296 18.0387C18.7383 19.2127 18.5426 19.7996 18.2236 20.2643C17.6983 21.0293 16.9233 21.5878 16.0315 21.8442C15.4898 22 14.8711 22 13.6336 22H12.5847C10.9395 22 10.1169 22 9.38462 21.6981C9.25329 21.644 9.12494 21.5829 9.00012 21.5151C8.30405 21.1371 7.78533 20.4987 6.74791 19.2219L3.38941 15.0883C2.87331 14.4531 2.86987 13.5441 3.38114 12.905C3.99565 12.1369 5.12437 12.0308 5.87124 12.671Z'
    }
  ],
  [
    'path',
    {
      d: 'M21 4.5L15 4.5M21 4.5C21 3.79977 19.0057 2.49153 18.5 2M21 4.5C21 5.20023 19.0057 6.50847 18.5 7'
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

SwipeRight3Icon.displayName = 'SwipeRight3Icon';
export default SwipeRight3Icon;
