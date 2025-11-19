import React from 'react';
import config from '../config';

interface Male2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Male2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/male2)
 * @see {@link https://clicons.dev/icon/male2}
 */
const Male2Icon = React.forwardRef<SVGSVGElement, Male2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5 16.5001L18.216 17.6178C19.6034 18.0424 20.6341 19.1553 20.9763 20.51C21.1115 21.0457 20.6489 21.5001 20.0936 21.5001H3.90639C3.35107 21.5001 2.88845 21.0457 3.02375 20.51C3.36593 19.1553 4.39659 18.0424 5.78401 17.6178L9.5 16.5001V14.5623C7.71916 13.1685 6.5 11.4999 6.5 7.91674C6.5 4.32689 8.45474 2.49993 11.4923 2.49993C13.6433 2.49993 14.5385 3.49993 14.5385 3.49993C17.0769 3.49993 17.5 5.59712 17.5 7.91674C17.5 11.4999 16.2808 13.1685 14.5 14.5623V16.5001Z'
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

Male2Icon.displayName = 'Male2Icon';
export default Male2Icon;
