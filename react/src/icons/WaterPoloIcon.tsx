import React from 'react';
import config from '../config';

interface WaterPoloIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WaterPoloIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/water-polo)
 * @see {@link https://clicons.dev/icon/water-polo}
 */
const WaterPoloIcon = React.forwardRef<SVGSVGElement, WaterPoloIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 21.1925C2.68524 22.2429 3.57104 22.2429 4.27299 21.1925C6.52985 17.7424 8.67954 23.6741 10.273 21.2314C12.703 17.5711 14.4508 23.9193 16.273 21.1925C18.6492 17.5599 20.1295 23.5754 22 21.5833'
    }
  ],
  [
    'path',
    {
      d: 'M17.6184 17.0101C18.3131 16.4058 19.9447 14.7125 20.3627 12.0914C20.7506 10.4812 20.5232 6.9041 17.9129 4.44767C16.1746 2.71046 11.565 0.185186 6.5503 3.98173C5.54789 4.78962 3.71926 7.01343 3.51106 9.93539C3.30286 12.8574 4.57349 14.8476 5.22063 15.6302C5.53845 15.974 5.6944 16.1756 6.02643 16.4762C6.31267 16.7353 6.43154 16.8203 6.66416 17.0076C8.07023 17.0604 11.2393 16.4052 13.3709 15.0443C13.8436 14.8221 15.0503 14.0541 16.0332 12.6903M4.17227 12.8032C5.35359 13.2754 8.38935 13.8311 11.3207 11.1072M11.5404 10.8749C12.976 10.5733 16.5886 10.8749 18.8331 14.8069M7.6968 3.48867C6.58965 5.43319 6.33215 10.6019 7.92835 12.5251M11.6466 10.8895C10.8934 9.0532 10.3472 4.55944 12.095 2.24888M11.5124 6.34147C13.2591 6.07737 17.575 6.92221 20.4894 10.5016'
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

WaterPoloIcon.displayName = 'WaterPoloIcon';
export default WaterPoloIcon;
