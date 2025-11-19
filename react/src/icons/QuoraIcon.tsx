import React from 'react';
import config from '../config';

interface QuoraIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name QuoraIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/quora)
 * @see {@link https://clicons.dev/icon/quora}
 */
const QuoraIcon = React.forwardRef<SVGSVGElement, QuoraIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.1481 22.0001C20.037 22.0001 21 19.6776 21 16.8126C20.037 17.8497 17.3671 20.0195 16.1852 15.775C14.7407 10.5876 10.5 11.5 8 14C11.8519 14 12.3827 14.8974 13.2963 17.8501C14.2593 20.9625 15.7037 22.0001 17.1481 22.0001Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.5154 11C6.5052 10.8351 6.5 10.6684 6.5 10.5C6.5 7.18629 8.51472 4.5 11 4.5C13.4853 4.5 15.5 7.18629 15.5 10.5C15.5 11.3922 15.262 12.2389 15 13'
    }
  ],
  [
    'path',
    {
      d: 'M13.2413 18.6619C12.5301 18.882 11.778 19 11 19C6.58172 19 3 15.1944 3 10.5C3 5.80558 6.58172 2 11 2C15.4183 2 19 5.80558 19 10.5C19 11.7477 18.747 12.9326 18.2925 14'
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

QuoraIcon.displayName = 'QuoraIcon';
export default QuoraIcon;
