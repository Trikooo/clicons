import React from 'react';
import config from '../config';

interface HospitalBedIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HospitalBedIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hospital-bed)
 * @see {@link https://clicons.dev/icon/hospital-bed}
 */
const HospitalBedIcon = React.forwardRef<SVGSVGElement, HospitalBedIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.5903 6L4.40974 6C4.17689 6 4.06046 6 3.95117 6.01655C3.44896 6.0926 2.98753 6.4267 2.66218 6.94983C2.59137 7.06367 2.52679 7.19473 2.39763 7.45684C2.19831 7.86133 2.09864 8.06357 2.05784 8.21806C1.86185 8.96021 2.18187 9.76918 2.74703 9.96023C2.86468 10 3.04435 10 3.40368 10L20.5963 10C20.9557 10 21.1353 10 21.253 9.96023C21.8181 9.76918 22.1382 8.96021 21.9422 8.21806C21.9014 8.06358 21.8017 7.86128 21.6024 7.45684C21.4732 7.19476 21.4086 7.06366 21.3378 6.94983C21.0125 6.4267 20.551 6.0926 20.0488 6.01655C19.9395 6 19.8231 6 19.5903 6Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 14L18 14'
    }
  ],
  [
    'path',
    {
      d: 'M4 10L5.25245 11.5882C5.95166 12.4749 6.17691 13.6387 5.85802 14.717L5.18289 17'
    }
  ],
  [
    'path',
    {
      d: 'M20 10L18.7476 11.5882C18.0483 12.4749 17.8231 13.6387 18.142 14.717L18.8171 17'
    }
  ],
  [
    'path',
    {
      d: 'M7 19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19C3 17.8954 3.89543 17 5 17C6.10457 17 7 17.8954 7 19Z'
    }
  ],
  [
    'path',
    {
      d: 'M21 19C21 20.1046 20.1046 21 19 21C17.8954 21 17 20.1046 17 19C17 17.8954 17.8954 17 19 17C20.1046 17 21 17.8954 21 19Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 6V4.1036C6 3.38598 6.61139 2.85943 7.24254 3.03348L9.24254 3.58501C9.6877 3.70777 10 4.14897 10 4.65513V6'
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

HospitalBedIcon.displayName = 'HospitalBedIcon';
export default HospitalBedIcon;
