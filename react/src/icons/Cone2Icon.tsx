import React from 'react';
import config from '../config';

interface Cone2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Cone2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cone2)
 * @see {@link https://clicons.dev/icon/cone2}
 */
const Cone2Icon = React.forwardRef<SVGSVGElement, Cone2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 19H15M15 19C15 18.2322 14.7071 17.4645 14.1213 16.8787C12.9497 15.7071 11.0503 15.7071 9.87868 16.8787C8.70711 18.0503 8.70711 19.9497 9.87868 21.1213C11.0503 22.2929 12.9497 22.2929 14.1213 21.1213C14.7071 20.5355 15 19.7678 15 19Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 3L12 6'
    }
  ],
  [
    'path',
    {
      d: 'M11.9998 12H12.0088'
    }
  ],
  [
    'path',
    {
      d: 'M11.9998 9H12.0088'
    }
  ],
  [
    'path',
    {
      d: 'M2.94867 11.4964C4.92231 14.2156 8.24 16 12 16C15.76 16 19.0777 14.2156 21.0513 11.4964C21.7599 10.5203 22.1141 10.0322 21.9672 9.18232C21.8203 8.33248 21.1837 7.89241 19.9104 7.01228L14.3985 3.20228C13.239 2.40076 12.6592 2 12 2C11.3408 2 10.761 2.40076 9.60147 3.20228L4.08961 7.01228C2.81635 7.89241 2.17971 8.33248 2.03278 9.18232C1.88585 10.0322 2.24013 10.5203 2.94867 11.4964Z'
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

Cone2Icon.displayName = 'Cone2Icon';
export default Cone2Icon;
