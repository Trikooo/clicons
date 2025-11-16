import React from 'react';
import config from '../config';

interface VineIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name VineIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/vine)
 * @see {@link https://clicons.dev/icon/vine}
 */
const VineIcon = React.forwardRef<SVGSVGElement, VineIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.04261 4.41495C2.7122 8.99913 4.26712 17.1284 8.97309 21.0871C10.406 22.2925 11.9014 22.3165 13.3266 21.0857C15.6727 19.0596 17.3041 15.9398 18.2214 14.2938C18.2214 14.2938 19.3849 14.6873 20.3522 14.7846C20.931 14.8427 21.4613 11.7387 20.3517 11.7315C17.4157 11.7122 14.1381 11.4181 13.6775 8.14692C13.1726 4.56122 17.2116 5.07346 16.7068 8.19571C17.7165 9.17141 19.7361 9.17141 19.7361 9.17141C20.7458 6.09795 18.7263 2 15.697 2C11.6579 2 10.1433 4.95167 10.1433 7.12244C10.1433 12.7571 14.6872 13.7816 14.6872 13.7816C13.9496 15.6526 12.6725 16.9898 11.8409 17.7649C11.2705 18.2965 11.0258 18.3051 10.5066 17.7152C7.16109 13.9145 6.21504 7.99135 6.55256 4.51754C6.62801 3.74099 3.10939 3.48846 3.04261 4.41495Z'
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

VineIcon.displayName = 'VineIcon';
export default VineIcon;
