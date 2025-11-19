import React from 'react';
import config from '../config';

interface AirbnbIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AirbnbIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/airbnb)
 * @see {@link https://clicons.dev/icon/airbnb}
 */
const AirbnbIcon = React.forwardRef<SVGSVGElement, AirbnbIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 18.7753C10.3443 16.7754 9 15.5355 9 13.5C9 11.4645 10.5033 10 12.0033 10C13.5033 10 15 11.4645 15 13.5C15 15.5355 13.6557 16.7754 12 18.7753ZM12 18.7753C10 21.3198 6.02071 21.4621 4.34969 20.302C2.67867 19.1419 2.65485 16.7398 3.75428 14.1954C4.85371 11.651 6.31925 8.5977 9.25143 4.52665C10.2123 3.45799 10.8973 3 11.9967 3M12 18.7753C14 21.3198 17.9793 21.4621 19.6503 20.302C21.3213 19.1419 21.3451 16.7398 20.2457 14.1954C19.1463 11.651 17.6807 8.5977 14.7486 4.52665C13.7877 3.45799 13.1027 3 12.0033 3'
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

AirbnbIcon.displayName = 'AirbnbIcon';
export default AirbnbIcon;
