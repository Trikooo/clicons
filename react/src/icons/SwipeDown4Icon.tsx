import React from 'react';
import config from '../config';

interface SwipeDown4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SwipeDown4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/swipe-down4)
 * @see {@link https://clicons.dev/icon/swipe-down4}
 */
const SwipeDown4Icon = React.forwardRef<SVGSVGElement, SwipeDown4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.41601 14.5V11M6.41601 11V4.75C6.41601 3.7835 7.19951 3 8.16601 3C9.1325 3 9.91601 3.7835 9.91601 4.75V10L12.993 10.4776C14.9216 10.7669 15.886 10.9115 16.5652 11.3184C17.6872 11.9906 18.5 13 18.5 14.4736C18.5 15.5 18.2463 16.1886 17.6296 18.0387C17.2383 19.2127 17.0426 19.7996 16.7236 20.2643C16.1983 21.0293 15.4233 21.5878 14.5315 21.8442C13.9898 22 13.3711 22 12.1336 22H10.7287C8.94422 22 8.05198 22 7.28584 21.6651C6.9397 21.5137 6.61674 21.3141 6.32659 21.0722C5.68438 20.5367 5.28536 19.7387 4.48731 18.1426C3.84015 16.8483 3.51657 16.2011 3.50083 15.5302C3.49373 15.2276 3.53246 14.9256 3.61571 14.6346C3.80031 13.9894 4.27678 13.4448 5.2297 12.3558L6.41601 11Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 8L18 2M18 8C17.2998 8 15.9915 6.0057 15.5 5.5M18 8C18.7002 8 20.0085 6.0057 20.5 5.5'
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

SwipeDown4Icon.displayName = 'SwipeDown4Icon';
export default SwipeDown4Icon;
