import React from 'react';
import config from '../config';

interface AmmoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AmmoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ammo)
 * @see {@link https://clicons.dev/icon/ammo}
 */
const AmmoIcon = React.forwardRef<SVGSVGElement, AmmoIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.5 8.5C9.5 5.5 8 2.5 8 2.5C8 2.5 6.5 5.5 6.5 8.5H9.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 11L9.5 8.5H6.5L6 11H10Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 11H6V18.5C6 19.0523 6.44772 19.5 7 19.5H9C9.55228 19.5 10 19.0523 10 18.5V11Z'
    }
  ],
  [
    'path',
    {
      d: 'M10 22.5H6V20.5C6 19.9477 6.44772 19.5 7 19.5H9C9.55228 19.5 10 19.9477 10 20.5V22.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 8.5C17.5 5.5 16 2.5 16 2.5C16 2.5 14.5 5.5 14.5 8.5H17.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 11L17.5 8.5H14.5L14 11H18Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 11H14V18.5C14 19.0523 14.4477 19.5 15 19.5H17C17.5523 19.5 18 19.0523 18 18.5V11Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 22.5H14V20.5C14 19.9477 14.4477 19.5 15 19.5H17C17.5523 19.5 18 19.9477 18 20.5V22.5Z'
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

AmmoIcon.displayName = 'AmmoIcon';
export default AmmoIcon;
