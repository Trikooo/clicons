import React from 'react';
import config from '../config';

interface Dress4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Dress4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/dress4)
 * @see {@link https://clicons.dev/icon/dress4}
 */
const Dress4Icon = React.forwardRef<SVGSVGElement, Dress4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15 4L12 6L9 4C8.41425 4.50941 7.07071 5.29343 7.00348 6.14565C6.97434 6.51512 7.12883 6.71716 7.43782 7.12122C8.11164 8.00239 8.87991 8.52009 8.87991 10H15.1201C15.1201 8.52009 15.8884 8.00239 16.5622 7.12122C16.8712 6.71716 17.0257 6.51512 16.9965 6.14565C16.9293 5.29343 15.5858 4.50941 15 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M19.8632 17.8082C19.1589 15.1179 17.3658 12.6502 16.1811 11.2368C15.3314 10.2231 14.7041 10 13.3704 10H10.6296C9.29591 10 8.66864 10.2231 7.81893 11.2368C6.63423 12.6502 4.8411 15.1179 4.13677 17.8082C3.70683 19.4504 4.29064 20.3493 5.88646 20.9301C7.32124 21.4523 9.43708 22 12 22C14.5629 22 16.6788 21.4523 18.1135 20.9301C19.7094 20.3493 20.2932 19.4504 19.8632 17.8082Z'
    }
  ],
  [
    'path',
    {
      d: 'M9 4V2'
    }
  ],
  [
    'path',
    {
      d: 'M15 4V2'
    }
  ],
  [
    'path',
    {
      d: 'M14 15C14 15 16 18 16 21.5M10 15C10 15 8 18 8 21.5'
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

Dress4Icon.displayName = 'Dress4Icon';
export default Dress4Icon;
