import React from 'react';
import config from '../config';

interface KettlebellIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KettlebellIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/kettlebell)
 * @see {@link https://clicons.dev/icon/kettlebell}
 */
const KettlebellIcon = React.forwardRef<SVGSVGElement, KettlebellIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.0003 9C18.2118 6.13886 18.8204 5.15138 18.3298 4.0713C18.1796 3.74048 17.964 3.43972 17.6947 3.18507C16.0234 1.60498 7.97656 1.60498 6.30528 3.18507C6.03594 3.43972 5.82038 3.74048 5.67013 4.0713C5.17956 5.15138 5.78859 6.13886 7.00009 9'
    }
  ],
  [
    'path',
    {
      d: 'M12 8C7.58172 8 4 11.5817 4 16C4 17.8455 4.62489 19.545 5.67463 20.8985C6.39442 21.8266 7.06365 22 8.22111 22H15.7789C16.9363 22 17.6056 21.8266 18.3254 20.8985C19.3751 19.545 20 17.8455 20 16C20 11.5817 16.4183 8 12 8Z'
    }
  ],
  [
    'path',
    {
      d: 'M15 16H16.5M7.5 16H9'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '16',
      r: '3'
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

KettlebellIcon.displayName = 'KettlebellIcon';
export default KettlebellIcon;
