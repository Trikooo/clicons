import React from 'react';
import config from '../config';

interface OvenIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name OvenIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/oven)
 * @see {@link https://clicons.dev/icon/oven}
 */
const OvenIcon = React.forwardRef<SVGSVGElement, OvenIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 5H10'
    }
  ],
  [
    'path',
    {
      d: 'M18 5.00895V5'
    }
  ],
  [
    'path',
    {
      d: 'M3 8L21 8'
    }
  ],
  [
    'path',
    {
      d: 'M2 22H22'
    }
  ],
  [
    'path',
    {
      d: 'M3 22V5C3 2.518 3.518 2 6 2H18C20.482 2 21 2.518 21 5V22'
    }
  ],
  [
    'path',
    {
      d: 'M6 17V13C6 12.0572 6 11.5858 6.29289 11.2929C6.58579 11 7.05719 11 8 11H16C16.9428 11 17.4142 11 17.7071 11.2929C18 11.5858 18 12.0572 18 13V17C18 17.9428 18 18.4142 17.7071 18.7071C17.4142 19 16.9428 19 16 19H8C7.05719 19 6.58579 19 6.29289 18.7071C6 18.4142 6 17.9428 6 17Z'
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

OvenIcon.displayName = 'OvenIcon';
export default OvenIcon;
