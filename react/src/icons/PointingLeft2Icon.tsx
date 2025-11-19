import React from 'react';
import config from '../config';

interface PointingLeft2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PointingLeft2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pointing-left2)
 * @see {@link https://clicons.dev/icon/pointing-left2}
 */
const PointingLeft2Icon = React.forwardRef<SVGSVGElement, PointingLeft2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 19.8917H20.382C19.4564 19.8917 18.488 20.6158 17.6892 20.9983C16.2125 21.7055 13.3226 22.6731 11.9618 21.3209C9.81667 19.1893 9.42404 16.2081 9.5 14.4999L3.75 14.4999C2.7835 14.4999 2 13.7164 2 12.7499C2 11.7834 2.7835 10.9999 3.75 10.9999L10.0001 10.9999M10.0001 10.9999L14 10.9999M10.0001 10.9999C10.0177 10.9765 12.1753 8.12164 13.6086 7.62367C14.8916 7.17793 16.0336 8.03229 17.0914 8.67457C17.9105 9.1719 19.9316 11 21.0049 11H22'
    }
  ],
  [
    'path',
    {
      d: 'M2 4.5L8 4.5M2 4.5C2 3.79977 3.9943 2.49153 4.5 2M2 4.5C2 5.20023 3.9943 6.50847 4.5 7'
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

PointingLeft2Icon.displayName = 'PointingLeft2Icon';
export default PointingLeft2Icon;
