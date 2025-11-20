import React from 'react';
import config from '../config';

interface ArrowAllDirectionIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArrowAllDirectionIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/arrow-all-direction)
 * @see {@link https://clicons.dev/icon/arrow-all-direction}
 */
const ArrowAllDirectionIcon = React.forwardRef<SVGSVGElement, ArrowAllDirectionIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11.9902 8.98595V3.31543'
    }
  ],
  [
    'path',
    {
      d: 'M11.9902 20.6705V15'
    }
  ],
  [
    'path',
    {
      d: 'M20.6702 12.0001L14.9999 11.9482'
    }
  ],
  [
    'path',
    {
      d: 'M9.00031 12.0001L3.33002 11.9482'
    }
  ],
  [
    'path',
    {
      d: 'M14.9999 5.99998C14.9999 5.99998 12.7904 3.00001 11.9999 3C11.2093 2.99999 8.99994 6 8.99994 6'
    }
  ],
  [
    'path',
    {
      d: 'M5.99992 15C5.99992 15 2.99995 12.7905 2.99994 12C2.99993 11.2094 5.99994 9 5.99994 9'
    }
  ],
  [
    'path',
    {
      d: 'M17.9999 9C17.9999 9 20.9999 11.2095 20.9999 12C20.9999 12.7906 17.9999 15 17.9999 15'
    }
  ],
  [
    'path',
    {
      d: 'M8.99994 18C8.99994 18 11.2094 21 11.9999 21C12.7905 21 14.9999 18 14.9999 18'
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

ArrowAllDirectionIcon.displayName = 'ArrowAllDirectionIcon';
export default ArrowAllDirectionIcon;
