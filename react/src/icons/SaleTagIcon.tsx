import React from 'react';
import config from '../config';

interface SaleTagIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SaleTagIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sale-tag)
 * @see {@link https://clicons.dev/icon/sale-tag}
 */
const SaleTagIcon = React.forwardRef<SVGSVGElement, SaleTagIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.98633 3.7002C9.78335 6.79476 14.3961 0.115903 17.1255 2.53974C18.696 3.93439 18.1995 7.01373 16.1607 9.01999'
    }
  ],
  [
    'path',
    {
      d: 'M13.7897 13.9839C13.8075 13.6494 13.9014 13.0373 13.3927 12.5722M13.3927 12.5722C13.2353 12.4282 13.0201 12.2983 12.7272 12.1951C11.6788 11.8256 10.391 13.0623 11.302 14.1944C11.7917 14.803 12.1692 14.9901 12.1337 15.6812C12.1087 16.1673 11.6311 16.6752 11.0018 16.8686C10.4551 17.0367 9.85198 16.8142 9.47052 16.3879C9.00476 15.8675 9.0518 15.3769 9.04782 15.163M13.3927 12.5722L13.9668 11.998M9.51204 16.4528L8.9668 16.998'
    }
  ],
  [
    'path',
    {
      d: 'M18.2726 6.63305C19.1981 6.8108 19.4057 7.39525 19.682 9.01703C19.9309 10.4776 20.0007 12.2304 20.0007 12.9765C19.9753 13.2515 19.8625 13.5081 19.682 13.7174C17.7469 15.7455 13.9064 19.5753 11.9681 21.4778C11.2074 22.1569 10.0597 22.1716 9.25241 21.5482C7.59928 20.0612 6.01095 18.3803 4.45501 16.8625C3.82993 16.0574 3.84458 14.9129 4.52567 14.1544C6.57621 12.0272 10.2867 8.38602 12.3813 6.3745C12.5913 6.19455 12.8486 6.08199 13.1243 6.05672C13.5943 6.0566 14.4005 6.11977 15.1859 6.1653'
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

SaleTagIcon.displayName = 'SaleTagIcon';
export default SaleTagIcon;
