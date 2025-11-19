import React from 'react';
import config from '../config';

interface PoliceStationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PoliceStationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/police-station)
 * @see {@link https://clicons.dev/icon/police-station}
 */
const PoliceStationIcon = React.forwardRef<SVGSVGElement, PoliceStationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.6181 6.99985C16.2653 7.12386 16.7429 7.34165 17.1213 7.72416C18 8.61245 18 10.0421 18 12.9015V21.9998H6V12.9015C6 10.0421 6 8.61245 6.87868 7.72416C7.25705 7.34165 7.73473 7.12386 8.38188 6.99985'
    }
  ],
  [
    'path',
    {
      d: 'M18 21.9998H21C21.4714 21.9998 21.7071 21.9998 21.8536 21.8534C22 21.707 22 21.4713 22 20.9998V15.9998C22 14.1142 22 13.1714 21.4142 12.5856C20.8284 11.9998 19.8856 11.9998 18 11.9998'
    }
  ],
  [
    'path',
    {
      d: 'M6 21.9998H3C2.5286 21.9998 2.29289 21.9998 2.14645 21.8534C2 21.707 2 21.4713 2 20.9998V15.9998C2 14.1142 2 13.1714 2.58579 12.5856C3.17157 11.9998 4.11438 11.9998 6 11.9998'
    }
  ],
  [
    'path',
    {
      d: 'M12 22L12 19'
    }
  ],
  [
    'path',
    {
      d: 'M9 15H10.2M15 15H13.8'
    }
  ],
  [
    'path',
    {
      d: 'M8.04217 4C10.9662 4 12.0004 2 12.0004 2C12.0004 2 13.0338 4 15.9578 4C16.1752 5.6875 15.6528 9.65 12.0004 11C8.34791 9.65 7.82476 5.6875 8.04217 4Z'
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

PoliceStationIcon.displayName = 'PoliceStationIcon';
export default PoliceStationIcon;
