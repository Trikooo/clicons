import React from 'react';
import config from '../config';

interface PurseIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PurseIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/purse)
 * @see {@link https://clicons.dev/icon/purse}
 */
const PurseIcon = React.forwardRef<SVGSVGElement, PurseIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.9869 3.875C16.0545 3.125 15.8921 2 14.7565 2C13.3371 2 9.82353 7 7 7'
    }
  ],
  [
    'path',
    {
      d: 'M8.01476 3.875C7.93872 3.125 8.12143 2 9.3989 2C10.9957 2 14.8235 7 18 7'
    }
  ],
  [
    'path',
    {
      d: 'M4 10H20'
    }
  ],
  [
    'path',
    {
      d: 'M21.863 15.0024C21.4147 12.9368 19.4727 10.4981 20.1725 8.38201C20.3978 7.70069 19.8861 7 19.1631 7H4.82864C4.10627 7 3.59628 7.70208 3.82496 8.38173C4.53702 10.4979 2.58784 12.9411 2.13769 15.0065C1.51926 17.8441 3.02182 20.7941 5.88585 21.3928C9.75734 22.2021 14.2396 22.2024 18.1116 21.3937C20.9776 20.7951 22.4795 17.8424 21.863 15.0024Z'
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

PurseIcon.displayName = 'PurseIcon';
export default PurseIcon;
