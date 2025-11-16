import React from 'react';
import config from '../config';

interface PisaTowerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PisaTowerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pisa-tower)
 * @see {@link https://clicons.dev/icon/pisa-tower}
 */
const PisaTowerIcon = React.forwardRef<SVGSVGElement, PisaTowerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 21H22'
    }
  ],
  [
    'path',
    {
      d: 'M16.4591 16.4179L17.7484 11.3959M16.4591 16.4179L17.4214 16.6871M16.4591 16.4179L15.2828 21M16.4591 16.4179L7.79815 13.9957M17.7484 11.3959L19.0377 6.3738M17.7484 11.3959L18.7107 11.665M17.7484 11.3959L9.08743 8.97368M19.0377 6.3738L17.113 5.83554M19.0377 6.3738L20 6.64294M7.79815 13.9957L9.08743 8.97368M7.79815 13.9957L6.83582 13.7266M7.79815 13.9957L6 21M9.08743 8.97368L10.3767 3.95162M9.08743 8.97368L8.1251 8.70455M10.3767 3.95162L9.41437 3.68249M10.3767 3.95162L12.3014 4.48988M12.3014 4.48988L17.113 5.83554M12.3014 4.48988L12.7458 2.75811C12.8862 2.21105 13.4418 1.88632 13.9799 2.03682L16.8635 2.84327C17.3901 2.99054 17.7025 3.53846 17.5651 4.07382L17.113 5.83554'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 21L11.06 19M14 8.5L13.5218 10.208M12.1121 15.2424L12.5655 13.6232'
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

PisaTowerIcon.displayName = 'PisaTowerIcon';
export default PisaTowerIcon;
