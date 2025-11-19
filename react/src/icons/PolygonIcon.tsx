import React from 'react';
import config from '../config';

interface PolygonIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PolygonIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/polygon)
 * @see {@link https://clicons.dev/icon/polygon}
 */
const PolygonIcon = React.forwardRef<SVGSVGElement, PolygonIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 14.0147V9.98528C2 8.75903 2 8.1459 2.22836 7.59459C2.45672 7.04328 2.89027 6.60973 3.75736 5.74264L5.74264 3.75736C6.60973 2.89027 7.04328 2.45672 7.59459 2.22836C8.1459 2 8.75903 2 9.98528 2H14.0147C15.241 2 15.8541 2 16.4054 2.22836C16.9567 2.45672 17.3903 2.89027 18.2574 3.75736L20.2426 5.74264C21.1097 6.60973 21.5433 7.04328 21.7716 7.59459C22 8.1459 22 8.75903 22 9.98528V14.0147C22 15.241 22 15.8541 21.7716 16.4054C21.5433 16.9567 21.1097 17.3903 20.2426 18.2574L18.2574 20.2426C17.3903 21.1097 16.9567 21.5433 16.4054 21.7716C15.8541 22 15.241 22 14.0147 22H9.98528C8.75903 22 8.1459 22 7.59459 21.7716C7.04328 21.5433 6.60973 21.1097 5.74264 20.2426L3.75736 18.2574C2.89027 17.3903 2.45672 16.9567 2.22836 16.4054C2 15.8541 2 15.241 2 14.0147Z'
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

PolygonIcon.displayName = 'PolygonIcon';
export default PolygonIcon;
