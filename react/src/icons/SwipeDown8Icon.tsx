import React from 'react';
import config from '../config';

interface SwipeDown8IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SwipeDown8Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/swipe-down8)
 * @see {@link https://clicons.dev/icon/swipe-down8}
 */
const SwipeDown8Icon = React.forwardRef<SVGSVGElement, SwipeDown8IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.503 7.98715V2M19.503 7.98715C18.8039 7.98715 17.4977 5.99712 17.007 5.4925M19.503 7.98715C20.2021 7.98715 21.5083 5.99712 21.999 5.4925'
    }
  ],
  [
    'path',
    {
      d: 'M5.53651 14.453V9.98787M5.53651 9.98787V4.47087C5.53651 3.651 6.22091 2.99023 7.04219 2.99023C7.86347 2.99023 8.51063 3.651 8.51063 4.47087V8.46818M5.53651 9.98787C4.21967 11.1791 2.80262 12.684 2.6118 13.0695C1.7239 14.4187 1.81696 15.0719 2.80647 16.7229C3.64691 18.1251 4.77717 19.6813 4.84315 19.7559C5.51469 20.5157 5.38117 20.5158 6.35451 21.2292C7.22367 21.8314 9.02652 22.251 13.253 21.8314C16.6962 21.3005 17.5211 18.3001 17.5032 16.8662V13.3253C17.7176 10.3823 16.4854 10.2495 14.2479 9.95981M8.51063 8.46818V10.9926M8.51063 8.46818C9.06899 7.55918 11.0969 7.92653 11.4922 9.64304M11.5279 10.9886V9.98787C11.5279 9.90897 11.5239 9.82983 11.5128 9.75178M11.4922 9.64304C11.4938 9.65026 11.4955 9.65751 11.4971 9.66478C11.5034 9.69358 11.5086 9.72261 11.5128 9.75178M11.4922 9.64304C11.4963 9.67802 11.5031 9.71427 11.5128 9.75178M11.4922 9.64304C11.3518 8.44663 14.3886 8.73828 14.5123 10.8424V11.9859'
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

SwipeDown8Icon.displayName = 'SwipeDown8Icon';
export default SwipeDown8Icon;
