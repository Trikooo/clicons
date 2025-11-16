import React from 'react';
import config from '../config';

interface AlignTopIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AlignTopIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/align-top)
 * @see {@link https://clicons.dev/icon/align-top}
 */
const AlignTopIcon = React.forwardRef<SVGSVGElement, AlignTopIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.502 7.99988C17.3458 7.99988 18.3198 7.9165 18.801 8.74988C19.002 9.09795 19.002 9.56526 19.002 10.4999V11.4999C19.002 12.4345 19.002 12.9018 18.801 13.2499C18.3198 14.0832 17.3458 13.9999 16.502 13.9999C15.6581 13.9999 14.6841 14.0832 14.2029 13.2499C14.002 12.9018 14.002 12.4345 14.002 11.4999L14.002 10.4999C14.002 9.56526 14.002 9.09795 14.2029 8.74988C14.6841 7.9165 15.6581 7.99988 16.502 7.99988Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.50195 7.99988C8.34585 7.99988 9.31984 7.9165 9.80099 8.74988C10.002 9.09795 10.002 9.56526 10.002 10.4999L10.002 17.4999C10.002 18.4345 10.002 18.9018 9.80099 19.2499C9.31984 20.0832 8.34585 19.9999 7.50195 19.9999C6.65806 19.9999 5.68406 20.0832 5.20292 19.2499C5.00195 18.9018 5.00195 18.4345 5.00195 17.4999L5.00195 10.4999C5.00195 9.56526 5.00195 9.09795 5.20292 8.74988C5.68406 7.9165 6.65806 7.99988 7.50195 7.99988Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 4L2 4'
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

AlignTopIcon.displayName = 'AlignTopIcon';
export default AlignTopIcon;
