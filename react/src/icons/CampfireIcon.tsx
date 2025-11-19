import React from 'react';
import config from '../config';

interface CampfireIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CampfireIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/campfire)
 * @see {@link https://clicons.dev/icon/campfire}
 */
const CampfireIcon = React.forwardRef<SVGSVGElement, CampfireIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.6709 16C18.5134 14.8191 19 13.4095 19 12C19 8 17.5 7 17.5 7C16.9615 8.5 15.5 9 15.5 9C15.5 3.5 12 2 12 2C12 2 8.5 3.5 8.5 9C8.5 9 7.03846 8.5 6.5 7C6.5 7 5 8 5 12C5 13.4095 5.48656 14.8191 6.32905 16'
    }
  ],
  [
    'path',
    {
      d: 'M19 19H5C4.44772 19 4 19.4477 4 20V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V20C20 19.4477 19.5523 19 19 19Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 16C14.5 13.5 12 11 12 11C12 11 9.5 13.5 9.5 16'
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

CampfireIcon.displayName = 'CampfireIcon';
export default CampfireIcon;
