import React from 'react';
import config from '../config';

interface LocationShareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LocationShareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/location-share)
 * @see {@link https://clicons.dev/icon/location-share}
 */
const LocationShareIcon = React.forwardRef<SVGSVGElement, LocationShareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.1677 7C22.2774 9.54466 22.2774 12.4569 21.1677 15.0015M2.83226 15.0015C1.72258 12.4569 1.72258 9.54466 2.83226 7'
    }
  ],
  [
    'path',
    {
      d: 'M13.3472 19.9619C12.9858 20.3071 12.5028 20.5 12.0002 20.5C11.4975 20.5 11.0145 20.3071 10.6531 19.9619C7.34389 16.7821 2.90913 13.2299 5.07183 8.07272C6.24118 5.28428 9.04815 3.5 12.0002 3.5C14.9522 3.5 17.7591 5.28428 18.9285 8.07272C21.0885 13.2234 16.6646 16.793 13.3472 19.9619Z'
    }
  ],
  [
    'path',
    {
      d: 'M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z'
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

LocationShareIcon.displayName = 'LocationShareIcon';
export default LocationShareIcon;
