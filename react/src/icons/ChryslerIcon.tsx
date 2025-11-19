import React from 'react';
import config from '../config';

interface ChryslerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChryslerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chrysler)
 * @see {@link https://clicons.dev/icon/chrysler}
 */
const ChryslerIcon = React.forwardRef<SVGSVGElement, ChryslerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5 22V19C5 15.134 8.13401 12 12 12C15.866 12 19 15.134 19 19V22'
    }
  ],
  [
    'path',
    {
      d: 'M9 22V20C9 18.3431 10.3431 17 12 17C13.6569 17 15 18.3431 15 20V22'
    }
  ],
  [
    'path',
    {
      d: 'M8 13V12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12V13'
    }
  ],
  [
    'path',
    {
      d: 'M9 9V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V9'
    }
  ],
  [
    'path',
    {
      d: 'M12 4V2'
    }
  ],
  [
    'path',
    {
      d: 'M12 12V11'
    }
  ],
  [
    'path',
    {
      d: 'M12 8V7'
    }
  ],
  [
    'path',
    {
      d: 'M12 17V15'
    }
  ],
  [
    'path',
    {
      d: 'M8 19H9M15 19H16'
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

ChryslerIcon.displayName = 'ChryslerIcon';
export default ChryslerIcon;
