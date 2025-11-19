import React from 'react';
import config from '../config';

interface CurtainsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CurtainsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/curtains)
 * @see {@link https://clicons.dev/icon/curtains}
 */
const CurtainsIcon = React.forwardRef<SVGSVGElement, CurtainsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 3L2 3'
    }
  ],
  [
    'path',
    {
      d: 'M5 14C5.5985 13.2925 6.76719 11.3937 7 9'
    }
  ],
  [
    'path',
    {
      d: 'M19 14C18.4015 13.2925 17.2328 11.3937 17 9'
    }
  ],
  [
    'path',
    {
      d: 'M3 3V14.625M3 14.625V16.75C3 18.7535 3 19.7552 3.58579 20.3776C4.17157 21 5.11438 21 7 21H8C8 19.5311 7.6 16.0778 6 14.0154M3 14.625C4.14794 14.5482 5.14101 14.3343 6 14.0154M6 14.0154C9.88075 12.5749 12.0001 7.21447 12 3'
    }
  ],
  [
    'path',
    {
      d: 'M21 3V14.625M21 14.625V16.75C21 18.7535 21 19.7552 20.4142 20.3776C19.8284 21 18.8856 21 17 21H16C16 19.5311 16.4 16.0778 18 14.0154M21 14.625C19.8521 14.5482 18.859 14.3343 18 14.0154M18 14.0154C14.1192 12.5749 11.9999 7.21447 12 3'
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

CurtainsIcon.displayName = 'CurtainsIcon';
export default CurtainsIcon;
