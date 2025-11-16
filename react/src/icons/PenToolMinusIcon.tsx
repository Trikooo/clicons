import React from 'react';
import config from '../config';

interface PenToolMinusIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PenToolMinusIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pen-tool-minus)
 * @see {@link https://clicons.dev/icon/pen-tool-minus}
 */
const PenToolMinusIcon = React.forwardRef<SVGSVGElement, PenToolMinusIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5995 18.9737L7.63427 20.2672C6.2983 20.5153 5.63031 20.6393 5.24549 20.2545C4.86067 19.8697 4.98471 19.2016 5.2328 17.8656L6.52621 10.9001C6.73362 9.78311 6.83732 9.22463 7.20549 8.88719C7.57365 8.54975 8.24697 8.48389 9.59359 8.35218C10.8915 8.22524 12.1197 7.78032 13.4 6.5L19 12.1005C17.7197 13.3808 17.2746 14.6083 17.1474 15.9062C17.0155 17.253 16.9495 17.9264 16.6121 18.2945C16.2747 18.6626 15.7163 18.7663 14.5995 18.9737Z'
    }
  ],
  [
    'path',
    {
      d: 'M13 14.7105C12.4405 14.6197 11.9289 14.3763 11.5263 13.9737M11.5263 13.9737C11.1237 13.5711 10.8803 13.0595 10.7895 12.5M11.5263 13.9737L6 19.5'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 6.5C14.1332 5.56586 15.4907 3.66107 16.7613 3.50976C17.6287 3.40648 18.3472 4.12499 19.7842 5.56202L19.938 5.7158C21.375 7.15283 22.0935 7.87135 21.9902 8.73867C21.8389 10.0092 19.9341 11.3668 19 12'
    }
  ],
  [
    'path',
    {
      d: 'M2 3.5H8'
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

PenToolMinusIcon.displayName = 'PenToolMinusIcon';
export default PenToolMinusIcon;
