import React from 'react';
import config from '../config';

interface LassoToolIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LassoToolIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/lasso-tool)
 * @see {@link https://clicons.dev/icon/lasso-tool}
 */
const LassoToolIcon = React.forwardRef<SVGSVGElement, LassoToolIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.3003 15.5116C20.3416 12.9804 22.6484 9.95901 21.8354 6.92985C20.7852 3.01732 15.5349 1.02232 10.1083 2.4739C4.68179 3.92547 1.13402 8.27394 2.18415 12.1865C3.03697 15.3638 5.88849 16.9746 10.3503 16.42M17.3003 15.5116C15.9161 11.5244 9.71766 12.8164 10.002 15.5116C10.2129 17.5105 14.9298 17.5105 17.3003 15.5116ZM17.3003 15.5116C18.1269 18.2959 16.2449 21.4457 12.9572 22'
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

LassoToolIcon.displayName = 'LassoToolIcon';
export default LassoToolIcon;
