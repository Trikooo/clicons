import React from 'react';
import config from '../config';

interface SunCloudLittleRainIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SunCloudLittleRainIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sun-cloud-little-rain)
 * @see {@link https://clicons.dev/icon/sun-cloud-little-rain}
 */
const SunCloudLittleRainIcon = React.forwardRef<SVGSVGElement, SunCloudLittleRainIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.4776 9.04499C17.485 9.04496 17.4925 9.04494 17.5 9.04494C19.9853 9.04494 22 11.0747 22 13.5786C22 15.3587 20.9817 16.7581 19.5 17.5M17.4776 9.04499C17.4924 8.87906 17.5 8.71102 17.5 8.54119C17.5 5.48088 15.0376 3 12 3C9.12324 3 6.76233 5.22516 6.52042 8.06032M17.4776 9.04499C17.3753 10.1879 16.9286 11.2308 16.2428 12.0674M6.52042 8.06032C3.98398 8.3035 2 10.4558 2 13.0749C2 14.9843 3.05449 16.6457 4.60877 17.5M6.52042 8.06032C6.67826 8.04519 6.83823 8.03745 7 8.03745C8.12582 8.03745 9.16474 8.41232 10.0005 9.04494'
    }
  ],
  [
    'path',
    {
      d: 'M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9'
    }
  ],
  [
    'path',
    {
      d: 'M12.0011 14.5V16M9 17.5V19M15 17.5V19M6.5 20.5V22M17.5 20.5V22M12 20.5V22'
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

SunCloudLittleRainIcon.displayName = 'SunCloudLittleRainIcon';
export default SunCloudLittleRainIcon;
