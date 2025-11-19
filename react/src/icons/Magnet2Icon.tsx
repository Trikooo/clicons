import React from 'react';
import config from '../config';

interface Magnet2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Magnet2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/magnet2)
 * @see {@link https://clicons.dev/icon/magnet2}
 */
const Magnet2Icon = React.forwardRef<SVGSVGElement, Magnet2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16 10V9C16 8.05719 16 7.58579 16.2929 7.29289C16.5858 7 17.0572 7 18 7C18.9428 7 19.4142 7 19.7071 7.29289C20 7.58579 20 8.05719 20 9V10M16 10V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V10M16 10H20M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10M8 10V9C8 8.05719 8 7.58579 7.70711 7.29289C7.41421 7 6.94281 7 6 7C5.05719 7 4.58579 7 4.29289 7.29289C4 7.58579 4 8.05719 4 9V10M8 10L4 10'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 1.99982L10.625 4.99982H13.625L11.75 7.99982'
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

Magnet2Icon.displayName = 'Magnet2Icon';
export default Magnet2Icon;
