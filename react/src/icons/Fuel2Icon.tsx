import React from 'react';
import config from '../config';

interface Fuel2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Fuel2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/fuel2)
 * @see {@link https://clicons.dev/icon/fuel2}
 */
const Fuel2Icon = React.forwardRef<SVGSVGElement, Fuel2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.1115 4.5H8C6.11438 4.5 5.17157 4.5 4.58579 5.08579C4 5.67157 4 6.61438 4 8.5V16C4 18.8284 4 20.2426 4.87868 21.1213C5.75736 22 7.17157 22 10 22H14C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V13.4443C20 11.0386 20 9.83582 19.4026 8.86921C18.8052 7.9026 17.7294 7.36469 15.5777 6.28885L13.6892 5.34458C12.8484 4.9242 12.428 4.71401 11.9747 4.607C11.5215 4.5 11.0515 4.5 10.1115 4.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 18C13.1046 18 14 17.1605 14 16.125C14 14.875 12 13 12 13C12 13 10 14.875 10 16.125C10 17.1605 10.8954 18 12 18Z'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 8L16.5 10'
    }
  ],
  [
    'path',
    {
      d: 'M6 4.5V3.75C6 3.04777 6 2.69665 6.16853 2.44443C6.24149 2.33524 6.33524 2.24149 6.44443 2.16853C6.69665 2 7.04777 2 7.75 2C8.45223 2 8.80335 2 9.05557 2.16853C9.16476 2.24149 9.25851 2.33524 9.33147 2.44443C9.5 2.69665 9.5 3.04777 9.5 3.75V4.5'
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

Fuel2Icon.displayName = 'Fuel2Icon';
export default Fuel2Icon;
