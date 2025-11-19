import React from 'react';
import config from '../config';

interface PointingLeft7IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PointingLeft7Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pointing-left7)
 * @see {@link https://clicons.dev/icon/pointing-left7}
 */
const PointingLeft7Icon = React.forwardRef<SVGSVGElement, PointingLeft7IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 22L14.6667 22C16.84 22 17.9267 22 18.7918 21.6689C20.1148 21.1627 21.1601 20.1207 21.6679 18.8019C22 17.9395 22 16.8562 22 14.6897C22 13.5534 22 12.9853 21.8834 12.4566C21.7056 11.6499 21.3294 10.9 20.7888 10.2742C20.4344 9.86398 19.9785 9.52311 19.0667 8.84137L15.0487 5.83738C14.4314 5.3758 13.5789 5.38907 12.9763 5.86965C12.1888 6.49772 12.1237 7.66877 12.8369 8.3797L14.4623 10L4.5 10C3.67157 10 3 10.6716 3 11.5C3 12.3284 3.67157 13 4.5 13L8 13M8 13L8 14C8 15.1046 8.89543 16 10 16M8 13L11 13M10 16L11 16M10 16L9 16L9 17C9 18.1046 9.89543 19 11 19M11 19L12 19M11 19L10 19L10.2215 20.3288C10.3822 21.2932 11.2166 22 12.1943 22L13 22'
    }
  ],
  [
    'path',
    {
      d: 'M2 4.5L8 4.5M2 4.5C2 3.79977 3.9943 2.49153 4.5 2M2 4.5C2 5.20023 3.9943 6.50847 4.5 7'
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

PointingLeft7Icon.displayName = 'PointingLeft7Icon';
export default PointingLeft7Icon;
