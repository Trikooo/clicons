import React from 'react';
import config from '../config';

interface Touch2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Touch2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/touch2)
 * @see {@link https://clicons.dev/icon/touch2}
 */
const Touch2Icon = React.forwardRef<SVGSVGElement, Touch2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.1422 21.998C17.0905 20.084 17.2194 19.8535 17.3561 19.4277C17.4929 19.002 18.4492 17.4665 18.7875 16.3695C19.8823 12.8202 18.862 12.0653 17.5016 11.0588C15.9931 9.94257 13.1478 9.37728 11.7367 9.49966V3.7462C11.7367 2.78288 10.9558 2.00195 9.99246 2.00195C9.02914 2.00195 8.24821 2.78288 8.24821 3.7462V9.96607M8.24872 21.9988V20.9854C8.18426 20.041 7.24627 18.9235 6.0777 17.3166C4.87607 15.576 4.61785 14.6973 4.80689 13.8848C4.90426 13.4694 5.15692 12.7832 6.39745 11.6104L8.24821 9.96607M8.24821 14.0323V9.96607'
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

Touch2Icon.displayName = 'Touch2Icon';
export default Touch2Icon;
