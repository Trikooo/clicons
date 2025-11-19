import React from 'react';
import config from '../config';

interface SwipeRight7IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SwipeRight7Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/swipe-right7)
 * @see {@link https://clicons.dev/icon/swipe-right7}
 */
const SwipeRight7Icon = React.forwardRef<SVGSVGElement, SwipeRight7IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.5 12V14.6667C19.5 16.84 19.5 17.9267 19.1689 18.7918C18.6627 20.1148 17.6207 21.1601 16.3019 21.6679C15.4395 22 14.3562 22 12.1896 22C11.0534 22 10.4853 22 9.95658 21.8834C9.14995 21.7056 8.40001 21.3294 7.77419 20.7888C7.36398 20.4344 7.02311 19.9785 6.34137 19.0667L3.33738 15.0487C2.8758 14.4314 2.88907 13.5789 3.36965 12.9763C3.99772 12.1888 5.16877 12.1237 5.8797 12.8369L7.5 14.4623V4.5C7.5 3.67157 8.17157 3 9 3C9.82843 3 10.5 3.67157 10.5 4.5V8M10.5 8H11.5C12.6046 8 13.5 8.89543 13.5 10M10.5 8V11M13.5 10V11M13.5 10V9H14.5C15.6046 9 16.5 9.89543 16.5 11M16.5 11V12M16.5 11V10L17.8288 10.2215C18.7932 10.3822 19.5 11.2166 19.5 12.1943V13'
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

SwipeRight7Icon.displayName = 'SwipeRight7Icon';
export default SwipeRight7Icon;
