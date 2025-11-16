import React from 'react';
import config from '../config';

interface PhysicsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PhysicsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/physics)
 * @see {@link https://clicons.dev/icon/physics}
 */
const PhysicsIcon = React.forwardRef<SVGSVGElement, PhysicsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 5.79314C13.1131 6.59894 14.2449 7.56172 15.3416 8.65837C16.4383 9.75506 17.4011 10.8869 18.2069 12.0001M12 5.79314C10.8869 6.59894 9.75509 7.56172 8.65843 8.65838C7.56175 9.75507 6.59895 10.8869 5.79314 12.0001M12 5.79314C15.5699 3.20879 18.9472 2.23908 20.3541 3.64594C21.7609 5.05281 20.7912 8.43014 18.2069 12.0001M18.2069 12.0001C20.7912 15.5699 21.7608 18.9472 20.354 20.3541C19.3109 21.3971 17.1848 21.1338 14.7 19.8747M18.2069 12.0001C17.4011 13.1132 16.4383 14.245 15.3417 15.3416C14.245 16.4383 13.1131 17.4011 12 18.2069M12 18.2069C10.8869 17.4011 9.75503 16.4383 8.65834 15.3416C7.5617 14.245 6.59893 13.1132 5.79314 12.0001M12 18.2069C8.43014 20.7912 5.05287 21.7609 3.64602 20.3541C2.23917 18.9472 3.20885 15.5699 5.79314 12.0001M5.79314 12.0001C3.20878 8.43014 2.23907 5.0528 3.64593 3.64593C4.689 2.60286 6.81521 2.86619 9.3 4.12538'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '12',
      r: '2'
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

PhysicsIcon.displayName = 'PhysicsIcon';
export default PhysicsIcon;
