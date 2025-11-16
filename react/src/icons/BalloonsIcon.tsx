import React from 'react';
import config from '../config';

interface BalloonsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BalloonsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/balloons)
 * @see {@link https://clicons.dev/icon/balloons}
 */
const BalloonsIcon = React.forwardRef<SVGSVGElement, BalloonsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.5 6.5C15.5 8.98528 13.933 11 12 11C10.067 11 8.5 8.98528 8.5 6.5C8.5 4.01472 10.067 2 12 2C13.933 2 15.5 4.01472 15.5 6.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 15.5C22 17.9853 20.433 20 18.5 20C16.567 20 15 17.9853 15 15.5C15 13.0147 16.567 11 18.5 11C20.433 11 22 13.0147 22 15.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9978 11C11.9978 11 12.6526 13 11.9985 15C10.4013 19.8831 12.0001 22 12.0001 22'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 20C18.5 20.5 18.4 21.6 18 22'
    }
  ],
  [
    'path',
    {
      d: 'M2 15.5C2 17.9853 3.567 20 5.5 20C7.433 20 9 17.9853 9 15.5C9 13.0147 7.433 11 5.5 11C3.567 11 2 13.0147 2 15.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 20C5.5 20.5 5.6 21.6 6 22'
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

BalloonsIcon.displayName = 'BalloonsIcon';
export default BalloonsIcon;
