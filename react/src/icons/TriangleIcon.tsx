import React from 'react';
import config from '../config';

interface TriangleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TriangleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/triangle)
 * @see {@link https://clicons.dev/icon/triangle}
 */
const TriangleIcon = React.forwardRef<SVGSVGElement, TriangleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.89754 6.73262C9.71204 3.57754 10.6193 2 12 2C13.3807 2 14.288 3.57754 16.1025 6.73262L19.8592 13.2648C21.5848 16.2653 22.4476 17.7656 21.7671 18.8828C21.0866 20 19.3099 20 15.7567 20H8.24328C4.69006 20 2.91344 20 2.23293 18.8828C1.55242 17.7656 2.41522 16.2653 4.14082 13.2648L7.89754 6.73262Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 20V22'
    }
  ],
  [
    'path',
    {
      d: 'M20 9L18 10'
    }
  ],
  [
    'path',
    {
      d: 'M4 9L6 10'
    }
  ],
  [
    'path',
    {
      d: 'M4 14.409C5.88945 15.0512 7.25244 16.8771 7.25244 19.0294C7.25244 19.3617 7.21994 19.6863 7.158 20M16.842 20C16.7801 19.6863 16.7476 19.3617 16.7476 19.0294C16.7476 16.8771 18.1105 15.0512 20 14.409M15.2815 6C14.429 6.83606 13.273 7.34965 12 7.34965C10.727 7.34965 9.57102 6.83606 8.71851 6'
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

TriangleIcon.displayName = 'TriangleIcon';
export default TriangleIcon;
