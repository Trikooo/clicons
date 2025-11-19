import React from 'react';
import config from '../config';

interface DirectionsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DirectionsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/directions)
 * @see {@link https://clicons.dev/icon/directions}
 */
const DirectionsIcon = React.forwardRef<SVGSVGElement, DirectionsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.91872 4.43926C5.46116 3.73152 5.73238 3.37764 6.10315 3.18882C6.47393 3 6.89759 3 7.74491 3H10.1606C11.0277 3 11.4612 3 11.7306 3.29289C12 3.58579 12 4.05719 12 5V9H7.74491C6.89759 9 6.47393 9 6.10315 8.81118C5.73238 8.62236 5.46116 8.26848 4.91872 7.56074L4.70383 7.28037C4.23461 6.66816 4 6.36205 4 6C4 5.63795 4.23461 5.33184 4.70383 4.71963L4.91872 4.43926Z'
    }
  ],
  [
    'path',
    {
      d: 'M19.0813 9.43926C18.5388 8.73152 18.2676 8.37764 17.8968 8.18882C17.5261 8 17.1024 8 16.2551 8H12V14H16.2551C17.1024 14 17.5261 14 17.8968 13.8112C18.2676 13.6224 18.5388 13.2685 19.0813 12.5607L19.2962 12.2804C19.7654 11.6682 20 11.362 20 11C20 10.638 19.7654 10.3318 19.2962 9.71963L19.0813 9.43926Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 21L12 4'
    }
  ],
  [
    'path',
    {
      d: 'M9 21H15'
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

DirectionsIcon.displayName = 'DirectionsIcon';
export default DirectionsIcon;
