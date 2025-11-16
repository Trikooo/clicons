import React from 'react';
import config from '../config';

interface PropertyNewIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PropertyNewIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/property-new)
 * @see {@link https://clicons.dev/icon/property-new}
 */
const PropertyNewIcon = React.forwardRef<SVGSVGElement, PropertyNewIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.50014 11.9999C2.50014 7.52157 2.50014 5.28239 3.89138 3.89115C5.28263 2.49991 7.5218 2.49991 12.0001 2.49991C16.4785 2.49991 18.7177 2.49991 20.1089 3.89115C21.5001 5.28239 21.5001 7.52157 21.5001 11.9999C21.5001 16.4783 21.5001 18.7174 20.1089 20.1087C18.7177 21.4999 16.4785 21.4999 12.0001 21.4999C7.5218 21.4999 5.28263 21.4999 3.89138 20.1087C2.50014 18.7174 2.50014 16.4783 2.50014 11.9999Z'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 8H21.5'
    }
  ],
  [
    'path',
    {
      d: 'M11 17H17M7 17H8'
    }
  ],
  [
    'path',
    {
      d: 'M11 13H17M7 13H8'
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

PropertyNewIcon.displayName = 'PropertyNewIcon';
export default PropertyNewIcon;
