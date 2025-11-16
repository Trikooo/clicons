import React from 'react';
import config from '../config';

interface PropertyViewIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PropertyViewIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/property-view)
 * @see {@link https://clicons.dev/icon/property-view}
 */
const PropertyViewIcon = React.forwardRef<SVGSVGElement, PropertyViewIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.9977 12.5032C20.9977 12.5032 21 12.0338 21 11.5029C21 7.02321 21 4.78334 19.6088 3.39167C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.39167C2 4.78334 2 7.02321 2 11.5029C2 15.9827 2 18.2225 3.39124 19.6142C4.55785 20.7812 6.32067 20.9696 9.5 21'
    }
  ],
  [
    'path',
    {
      d: 'M2 7H21'
    }
  ],
  [
    'path',
    {
      d: 'M6 16H7M10 12H15M6 12H7'
    }
  ],
  [
    'path',
    {
      d: 'M17 18.5H17.009'
    }
  ],
  [
    'path',
    {
      d: 'M21.772 18.0225C21.924 18.2357 22 18.3422 22 18.5C22 18.6578 21.924 18.7643 21.772 18.9775C21.089 19.9353 19.3446 22 17 22C14.6554 22 12.911 19.9353 12.228 18.9775C12.076 18.7643 12 18.6578 12 18.5C12 18.3422 12.076 18.2357 12.228 18.0225C12.911 17.0647 14.6554 15 17 15C19.3446 15 21.089 17.0647 21.772 18.0225Z'
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

PropertyViewIcon.displayName = 'PropertyViewIcon';
export default PropertyViewIcon;
