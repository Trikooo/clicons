import React from 'react';
import config from '../config';

interface ChinaTempleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChinaTempleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/china-temple)
 * @see {@link https://clicons.dev/icon/china-temple}
 */
const ChinaTempleIcon = React.forwardRef<SVGSVGElement, ChinaTempleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 12C19.6 12 17.6667 10.6667 17 10H7C6.33333 10.6667 4.4 12 2 12L2.17082 12.3416C2.679 13.358 3.71779 14 4.8541 14H19.1459C20.2822 14 21.321 13.358 21.8292 12.3416L22 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M19 4C17.547 4 16.265 3.51128 15.3316 2.97766C14.3479 2.41529 13.8561 2.13411 13.6037 2.06705C13.3513 2 13.0153 2 12.3431 2H11.6569C10.9847 2 10.6487 2 10.3963 2.06705C10.1439 2.13411 9.65207 2.41529 8.66839 2.97766C7.735 3.51128 6.45303 4 5 4L5.17082 4.34164C5.679 5.35799 6.71779 6 7.8541 6H16.1459C17.2822 6 18.321 5.35799 18.8292 4.34164L19 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 10V6'
    }
  ],
  [
    'path',
    {
      d: 'M7 10V6'
    }
  ],
  [
    'path',
    {
      d: 'M19 22V14'
    }
  ],
  [
    'path',
    {
      d: 'M5 22V14'
    }
  ],
  [
    'path',
    {
      d: 'M3 22H21'
    }
  ],
  [
    'path',
    {
      d: 'M10 22V19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19V22'
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

ChinaTempleIcon.displayName = 'ChinaTempleIcon';
export default ChinaTempleIcon;
