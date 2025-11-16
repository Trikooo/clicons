import React from 'react';
import config from '../config';

interface DistributeHorizontalCenterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DistributeHorizontalCenterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/distribute-horizontal-center)
 * @see {@link https://clicons.dev/icon/distribute-horizontal-center}
 */
const DistributeHorizontalCenterIcon = React.forwardRef<SVGSVGElement, DistributeHorizontalCenterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 5L7 2M7 19L7 22'
    }
  ],
  [
    'path',
    {
      d: 'M17 8.00232C17.8439 8.00232 18.8179 7.91895 19.299 8.75232C19.5 9.10039 19.5 9.5677 19.5 10.5023V13.5023C19.5 14.4369 19.5 14.9042 19.299 15.2523C18.8179 16.0857 17.8439 16.0023 17 16.0023C16.1561 16.0023 15.1821 16.0857 14.701 15.2523C14.5 14.9042 14.5 14.4369 14.5 13.5023L14.5 10.5023C14.5 9.5677 14.5 9.10039 14.701 8.75232C15.1821 7.91895 16.1561 8.00232 17 8.00232Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 5.00232C7.84389 5.00232 8.81789 4.91895 9.29904 5.75232C9.5 6.10039 9.5 6.5677 9.5 7.50232L9.5 16.5023C9.5 17.4369 9.5 17.9042 9.29904 18.2523C8.81789 19.0857 7.84389 19.0023 7 19.0023C6.15611 19.0023 5.18211 19.0857 4.70096 18.2523C4.5 17.9042 4.5 17.4369 4.5 16.5023L4.5 7.50232C4.5 6.5677 4.5 6.10039 4.70096 5.75232C5.18211 4.91895 6.15611 5.00232 7 5.00232Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 8V2M17 16V22'
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

DistributeHorizontalCenterIcon.displayName = 'DistributeHorizontalCenterIcon';
export default DistributeHorizontalCenterIcon;
