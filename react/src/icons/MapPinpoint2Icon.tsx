import React from 'react';
import config from '../config';

interface MapPinpoint2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MapPinpoint2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/map-pinpoint2)
 * @see {@link https://clicons.dev/icon/map-pinpoint2}
 */
const MapPinpoint2Icon = React.forwardRef<SVGSVGElement, MapPinpoint2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 9C19.1434 4.9811 14.9912 2 11.0011 2C7.45834 2 4.08963 4.09916 2.68627 7.37966C0.090763 13.4469 5.41302 17.626 9.38449 21.367C9.81818 21.773 10.3978 22 11.0011 22C11.5513 22 12.0819 21.8112 12.5 21.4699'
    }
  ],
  [
    'path',
    {
      d: 'M14 9.19621C13.3876 8.17979 12.2732 7.5 11 7.5C9.067 7.5 7.5 9.067 7.5 11C7.5 12.3962 8.31753 13.6015 9.5 14.1632'
    }
  ],
  [
    'path',
    {
      d: 'M17 16H17.009'
    }
  ],
  [
    'path',
    {
      d: 'M17.8981 21.6518C17.6572 21.8752 17.3352 22 17.0001 22C16.665 22 16.343 21.8752 16.1021 21.6518C13.8959 19.5943 10.9394 17.2958 12.3812 13.9588C13.1608 12.1545 15.0321 11 17.0001 11C18.9681 11 20.8394 12.1545 21.619 13.9588C23.059 17.2916 20.1097 19.6014 17.8981 21.6518Z'
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

MapPinpoint2Icon.displayName = 'MapPinpoint2Icon';
export default MapPinpoint2Icon;
