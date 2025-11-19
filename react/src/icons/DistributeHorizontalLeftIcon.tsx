import React from 'react';
import config from '../config';

interface DistributeHorizontalLeftIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DistributeHorizontalLeftIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/distribute-horizontal-left)
 * @see {@link https://clicons.dev/icon/distribute-horizontal-left}
 */
const DistributeHorizontalLeftIcon = React.forwardRef<SVGSVGElement, DistributeHorizontalLeftIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 2V22'
    }
  ],
  [
    'path',
    {
      d: 'M14 2V22'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 8.00232C18.6561 8.00232 17.6821 7.91895 17.201 8.75232C17 9.10039 17 9.5677 17 10.5023V13.5023C17 14.4369 17 14.9042 17.201 15.2523C17.6821 16.0857 18.6561 16.0023 19.5 16.0023C20.3439 16.0023 21.3179 16.0857 21.799 15.2523C22 14.9042 22 14.4369 22 13.5023V10.5023C22 9.5677 22 9.10039 21.799 8.75232C21.3179 7.91895 20.3439 8.00232 19.5 8.00232Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.49805 5.00232C6.65415 5.00232 5.68016 4.91895 5.19901 5.75232C4.99805 6.10039 4.99805 6.5677 4.99805 7.50232L4.99805 16.5023C4.99805 17.4369 4.99805 17.9042 5.19901 18.2523C5.68016 19.0857 6.65415 19.0023 7.49805 19.0023C8.34194 19.0023 9.31594 19.0857 9.79709 18.2523C9.99805 17.9042 9.99805 17.4369 9.99805 16.5023L9.99805 7.50232C9.99805 6.5677 9.99805 6.10039 9.79708 5.75232C9.31594 4.91895 8.34194 5.00232 7.49805 5.00232Z'
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

DistributeHorizontalLeftIcon.displayName = 'DistributeHorizontalLeftIcon';
export default DistributeHorizontalLeftIcon;
