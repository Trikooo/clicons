import React from 'react';
import config from '../config';

interface Scooter3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Scooter3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/scooter3)
 * @see {@link https://clicons.dev/icon/scooter3}
 */
const Scooter3Icon = React.forwardRef<SVGSVGElement, Scooter3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '12',
      cy: '4',
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M10 4H6'
    }
  ],
  [
    'path',
    {
      d: 'M18 4H14'
    }
  ],
  [
    'path',
    {
      d: 'M9 20C7.6725 19.9645 6.90036 19.8282 6.42177 19.3045C5.77472 18.5965 5.9693 17.5144 6.35847 15.35L6.96989 11.9497C7.21514 10.5857 7.33777 9.90371 7.69445 9.38625C8.0453 8.87725 8.55358 8.47814 9.15294 8.24104C9.76224 8 10.5082 8 12 8C13.4918 8 14.2378 8 14.8471 8.24104C15.4464 8.47814 15.9547 8.87725 16.3056 9.38625C16.6622 9.90371 16.7849 10.5857 17.0301 11.9497L17.6415 15.35C18.0307 17.5144 18.2253 18.5965 17.5782 19.3045C17.1018 19.8258 16.3345 19.9636 15.018 20'
    }
  ],
  [
    'path',
    {
      d: 'M12 18V22'
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

Scooter3Icon.displayName = 'Scooter3Icon';
export default Scooter3Icon;
