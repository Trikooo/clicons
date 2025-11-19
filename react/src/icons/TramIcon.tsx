import React from 'react';
import config from '../config';

interface TramIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TramIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tram)
 * @see {@link https://clicons.dev/icon/tram}
 */
const TramIcon = React.forwardRef<SVGSVGElement, TramIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5 2H14M19 2H14M14 2L12 5'
    }
  ],
  [
    'path',
    {
      d: 'M8 20L7 22'
    }
  ],
  [
    'path',
    {
      d: 'M16 20L17 22'
    }
  ],
  [
    'path',
    {
      d: 'M5 13V12C5 8.70017 5 7.05025 6.02513 6.02513C7.05025 5 8.70017 5 12 5C15.2998 5 16.9497 5 17.9749 6.02513C19 7.05025 19 8.70017 19 12V13C19 16.2998 19 17.9497 17.9749 18.9749C16.9497 20 15.2998 20 12 20C8.70017 20 7.05025 20 6.02513 18.9749C5 17.9497 5 16.2998 5 13Z'
    }
  ],
  [
    'path',
    {
      d: 'M5 14C5 14 8.26667 15 12 15C15.7333 15 19 14 19 14'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 17H18.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 8H18.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 17H7.5'
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

TramIcon.displayName = 'TramIcon';
export default TramIcon;
