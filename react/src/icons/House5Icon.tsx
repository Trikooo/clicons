import React from 'react';
import config from '../config';

interface House5IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name House5Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/house5)
 * @see {@link https://clicons.dev/icon/house5}
 */
const House5Icon = React.forwardRef<SVGSVGElement, House5IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 11H20V22H4V11Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 22V19C14.5 18.0572 14.5 17.5858 14.2071 17.2929C13.9142 17 13.4428 17 12.5 17H11.5C10.5572 17 10.0858 17 9.79289 17.2929C9.5 17.5858 9.5 18.0572 9.5 19V22'
    }
  ],
  [
    'path',
    {
      d: 'M2 9.72254C2 9.14501 2.26952 8.68201 2.81725 8.49897L10.9302 5.78773C11.7893 5.50062 12 5.0255 12 4.18608C12 3.42891 11.8761 1.9173 13.0641 2.00228C13.3438 2.02229 13.6832 2.28692 14.3619 2.81619L21.439 8.33464C21.8381 8.64581 22 9.01714 22 9.53489C22 10.4781 21.6036 11 20.6848 11H3.14677C2.40983 11 2 10.4554 2 9.72254Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 22H21'
    }
  ],
  [
    'path',
    {
      d: 'M7 15H8'
    }
  ],
  [
    'path',
    {
      d: 'M17 15L16 15'
    }
  ],
  [
    'path',
    {
      d: 'M5 7.5L5 3'
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

House5Icon.displayName = 'House5Icon';
export default House5Icon;
