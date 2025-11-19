import React from 'react';
import config from '../config';

interface HospitalLocationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HospitalLocationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hospital-location)
 * @see {@link https://clicons.dev/icon/hospital-location}
 */
const HospitalLocationIcon = React.forwardRef<SVGSVGElement, HospitalLocationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.5 2C7.80558 2 4 5.61783 4 10.0807C4 12.6325 5.0625 14.6167 7.1875 16.389C8.68532 17.6382 10.4999 19.7131 11.5893 21.3951C12.1118 22.2016 12.8507 22.2016 13.4107 21.3951C14.5553 19.7466 16.3147 17.6382 17.8125 16.389C19.9375 14.6167 21 12.6325 21 10.0807C21 5.61783 17.1944 2 12.5 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 7V10M10.5 13V10M14.5 7V10M14.5 13V10M14.5 10H10.5'
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

HospitalLocationIcon.displayName = 'HospitalLocationIcon';
export default HospitalLocationIcon;
