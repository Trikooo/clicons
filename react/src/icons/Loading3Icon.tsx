import React from 'react';
import config from '../config';

interface Loading3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Loading3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/loading3)
 * @see {@link https://clicons.dev/icon/loading3}
 */
const Loading3Icon = React.forwardRef<SVGSVGElement, Loading3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 3V6'
    }
  ],
  [
    'path',
    {
      d: 'M12 18V21'
    }
  ],
  [
    'path',
    {
      d: 'M21 12L18 12'
    }
  ],
  [
    'path',
    {
      d: 'M6 12L3 12'
    }
  ],
  [
    'path',
    {
      d: 'M18.3635 5.63672L16.2422 7.75804'
    }
  ],
  [
    'path',
    {
      d: 'M7.75804 16.2422L5.63672 18.3635'
    }
  ],
  [
    'path',
    {
      d: 'M18.3635 18.3635L16.2422 16.2422'
    }
  ],
  [
    'path',
    {
      d: 'M7.75804 7.75804L5.63672 5.63672'
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

Loading3Icon.displayName = 'Loading3Icon';
export default Loading3Icon;
