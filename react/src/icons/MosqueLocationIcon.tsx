import React from 'react';
import config from '../config';

interface MosqueLocationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MosqueLocationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mosque-location)
 * @see {@link https://clicons.dev/icon/mosque-location}
 */
const MosqueLocationIcon = React.forwardRef<SVGSVGElement, MosqueLocationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11.5063 7.49912C11.05 6.89215 10.3234 6.49954 9.50512 6.49954C8.12375 6.49954 7.00391 7.61836 7.00391 8.99848C7.00391 10.2075 7.86321 11.2159 9.00488 11.4475M9.44988 17.9947C9.19894 17.9947 8.95231 17.9276 8.73422 17.8002C5.74721 15.8848 2.50174 13.1276 2.50174 9.13903C2.50174 5.22645 5.68973 2.00143 9.44988 2.00143C11.4173 2.00143 13.2281 2.88435 14.5075 4.28671'
    }
  ],
  [
    'path',
    {
      d: 'M13.1195 15.5501C11.7592 13.8947 11.5271 12.2323 13.4734 10.2138C15.518 8.38932 16.6955 7.52647 17.0091 7.00723C17.3228 7.52647 18.5194 8.38932 20.564 10.2138C22.4171 11.8673 22.3005 13.8947 20.9402 15.5501M13.1195 15.5501H12.5973M13.1195 15.5501H20.9402M20.9402 15.5501H21.4003M11.5271 15.5501H12.5973M12.5973 15.5501V21.0928C12.6372 21.7603 12.5973 22.0718 13.8077 21.9843H16.9903M21.4003 15.5501H22.4987M21.4003 15.5501V21.1943C21.517 22.1008 20.7953 21.9418 20.3338 21.9843H16.9903M16.9903 21.9843L17.0256 19.8505'
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

MosqueLocationIcon.displayName = 'MosqueLocationIcon';
export default MosqueLocationIcon;
