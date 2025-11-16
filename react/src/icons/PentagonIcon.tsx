import React from 'react';
import config from '../config';

interface PentagonIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PentagonIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pentagon)
 * @see {@link https://clicons.dev/icon/pentagon}
 */
const PentagonIcon = React.forwardRef<SVGSVGElement, PentagonIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.43816 3.93226C10.1564 2.64409 11.0155 2 12 2C12.9845 2 13.8436 2.64409 15.5618 3.93226L19.004 6.51285C20.7222 7.80103 21.5814 8.44512 21.8856 9.41125C22.1898 10.3774 21.8616 11.4195 21.2053 13.5038L19.8905 17.6793C19.2342 19.7636 18.9061 20.8058 18.1096 21.4029C17.3132 22 16.2512 22 14.1274 22H9.87263C7.74876 22 6.68682 22 5.89037 21.4029C5.09392 20.8058 4.76576 19.7636 4.10945 17.6793L2.79467 13.5038C2.13835 11.4195 1.8102 10.3774 2.11441 9.41125C2.41863 8.44512 3.27776 7.80103 4.99601 6.51285L8.43816 3.93226Z'
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

PentagonIcon.displayName = 'PentagonIcon';
export default PentagonIcon;
