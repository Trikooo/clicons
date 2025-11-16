import React from 'react';
import config from '../config';

interface CricketHelmetIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CricketHelmetIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cricket-helmet)
 * @see {@link https://clicons.dev/icon/cricket-helmet}
 */
const CricketHelmetIcon = React.forwardRef<SVGSVGElement, CricketHelmetIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21 9.43911C19.6952 5.66379 16.0498 3 11.7568 3C6.36825 3 2 7.281 2 12.5619C2 15.503 3.35496 18.134 5.4865 19.888C6.83589 20.9984 8.24101 20.9851 9.93379 20.9851C11.1114 20.9851 12.7258 21.1962 13.4402 20.03C14.695 17.9818 12.2704 15.1302 13.8559 13.025C14.3237 12.4039 15.0997 12.0593 16.6516 11.3701L21 9.43911ZM21 9.43911L22 8.99503'
    }
  ],
  [
    'path',
    {
      d: 'M10.0078 17L9.99883 17'
    }
  ],
  [
    'path',
    {
      d: 'M22 15.9114L17.6345 16.4677C15.8154 16.6995 14.0804 15.6639 13.5 14'
    }
  ],
  [
    'path',
    {
      d: 'M16 12L16.6046 17.4417C16.7927 19.1343 16.8867 19.9805 17.4562 20.4903C18.0258 21 18.8772 21 20.5802 21H22'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 16L20.5 21'
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

CricketHelmetIcon.displayName = 'CricketHelmetIcon';
export default CricketHelmetIcon;
