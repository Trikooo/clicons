import React from 'react';
import config from '../config';

interface PieChart9IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PieChart9Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pie-chart9)
 * @see {@link https://clicons.dev/icon/pie-chart9}
 */
const PieChart9Icon = React.forwardRef<SVGSVGElement, PieChart9IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.5557 4.61883C15.7488 4.07099 14.8724 3.64848 13.9552 3.3602C12.7981 2.99648 12.2195 2.81462 11.6098 3.2715C11 3.72839 11 4.4705 11 5.95472V10.5064C11 11.7697 11 12.4013 11.2341 12.9676C11.4683 13.534 11.9122 13.9761 12.8 14.8604L15.999 18.0466C17.0421 19.0855 17.5637 19.605 18.3116 19.4823C19.0596 19.3597 19.3367 18.8125 19.8911 17.7182C20.3153 16.881 20.6251 15.9835 20.8079 15.0499C21.1937 13.0788 20.9957 11.0358 20.2388 9.17903C19.4819 7.32232 18.2002 5.73535 16.5557 4.61883Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 20.4185C13.0736 20.7935 12.0609 21 11 21C6.58172 21 3 17.4183 3 13C3 9.56306 5.16736 6.63232 8.20988 5.5'
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

PieChart9Icon.displayName = 'PieChart9Icon';
export default PieChart9Icon;
