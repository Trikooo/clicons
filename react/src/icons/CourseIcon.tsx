import React from 'react';
import config from '../config';

interface CourseIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CourseIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/course)
 * @see {@link https://clicons.dev/icon/course}
 */
const CourseIcon = React.forwardRef<SVGSVGElement, CourseIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.0002 15C20.0002 16.8638 20.0002 17.7956 19.6957 18.5307C19.2897 19.5108 18.511 20.2895 17.5309 20.6955C16.7958 21 15.8639 21 14.0002 21H11.0002C7.22898 21 5.34334 21 4.17177 19.8284C3.00019 18.6568 3.00021 16.7712 3.00024 12.9999L3.0003 6.99983C3.00032 4.79078 4.79112 3 7.00017 3'
    }
  ],
  [
    'path',
    {
      d: 'M10.0002 8.5L10.4339 12.4689C10.4753 12.8007 10.6792 13.0899 10.9864 13.2219C11.6724 13.5165 12.9572 14 14.0002 14C15.0433 14 16.3281 13.5165 17.0141 13.2219C17.3213 13.0899 17.5252 12.8007 17.5666 12.4689L18.0002 8.5M20.5002 7.5V11.2692M14.0002 4L7.00024 7L14.0002 10L21.0002 7L14.0002 4Z'
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

CourseIcon.displayName = 'CourseIcon';
export default CourseIcon;
