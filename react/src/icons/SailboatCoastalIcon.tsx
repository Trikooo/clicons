import React from 'react';
import config from '../config';

interface SailboatCoastalIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SailboatCoastalIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sailboat-coastal)
 * @see {@link https://clicons.dev/icon/sailboat-coastal}
 */
const SailboatCoastalIcon = React.forwardRef<SVGSVGElement, SailboatCoastalIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 18C4.59373 17.0625 3.80546 15.9647 3.39377 14.9482C3.10599 14.2376 2.96211 13.8823 3.2594 13.4411C3.55669 13 4.0378 13 5 13L19 13C19.9622 13 20.4433 13 20.7406 13.4411C21.0379 13.8823 20.894 14.2376 20.6062 14.9482C20.1945 15.9647 19.4063 17.0625 18 18'
    }
  ],
  [
    'path',
    {
      d: 'M15.8417 3.46469L17.9109 6.30956C18.7796 7.50391 19.2139 8.10108 18.896 8.55054C18.5782 9 17.7215 9 16.0082 9L10.6283 9C8.44171 9 7.3484 9 7.06067 8.46141C6.77293 7.92283 7.52225 7.27894 9.02088 5.99117L12.3316 3.1463C13.2563 2.35171 13.7186 1.95441 14.2671 2.00416C14.8156 2.05391 15.1576 2.52417 15.8417 3.46469Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 13L14 2'
    }
  ],
  [
    'path',
    {
      d: 'M2 21L22 21'
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

SailboatCoastalIcon.displayName = 'SailboatCoastalIcon';
export default SailboatCoastalIcon;
