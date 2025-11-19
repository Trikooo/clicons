import React from 'react';
import config from '../config';

interface AdzanIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AdzanIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/adzan)
 * @see {@link https://clicons.dev/icon/adzan}
 */
const AdzanIcon = React.forwardRef<SVGSVGElement, AdzanIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.59279 12C2.73603 6.28571 10.1661 4.5 11.9987 2C13.8316 4.5 21.2614 6.28571 17.4021 12H6.59279Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 16L12 18'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 12V16.2857C6.5 18.9795 6.5 20.3263 7.30546 21.1632C8.11091 22 9.40728 22 12 22C14.5927 22 15.8891 22 16.6945 21.1632C17.5 20.3263 17.5 18.9795 17.5 16.2857V12'
    }
  ],
  [
    'path',
    {
      d: 'M20 14L21 13.5M20 18L21 18.5'
    }
  ],
  [
    'path',
    {
      d: 'M4 14L3 13.5M4 18L3 18.5'
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

AdzanIcon.displayName = 'AdzanIcon';
export default AdzanIcon;
