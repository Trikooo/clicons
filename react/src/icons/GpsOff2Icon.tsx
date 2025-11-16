import React from 'react';
import config from '../config';

interface GpsOff2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GpsOff2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/gps-off2)
 * @see {@link https://clicons.dev/icon/gps-off2}
 */
const GpsOff2Icon = React.forwardRef<SVGSVGElement, GpsOff2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.5139 11.9999C20.5139 16.6944 16.7083 20.4999 12.0139 20.4999C7.31943 20.4999 3.51385 16.6944 3.51385 11.9999C3.51385 7.30552 7.31943 3.49994 12.0139 3.49994C16.7083 3.49994 20.5139 7.30552 20.5139 11.9999Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.0002 9L9.00019 15M15.0002 15L9.00019 9'
    }
  ],
  [
    'path',
    {
      d: 'M22.5 12H20.5'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 12H1.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 1.5L12 3.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 20.5V22.5'
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

GpsOff2Icon.displayName = 'GpsOff2Icon';
export default GpsOff2Icon;
