import React from 'react';
import config from '../config';

interface Joystick3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Joystick3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/joystick3)
 * @see {@link https://clicons.dev/icon/joystick3}
 */
const Joystick3Icon = React.forwardRef<SVGSVGElement, Joystick3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 8L8 16'
    }
  ],
  [
    'path',
    {
      d: 'M17 13L14 13'
    }
  ],
  [
    'path',
    {
      d: 'M18.8787 22H5.12132C5.00867 22 4.95235 22 4.90475 21.9977C3.87506 21.9486 3.05136 21.1249 3.00227 20.0952C3 20.0477 3 19.9913 3 19.8787C3 19.8293 3 19.8046 3.00057 19.7808C3.01242 19.2834 3.2092 18.8084 3.5525 18.4483C3.56894 18.4311 3.58641 18.4136 3.62132 18.3787L4.24264 17.7574C5.10973 16.8903 5.54328 16.4567 6.09459 16.2284C6.6459 16 7.25903 16 8.48528 16H15.5147C16.741 16 17.3541 16 17.9054 16.2284C18.4567 16.4567 18.8903 16.8903 19.7574 17.7574L20.3787 18.3787C20.4136 18.4136 20.4311 18.4311 20.4475 18.4483C20.7908 18.8084 20.9876 19.2834 20.9994 19.7808C21 19.8046 21 19.8293 21 19.8787C21 19.9913 21 20.0477 20.9977 20.0952C20.9486 21.1249 20.1249 21.9486 19.0952 21.9977C19.0477 22 18.9913 22 18.8787 22Z'
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

Joystick3Icon.displayName = 'Joystick3Icon';
export default Joystick3Icon;
