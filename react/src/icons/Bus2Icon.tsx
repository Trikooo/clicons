import React from 'react';
import config from '../config';

interface Bus2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Bus2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bus2)
 * @see {@link https://clicons.dev/icon/bus2}
 */
const Bus2Icon = React.forwardRef<SVGSVGElement, Bus2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.5 19V22'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 19V22'
    }
  ],
  [
    'path',
    {
      d: 'M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V13C20 15.8284 20 17.2426 19.1213 18.1213C18.2426 19 16.8284 19 14 19H10C7.17157 19 5.75736 19 4.87868 18.1213C4 17.2426 4 15.8284 4 13V10Z'
    }
  ],
  [
    'path',
    {
      d: 'M4 12C5.85698 12.5752 8.80918 13 12 13C15.1908 13 18.143 12.5752 20 12'
    }
  ],
  [
    'path',
    {
      d: 'M22 11H21.4721C21.1616 11 20.8554 11.0723 20.5777 11.2111L20 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M4 11.5L3.42229 11.2111C3.14458 11.0723 2.83835 11 2.52786 11H2'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 16H6'
    }
  ],
  [
    'path',
    {
      d: 'M18 16H19.5'
    }
  ],
  [
    'path',
    {
      d: 'M10 16H14'
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

Bus2Icon.displayName = 'Bus2Icon';
export default Bus2Icon;
