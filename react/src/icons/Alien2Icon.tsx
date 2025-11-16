import React from 'react';
import config from '../config';

interface Alien2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Alien2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/alien2)
 * @see {@link https://clicons.dev/icon/alien2}
 */
const Alien2Icon = React.forwardRef<SVGSVGElement, Alien2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.0014 9.98894C15.0014 11.6432 13.6596 12.9841 12.0043 12.9841C10.349 12.9841 9.0072 11.6432 9.0072 9.98894C9.0072 8.33474 10.349 6.99374 12.0043 6.99374C13.6596 6.99374 15.0014 8.33474 15.0014 9.98894Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9945 16.9777H12.0035'
    }
  ],
  [
    'path',
    {
      d: 'M20.496 2.00174C20.3294 2.9003 19.497 4.75732 17.4989 4.99693'
    }
  ],
  [
    'path',
    {
      d: 'M3.51257 2.00174C3.67908 2.9003 4.5116 4.75732 6.50965 4.99693'
    }
  ],
  [
    'path',
    {
      d: 'M8.84021 3.69349C5.58633 5.14195 4.44413 8.62401 4.52092 10.4658C3.3979 10.389 2.0227 10.5148 2.00157 11.9509C1.98043 13.387 3.46509 13.6409 4.52092 13.4682V19.8759C4.53861 20.4063 4.58624 21.1002 5.13522 21.3436C6.41182 21.9095 7.48685 20.1925 8.6549 20.2712C9.56297 20.3324 10.8774 22.0907 12.0332 21.9945C13.3719 21.883 14.4022 20.2767 15.4258 20.2767C16.6397 20.2767 16.8523 21.2774 18.314 21.4367C19.4042 21.5556 19.515 20.516 19.515 19.9564V13.4802C21.4043 13.7145 22.1531 12.8775 21.9725 11.6986C21.7595 10.3074 20.1259 10.4067 19.4757 10.4956C19.5768 9.46112 19.1104 8.15549 18.909 7.64373C18.6122 6.73267 17.3925 4.57907 14.7721 3.51122C12.1516 2.44338 9.71367 3.23306 8.84021 3.69349Z'
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

Alien2Icon.displayName = 'Alien2Icon';
export default Alien2Icon;
