import React from 'react';
import config from '../config';

interface KetupatIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KetupatIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ketupat)
 * @see {@link https://clicons.dev/icon/ketupat}
 */
const KetupatIcon = React.forwardRef<SVGSVGElement, KetupatIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.2749 9.6488L16.3493 7.72321C14.5338 5.90774 13.6261 5 12.4981 5C11.3701 5 10.4624 5.90774 8.64691 7.72321L6.72131 9.6488C4.90584 11.4643 3.99811 12.372 3.99811 13.5C3.99811 14.628 4.90584 15.5357 6.72131 17.3512L8.64691 19.2768C10.4624 21.0923 11.3701 22 12.4981 22C13.6261 22 14.5338 21.0923 16.3493 19.2768L18.2749 17.3512C20.0904 15.5357 20.9981 14.628 20.9981 13.5C20.9981 12.372 20.0904 11.4643 18.2749 9.6488Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.2481 8.75L12.4981 13.5M12.4981 13.5L7.74811 18.25M12.4981 13.5L7.74811 8.75M12.4981 13.5L17.2481 18.25'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 2C13.1 2.24 12.5 4.3 12.5 5C12.3333 4.4 11.5 3.2 9.5 3.2'
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

KetupatIcon.displayName = 'KetupatIcon';
export default KetupatIcon;
