import React from 'react';
import config from '../config';

interface ChairBarberIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChairBarberIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chair-barber)
 * @see {@link https://clicons.dev/icon/chair-barber}
 */
const ChairBarberIcon = React.forwardRef<SVGSVGElement, ChairBarberIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.6972 15H8C6.89543 15 6 14.0951 6 12.9788C6 11.8625 6.89796 10.9517 8.00141 11.002C12.6902 11.2157 15.2951 12.1485 16.384 12.6526C16.78 12.836 17 13.2432 17 13.6834C17 14.4105 16.4167 15 15.6972 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 14L20.9401 3.48443C21.1497 2.90943 20.7906 2.29091 20.1533 2.12892C18.5192 1.71359 16.8081 2.31124 16.2695 3.78511C15.6441 5.49648 15 8.13095 15 12'
    }
  ],
  [
    'path',
    {
      d: 'M15 7.96065C15 7.96065 11.6187 6.56598 10.3204 7.13972C9.93065 7.31195 9.59819 7.59728 9.36369 7.96079C9 8.52455 9 9.3497 9 11'
    }
  ],
  [
    'path',
    {
      d: 'M6 13V16C6 16.9319 6 17.3978 5.84776 17.7654C5.64477 18.2554 5.25542 18.6448 4.76537 18.8478C4.39782 19 3.93188 19 3 19'
    }
  ],
  [
    'path',
    {
      d: 'M12 15V21'
    }
  ],
  [
    'path',
    {
      d: 'M10 21H14'
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

ChairBarberIcon.displayName = 'ChairBarberIcon';
export default ChairBarberIcon;
