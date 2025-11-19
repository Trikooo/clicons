import React from 'react';
import config from '../config';

interface Bookshelf3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Bookshelf3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bookshelf3)
 * @see {@link https://clicons.dev/icon/bookshelf3}
 */
const Bookshelf3Icon = React.forwardRef<SVGSVGElement, Bookshelf3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 16H21'
    }
  ],
  [
    'path',
    {
      d: 'M2 22L22 22'
    }
  ],
  [
    'path',
    {
      d: 'M3 9H21'
    }
  ],
  [
    'path',
    {
      d: 'M3 22V8C3 5.17157 3 3.75736 3.93037 2.87868C4.86073 2 6.35814 2 9.35294 2H14.6471C17.6419 2 19.1393 2 20.0696 2.87868C21 3.75736 21 5.17157 21 8V22'
    }
  ],
  [
    'path',
    {
      d: 'M11 19H13'
    }
  ],
  [
    'path',
    {
      d: 'M10 9L9 5'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 9V5'
    }
  ],
  [
    'path',
    {
      d: 'M14 16V12'
    }
  ],
  [
    'path',
    {
      d: 'M12 9V5'
    }
  ],
  [
    'path',
    {
      d: 'M16 16L17 12'
    }
  ],
  [
    'path',
    {
      d: 'M19 16V12'
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

Bookshelf3Icon.displayName = 'Bookshelf3Icon';
export default Bookshelf3Icon;
