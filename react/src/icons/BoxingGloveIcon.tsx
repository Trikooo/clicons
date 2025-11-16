import React from 'react';
import config from '../config';

interface BoxingGloveIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BoxingGloveIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/boxing-glove)
 * @see {@link https://clicons.dev/icon/boxing-glove}
 */
const BoxingGloveIcon = React.forwardRef<SVGSVGElement, BoxingGloveIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.98148 11.2453C5.89446 13.9678 9.10256 17.3235 12.1105 18.3784M5.98148 11.2453C5.67692 11.768 2.56612 14.2618 2.51173 15.3182C2.24816 17.416 5.81222 21.357 8.56025 21.4915C9.58647 21.6371 11.0099 19.9102 12.4528 18.6272C13.2475 17.9205 14.3928 17.7571 18.9772 16.6194C20.6408 16.3303 22.6394 13.4607 19.6766 11.0283M5.98148 11.2453C6.9097 9.04414 8.51438 4.78884 11.6614 3.10843C12.9394 2.3823 16.2588 1.71372 19.5114 4.80592C20.6304 5.74702 22.5701 7.80848 20.7647 10.1836C19.561 11.5864 17.741 11.1803 17.5642 13.6064'
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

BoxingGloveIcon.displayName = 'BoxingGloveIcon';
export default BoxingGloveIcon;
