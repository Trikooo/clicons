import React from 'react';
import config from '../config';

interface Pen2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Pen2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pen2)
 * @see {@link https://clicons.dev/icon/pen2}
 */
const Pen2Icon = React.forwardRef<SVGSVGElement, Pen2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 21L3.85763 17.9983C3.951 17.6715 4.12612 17.3739 4.36646 17.1335L18.2062 3.29289C18.5967 2.90237 19.2299 2.90237 19.6204 3.29289L20.7062 4.37868C21.0967 4.7692 21.0967 5.40237 20.7062 5.79289L6.86646 19.6335C6.62612 19.8739 6.3285 20.049 6.00169 20.1424L3 21Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.9999 5.49854L18.3786 7.87722C19.3786 8.87722 19.8786 9.37721 19.8786 9.99854C19.8786 10.6199 19.3786 11.1199 18.3786 12.1199L17.4999 12.9985'
    }
  ],
  [
    'path',
    {
      d: 'M8.49994 12.9985L10.9999 15.4985'
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

Pen2Icon.displayName = 'Pen2Icon';
export default Pen2Icon;
