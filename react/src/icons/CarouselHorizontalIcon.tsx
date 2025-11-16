import React from 'react';
import config from '../config';

interface CarouselHorizontalIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CarouselHorizontalIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/carousel-horizontal)
 * @see {@link https://clicons.dev/icon/carousel-horizontal}
 */
const CarouselHorizontalIcon = React.forwardRef<SVGSVGElement, CarouselHorizontalIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 8C7 5.64298 7 4.46447 7.73223 3.73223C8.46447 3 9.64298 3 12 3C14.357 3 15.5355 3 16.2678 3.73223C17 4.46447 17 5.64298 17 8V16C17 18.357 17 19.5355 16.2678 20.2678C15.5355 21 14.357 21 12 21C9.64298 21 8.46447 21 7.73223 20.2678C7 19.5355 7 18.357 7 16V8Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 7C2.54697 7.10449 2.94952 7.28931 3.26777 7.61621C4 8.36835 4 9.5789 4 12C4 14.4211 4 15.6316 3.26777 16.3838C2.94952 16.7107 2.54697 16.8955 2 17'
    }
  ],
  [
    'path',
    {
      d: 'M22 7C21.453 7.10449 21.0505 7.28931 20.7322 7.61621C20 8.36835 20 9.5789 20 12C20 14.4211 20 15.6316 20.7322 16.3838C21.0505 16.7107 21.453 16.8955 22 17'
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

CarouselHorizontalIcon.displayName = 'CarouselHorizontalIcon';
export default CarouselHorizontalIcon;
