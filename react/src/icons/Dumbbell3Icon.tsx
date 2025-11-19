import React from 'react';
import config from '../config';

interface Dumbbell3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Dumbbell3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/dumbbell3)
 * @see {@link https://clicons.dev/icon/dumbbell3}
 */
const Dumbbell3Icon = React.forwardRef<SVGSVGElement, Dumbbell3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 6.5H7.52786C7.83835 6.5 8.14353 6.4245 8.42703 6.29788C10.809 5.23404 13.191 5.23404 15.573 6.29788C15.8565 6.4245 16.1616 6.5 16.4721 6.5H18'
    }
  ],
  [
    'path',
    {
      d: 'M6 17.5H7.52786C7.83835 17.5 8.14353 17.4245 8.42703 17.2979C10.809 16.234 13.191 16.234 15.573 17.2979C15.8565 17.4245 16.1616 17.5 16.4721 17.5H18'
    }
  ],
  [
    'path',
    {
      d: 'M6 3V10M18 3V10'
    }
  ],
  [
    'path',
    {
      d: 'M6 14V21M18 14V21'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 6.5H2M20.5 6.5H22'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 17.5H2M20.5 17.5H22'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 4.5V8.5M20.5 4.5V8.5'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 15.5V19.5M20.5 15.5V19.5'
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

Dumbbell3Icon.displayName = 'Dumbbell3Icon';
export default Dumbbell3Icon;
