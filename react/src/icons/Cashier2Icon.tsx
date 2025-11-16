import React from 'react';
import config from '../config';

interface Cashier2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Cashier2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cashier2)
 * @see {@link https://clicons.dev/icon/cashier2}
 */
const Cashier2Icon = React.forwardRef<SVGSVGElement, Cashier2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.5 17.5C2.5 19.3856 2.5 20.3284 3.08579 20.9142C3.67157 21.5 4.61438 21.5 6.5 21.5H17.5C19.3856 21.5 20.3284 21.5 20.9142 20.9142C21.5 20.3284 21.5 19.3856 21.5 17.5'
    }
  ],
  [
    'path',
    {
      d: 'M10 19.5H14'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 5.5V8.5M15 5.5H18C18.4659 5.5 18.6989 5.5 18.8827 5.42388C19.1277 5.32239 19.3224 5.12771 19.4239 4.88268C19.5 4.69891 19.5 4.46594 19.5 4C19.5 3.53406 19.5 3.30109 19.4239 3.11732C19.3224 2.87229 19.1277 2.67761 18.8827 2.57612C18.6989 2.5 18.4659 2.5 18 2.5H15C14.5341 2.5 14.3011 2.5 14.1173 2.57612C13.8723 2.67761 13.6776 2.87229 13.5761 3.11732C13.5 3.30109 13.5 3.53406 13.5 4C13.5 4.46594 13.5 4.69891 13.5761 4.88268C13.6776 5.12771 13.8723 5.32239 14.1173 5.42388C14.3011 5.5 14.5341 5.5 15 5.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 17.5H2.5L3.80394 11.6323C4.13763 10.1306 4.30448 9.37983 4.85289 8.93992C5.4013 8.5 6.17043 8.5 7.70869 8.5H16.2913C17.8296 8.5 18.5987 8.5 19.1471 8.93992C19.6955 9.37983 19.8624 10.1306 20.1961 11.6323L21.5 17.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 11.5H8M11.75 11.5H12.25M16 11.5H16.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 14.5H8M11.75 14.5H12.25M16 14.5H16.5'
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

Cashier2Icon.displayName = 'Cashier2Icon';
export default Cashier2Icon;
