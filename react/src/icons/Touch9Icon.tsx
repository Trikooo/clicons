import React from 'react';
import config from '../config';

interface Touch9IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Touch9Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/touch9)
 * @see {@link https://clicons.dev/icon/touch9}
 */
const Touch9Icon = React.forwardRef<SVGSVGElement, Touch9IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.1121 8.68466L12.965 3.7607C13.1063 2.94487 12.5712 2.16689 11.7698 2.02304C10.9684 1.87919 10.2042 2.42393 10.0629 3.23976L8.35714 13.0877L8.21569 13.8509L6.30622 11.837C5.61343 11.1239 4.47226 11.1889 3.86022 11.9765C3.3919 12.5791 3.37897 13.4315 3.82877 14.0489L6.75611 18.0667C7.42045 18.9785 7.75263 19.4345 8.15236 19.7888C8.76222 20.3294 9.49302 20.7056 10.2791 20.8834C10.7943 21 11.3479 21 12.4552 21H14.7886C17.0993 21 19.0901 19.3242 19.549 16.9929L20.3921 12.7094L20.4774 12.2171C20.6187 11.4012 20.0836 10.6232 19.2822 10.4794C18.4808 10.3355 17.7166 10.8803 17.5752 11.6961L17.49 12.1885M12.1121 8.68466L11.8563 10.1618M12.1121 8.68466C12.2534 7.86883 13.0177 7.32408 13.8191 7.46794C14.6205 7.61179 15.1556 8.38977 15.0143 9.20559L14.8437 10.1904M14.8437 10.1904L14.7584 10.6828M14.8437 10.1904C14.985 9.37456 15.7492 8.82981 16.5506 8.97367C17.352 9.11752 17.8871 9.89549 17.7458 10.7113L17.6605 11.2037'
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

Touch9Icon.displayName = 'Touch9Icon';
export default Touch9Icon;
