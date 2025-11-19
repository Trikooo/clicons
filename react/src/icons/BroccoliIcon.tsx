import React from 'react';
import config from '../config';

interface BroccoliIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BroccoliIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/broccoli)
 * @see {@link https://clicons.dev/icon/broccoli}
 */
const BroccoliIcon = React.forwardRef<SVGSVGElement, BroccoliIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.05205 8.46154C1.87672 10.4706 3.25798 14 6.51566 14C8.14654 14 9.52414 13.0186 9.96671 11.6727M5.93747 10.3077C2.32316 8.8909 4.24626 4.36129 7.95209 4.79869C7.95209 3.26929 9.30506 2 10.974 2C12.643 2 13.996 3.02188 13.996 4.55129C14.5306 4.11279 15.2366 3.84615 16.0106 3.84615C17.6795 3.84615 19.0325 5.08598 19.0325 6.61538C19.0325 8.14479 17.6795 9.38462 16.0106 9.38462M18.8605 7.53846C22.3504 8.80845 21.3348 14 17.5215 14C15.5744 14 13.996 12.5041 13.996 10.6588C12.9886 12.1538 11.4777 12.6154 9.96671 11.6923'
    }
  ],
  [
    'path',
    {
      d: 'M7 14C7.88632 14.4415 9.41287 16.5365 9.5 21C9.51288 21.66 11.2845 22 12 22C12.7155 22 14.4871 21.66 14.5 21C14.5871 16.5365 16.1137 14.4415 17 14'
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

BroccoliIcon.displayName = 'BroccoliIcon';
export default BroccoliIcon;
