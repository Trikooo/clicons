import React from 'react';
import config from '../config';

interface SquareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SquareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/square)
 * @see {@link https://clicons.dev/icon/square}
 */
const SquareIcon = React.forwardRef<SVGSVGElement, SquareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.71474 7.02474C4.70574 6.91997 5.95498 7.07715 6.73577 8.91069C7.55559 11.111 9.58562 17.2403 10.0931 18.6548C10.6397 20.174 11.3424 21.2218 14.2313 20.9598'
    }
  ],
  [
    'path',
    {
      d: 'M14.9999 7.0073C12.137 6.98235 9.7947 11.7222 8.49339 13.9923C7.06196 16.6117 4.6025 21.1519 1.9999 20.9773'
    }
  ],
  [
    'path',
    {
      d: 'M22.0001 8.99985H18.0001L21.2002 6.59981C21.7038 6.22212 22.0001 5.62938 22.0001 4.9999C22.0001 3.89538 21.1046 2.99999 20 3C18.8955 3.00001 17.9999 3.89543 17.9999 4.99998'
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

SquareIcon.displayName = 'SquareIcon';
export default SquareIcon;
