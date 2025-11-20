import React from 'react';
import config from '../config';

interface ArrowTriangleUpRightIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ArrowTriangleUpRightIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/arrow-triangle-up-right)
 * @see {@link https://clicons.dev/icon/arrow-triangle-up-right}
 */
const ArrowTriangleUpRightIcon = React.forwardRef<SVGSVGElement, ArrowTriangleUpRightIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.5 10.5L5.99969 18'
    }
  ],
  [
    'path',
    {
      d: 'M15.5407 6.08278L14.2989 6.19567C12.287 6.37857 11.2811 6.47002 11.0444 7.12388C10.8076 7.77774 11.5219 8.49198 12.9504 9.92046L14.0792 11.0493C15.5077 12.4778 16.222 13.1921 16.8758 12.9553C17.5297 12.7186 17.6211 11.7127 17.804 9.70078L17.9169 8.45902C18.027 7.24766 18.0821 6.64198 17.7199 6.27979C17.3577 5.9176 16.752 5.97266 15.5407 6.08278Z'
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

ArrowTriangleUpRightIcon.displayName = 'ArrowTriangleUpRightIcon';
export default ArrowTriangleUpRightIcon;
