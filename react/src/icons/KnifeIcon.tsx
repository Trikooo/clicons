import React from 'react';
import config from '../config';

interface KnifeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KnifeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/knife)
 * @see {@link https://clicons.dev/icon/knife}
 */
const KnifeIcon = React.forwardRef<SVGSVGElement, KnifeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.8865 8.11621L18.8955 8.11621'
    }
  ],
  [
    'path',
    {
      d: 'M15.6024 16.7446C18.3895 13.7178 20.3287 11.3284 21.54 9.70091C22.203 8.81007 22.5345 8.36466 22.4972 7.75756C22.4193 6.48963 19.2253 3 17.8204 3C17.1774 3 16.66 3.53734 15.6252 4.61201L3.04984 17.6718C2.31672 18.4331 2.31672 19.6675 3.04984 20.4289C3.881 21.2921 5.26287 21.1587 5.92662 20.1512L8.21648 16.6756C9.13465 15.282 9.79389 15.2741 10.8945 16.4171C11.5597 17.108 12.4005 18.395 13.4477 18.3828C14.1008 18.3753 14.6013 17.8317 15.6024 16.7446Z'
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

KnifeIcon.displayName = 'KnifeIcon';
export default KnifeIcon;
