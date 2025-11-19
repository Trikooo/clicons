import React from 'react';
import config from '../config';

interface FirewallIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FirewallIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/firewall)
 * @see {@link https://clicons.dev/icon/firewall}
 */
const FirewallIcon = React.forwardRef<SVGSVGElement, FirewallIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 14H5C3.58579 14 2.87868 14 2.43934 14.4393C2 14.8787 2 15.5858 2 17V19C2 20.4142 2 21.1213 2.43934 21.5607C2.87868 22 3.58579 22 5 22H19C20.4142 22 21.1213 22 21.5607 21.5607C22 21.1213 22 20.4142 22 19V17C22 15.5858 22 14.8787 21.5607 14.4393C21.1213 14 20.4142 14 19 14Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 18H22'
    }
  ],
  [
    'path',
    {
      d: 'M12 18L12 14'
    }
  ],
  [
    'path',
    {
      d: 'M7 22L7 18'
    }
  ],
  [
    'path',
    {
      d: 'M17 22L17 18'
    }
  ],
  [
    'path',
    {
      d: 'M18.8412 11C18.5539 9.80598 17.8362 8.63931 16.3747 7.6C12.4372 4.8 11.9997 2 11.9997 2C11.9997 2 7.93797 5.6 10.2497 10C8.14967 10.32 7.17231 8 6.94613 6.8C5.97628 8.08998 5.20609 9.53564 5.03516 11'
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

FirewallIcon.displayName = 'FirewallIcon';
export default FirewallIcon;
