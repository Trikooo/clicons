import React from 'react';
import config from '../config';

interface SpermIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SpermIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sperm)
 * @see {@link https://clicons.dev/icon/sperm}
 */
const SpermIcon = React.forwardRef<SVGSVGElement, SpermIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.89092 14.1091C12.1252 16.3433 15.189 16.9019 17.9818 14.1091C20.7746 11.3163 22.0272 6.0182 20.0045 3.99548C17.9818 1.97276 12.6837 3.22541 9.89092 6.0182C7.09812 8.811 7.65668 11.8748 9.89092 14.1091Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 21C3.41339 20.4523 4.05487 19.8823 5.17764 19.6079C6.07232 19.3892 6.51967 19.2799 6.68616 19.1665C7.02076 18.9388 7.12514 18.7561 7.14451 18.3644C7.15414 18.1695 7.04904 17.8687 6.83883 17.267C6.62862 16.6654 6.52352 16.3646 6.53315 16.1697C6.55252 15.778 6.6569 15.5953 6.9915 15.3675C7.15799 15.2542 7.60534 15.1449 8.50002 14.9262C9.29868 14.731 9.7855 14.3789 10 14'
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

SpermIcon.displayName = 'SpermIcon';
export default SpermIcon;
