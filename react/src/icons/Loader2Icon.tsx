import React from 'react';
import config from '../config';

interface Loader2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Loader2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/loader2)
 * @see {@link https://clicons.dev/icon/loader2}
 */
const Loader2Icon = React.forwardRef<SVGSVGElement, Loader2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.82353 8.82357L5.64706 5.64709'
    }
  ],
  [
    'path',
    {
      d: 'M3 12H7.23529'
    }
  ],
  [
    'path',
    {
      d: 'M8.82353 15.1765L5.64706 18.353'
    }
  ],
  [
    'path',
    {
      d: 'M12 21V16.6906'
    }
  ],
  [
    'path',
    {
      d: 'M15.1765 15.1765L18.3529 18.353'
    }
  ],
  [
    'path',
    {
      d: 'M16.6906 12H21'
    }
  ],
  [
    'path',
    {
      d: 'M15.1871 8.82357L18.3635 5.64709'
    }
  ],
  [
    'path',
    {
      d: 'M12 3V7.30941'
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

Loader2Icon.displayName = 'Loader2Icon';
export default Loader2Icon;
