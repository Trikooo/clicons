import React from 'react';
import config from '../config';

interface LayersLogoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LayersLogoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/layers-logo)
 * @see {@link https://clicons.dev/icon/layers-logo}
 */
const LayersLogoIcon = React.forwardRef<SVGSVGElement, LayersLogoIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.87868 20.1214C10.7574 21.0001 12.1716 21.0001 15 21.0001C17.8284 21.0001 19.2426 21.0001 20.1213 20.1214C21 19.2428 21 17.8285 21 15.0001C21 12.1717 21 10.7575 20.1213 9.8788C19.2426 9.00012 17.8284 9.00012 15 9.00012C12.1716 9.00012 10.7574 9.00012 9.87868 9.8788C9 10.7575 9 12.1717 9 15.0001C9 17.8285 9 19.2428 9.87868 20.1214Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.9239 9.00012C17.828 8.02504 17.6112 7.36869 17.1213 6.8788C16.2426 6.00012 14.8284 6.00012 12 6.00012C9.17157 6.00012 7.75736 6.00012 6.87868 6.8788C6 7.75748 6 9.17169 6 12.0001C6 14.8285 6 16.2428 6.87868 17.1214C7.36857 17.6113 8.02491 17.8281 9 17.924'
    }
  ],
  [
    'path',
    {
      d: 'M14.9239 6.00012C14.828 5.02504 14.6112 4.36869 14.1213 3.8788C13.2426 3.00012 11.8284 3.00012 9 3.00012C6.17157 3.00012 4.75736 3.00012 3.87868 3.8788C3 4.75748 3 6.17169 3 9.00012C3 11.8285 3 13.2428 3.87868 14.1214C4.36857 14.6113 5.02491 14.8281 6 14.924'
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

LayersLogoIcon.displayName = 'LayersLogoIcon';
export default LayersLogoIcon;
