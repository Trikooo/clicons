import React from 'react';
import config from '../config';

interface PizzaIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PizzaIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pizza)
 * @see {@link https://clicons.dev/icon/pizza}
 */
const PizzaIcon = React.forwardRef<SVGSVGElement, PizzaIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.2201 18.821L18.6793 13.1312C20.1246 12.159 20.8472 11.673 20.9785 10.7879C21.1098 9.90283 20.6352 9.30806 19.686 8.11852C17.5076 5.3886 14.548 3.35345 11.1624 2.38141C9.87428 2.01158 9.23023 1.82667 8.53978 2.2186C7.84933 2.61053 7.62404 3.37564 7.17348 4.90586L4.40648 14.3032C3.11201 18.6995 2.46477 20.8977 3.54764 21.7392C4.63051 22.5807 6.49371 21.3275 10.2201 18.821Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 5C7.5 5 8.03795 5.1182 8.90014 5.38146C11.6322 6.21565 14.0691 7.83278 16 10.0001'
    }
  ],
  [
    'path',
    {
      d: 'M13.008 11H12.999'
    }
  ],
  [
    'path',
    {
      d: 'M6.28309 7.95361C7.35896 8.24857 8.04372 9.23191 8.04372 10.4269C8.04372 12.0941 6.42377 13.3683 4.82373 12.9138'
    }
  ],
  [
    'path',
    {
      d: 'M8.22322 18.7485C7.67104 17.7792 7.8218 16.508 8.66679 15.663C9.67553 14.6543 11.2917 14.6349 12.2765 15.6198C12.4419 15.7852 12.579 15.9684 12.6879 16.1636'
    }
  ],
  [
    'path',
    {
      d: 'M12.9235 16.9933C12.6273 15.8482 11.6587 15.0087 10.5096 15.0087C9.12491 15.0087 8.00244 16.2275 8.00244 17.731C8.00244 18.5276 8.31752 19.2442 8.81972 19.7421'
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

PizzaIcon.displayName = 'PizzaIcon';
export default PizzaIcon;
