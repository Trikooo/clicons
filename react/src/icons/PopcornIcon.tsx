import React from 'react';
import config from '../config';

interface PopcornIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PopcornIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/popcorn)
 * @see {@link https://clicons.dev/icon/popcorn}
 */
const PopcornIcon = React.forwardRef<SVGSVGElement, PopcornIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.00342 12.001L6.03831 17.0164C6.49989 19.2534 6.73067 20.3719 7.55975 21.0308C9.13581 22.2831 14.8599 22.2871 16.441 21.0308C17.2701 20.3719 17.5009 19.2534 17.9625 17.0164L18.9973 12.001'
    }
  ],
  [
    'path',
    {
      d: 'M15.0044 12.0148L14.0044 21.999'
    }
  ],
  [
    'path',
    {
      d: 'M11.0938 2.31253C11.4908 2.4964 11.8312 2.8496 12.0243 3.02872C12.2175 2.8496 12.5092 2.49637 12.9062 2.3125C14.4774 1.58479 16.6099 2.17175 17.4834 3.66401C17.8376 4.26919 18.1149 5.10452 18.0481 5.98859C19.2574 5.98859 20.9317 6.89326 20.9968 8.83838C21.0557 10.5998 20.1509 11.3979 19.4073 11.7759C19.0347 11.9653 18.6108 12.0135 18.1926 12.0135L5.80737 12.0135C5.38915 12.0135 4.96528 11.9653 4.59267 11.7759C3.84906 11.3979 2.94431 10.5998 3.00322 8.83841C3.06828 6.89329 4.79866 6.03205 6.00801 6.03205C5.94113 5.14798 6.16241 4.26922 6.51665 3.66404C7.39012 2.17178 9.52256 1.58482 11.0938 2.31253Z'
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

PopcornIcon.displayName = 'PopcornIcon';
export default PopcornIcon;
