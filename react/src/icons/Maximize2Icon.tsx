import React from 'react';
import config from '../config';

interface Maximize2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Maximize2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/maximize2)
 * @see {@link https://clicons.dev/icon/maximize2}
 */
const Maximize2Icon = React.forwardRef<SVGSVGElement, Maximize2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.86292 12.6614L9.99786 14.4926L12.6639 4.26536C12.8615 3.5074 13.5456 2.97852 14.3283 2.97852C15.4379 2.97852 16.2572 4.01415 16.0026 5.09485L14.801 10.1953L16.489 10.4653C18.4186 10.755 19.3835 10.8997 20.063 11.3072C21.1856 11.9802 21.9988 12.9908 21.9988 14.4662C21.9988 15.4938 21.745 16.1833 21.128 18.0356C20.7365 19.211 20.5407 19.7988 20.2215 20.2639C19.6959 21.0299 18.9205 21.589 18.0283 21.8459C17.4863 22.0017 16.8673 22.0017 15.6292 22.0017H14.5798C12.9337 22.0017 12.1107 22.0017 11.3781 21.6995C11.2467 21.6453 11.1182 21.5841 10.9934 21.5163C10.2969 21.1378 9.77798 20.4986 8.74003 19.2203L5.37984 15.0816C4.86348 14.4458 4.86004 13.5355 5.37157 12.8957C5.98639 12.1266 7.11568 12.0204 7.86292 12.6614Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.87097 4.61648C9.87097 4.61648 10.1165 2.39578 9.87097 2.1537M9.87097 2.1537C9.55241 1.83972 7.33204 2.10402 7.33204 2.10402M9.87097 2.1537L6.90055 5.09574M2.11011 7.34599C2.11011 7.34599 1.86456 9.56668 2.11011 9.80877M2.11011 9.80877C2.42866 10.1227 4.64903 9.85845 4.64903 9.85845M2.11011 9.80877L5.08053 6.86673'
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

Maximize2Icon.displayName = 'Maximize2Icon';
export default Maximize2Icon;
