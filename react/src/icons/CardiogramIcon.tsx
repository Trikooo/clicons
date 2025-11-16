import React from 'react';
import config from '../config';

interface CardiogramIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CardiogramIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cardiogram)
 * @see {@link https://clicons.dev/icon/cardiogram}
 */
const CardiogramIcon = React.forwardRef<SVGSVGElement, CardiogramIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 21.5C7.25027 21.5 5.3754 21.5 4.06107 20.492C3.6366 20.1665 3.26331 19.7725 2.95492 19.3244C2 17.9371 2 15.9581 2 12C2 8.04195 2 6.06292 2.95491 4.67558C3.26331 4.22752 3.6366 3.8335 4.06107 3.50797C5.3754 2.5 7.25027 2.5 11 2.5L13 2.5C16.7497 2.5 18.6246 2.5 19.9389 3.50797C20.3634 3.8335 20.7367 4.22752 21.0451 4.67558C22 6.06292 22 8.04195 22 12C22 15.9581 22 17.9371 21.0451 19.3244C20.7367 19.7725 20.3634 20.1665 19.9389 20.492C18.6246 21.5 16.7497 21.5 13 21.5H11Z',
      stroke: 'currentColor'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 15H21.5',
      stroke: 'currentColor'
    }
  ],
  [
    'path',
    {
      d: 'M7.00896 18H7H7.00896Z',
      fill: 'currentColor',
      fillRule: 'evenodd'
    }
  ],
  [
    'path',
    {
      d: 'M11 18H10.991H11Z',
      fill: 'currentColor',
      fillRule: 'evenodd'
    }
  ],
  [
    'path',
    {
      d: 'M7.00896 18H7M11 18H10.991',
      stroke: 'currentColor'
    }
  ],
  [
    'path',
    {
      d: 'M17 10.2C16.5447 10.2 16.0655 10.2282 15.6569 9.97709C15.5011 9.88138 15.3977 9.74907 15.191 9.48446L13.25 7L10.75 11L8.94338 9.26564C8.68722 9.01973 8.43747 8.77042 8.09845 8.67176C7.85189 8.6 7.56792 8.6 7 8.6',
      stroke: 'currentColor'
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
        // Mixed styling: preserve element-specific stroke/fill
        if (processedAttrs.stroke === 'currentColor') processedAttrs.stroke = finalColor;
        if (processedAttrs.fill === 'currentColor') processedAttrs.fill = finalColor;

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

CardiogramIcon.displayName = 'CardiogramIcon';
export default CardiogramIcon;
