import React from 'react';
import config from '../config';

interface RoadLocationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RoadLocationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/road-location)
 * @see {@link https://clicons.dev/icon/road-location}
 */
const RoadLocationIcon = React.forwardRef<SVGSVGElement, RoadLocationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.5 15L16.5 15M13 15L11 15M7.5 15L5.5 15'
    }
  ],
  [
    'path',
    {
      d: 'M12 2C9.79086 2 8 3.80892 8 6.04033C8 7.31626 8.5 8.30834 9.5 9.1945C10.2049 9.81911 11.0588 10.8566 11.5714 11.6975C11.8173 12.1008 12.165 12.1008 12.4286 11.6975C12.9672 10.8733 13.7951 9.81911 14.5 9.1945C15.5 8.30834 16 7.31626 16 6.04033C16 3.80892 14.2091 2 12 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 6H12.009'
    }
  ],
  [
    'path',
    {
      d: 'M19 8C19.7745 8.14988 20.3588 8.40002 20.8284 8.81749C22 9.85903 22 11.5353 22 14.888C22 18.2406 22 19.9169 20.8284 20.9585C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.9585C2 19.9169 2 18.2406 2 14.888C2 11.5353 2 9.85902 3.17157 8.81749C3.64118 8.40002 4.2255 8.14988 5 8'
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

RoadLocationIcon.displayName = 'RoadLocationIcon';
export default RoadLocationIcon;
