import React from 'react';
import config from '../config';

interface SalahIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SalahIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/salah)
 * @see {@link https://clicons.dev/icon/salah}
 */
const SalahIcon = React.forwardRef<SVGSVGElement, SalahIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 18C17.7128 17.2408 17.4563 16.1375 16.5 15.5C15 14.5 13.5 14 13.5 12.5C13.5 11 13 8 13 8L13.6955 7.26803C15.3935 8.02463 17 5.88071 17 4.5C17 3.11929 15.8807 2 14.5 2C13.1193 2 12 3.11929 12 4.5C12 5.5 11.2 6.1 10 6.5C8.5 7 6.5 8 6.5 13C6.5 17 8.33333 18.3333 9 19C5.8 19 5 21 5 22H18C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18ZM18 18C10.2719 18 9.55992 13.3333 10 11'
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

SalahIcon.displayName = 'SalahIcon';
export default SalahIcon;
