import React from 'react';
import config from '../config';

interface KaabaIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KaabaIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/kaaba)
 * @see {@link https://clicons.dev/icon/kaaba}
 */
const KaabaIcon = React.forwardRef<SVGSVGElement, KaabaIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.5 22V5.9907C3.5 5.25783 3.5 4.8914 3.70387 4.62261C3.90774 4.35383 4.26006 4.25575 4.96471 4.0596L11.9647 2.11106C12.2307 2.03702 12.3637 2 12.5 2C12.6363 2 12.7693 2.03702 13.0353 2.11106L20.0353 4.0596C20.7399 4.25575 21.0923 4.35383 21.2961 4.62261C21.5 4.8914 21.5 5.25783 21.5 5.9907V22'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 22H22.5'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 9L12.0661 7.04882C12.3519 6.98373 12.6481 6.98373 12.9339 7.04882L21.5 9'
    }
  ],
  [
    'path',
    {
      d: 'M20.15 12.7L21.5 13M16.1 11.8L17 12M13.4 11.2L12.5 11L11.6 11.2M4.85 12.7L3.5 13M8.9 11.8L8 12'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 7V22'
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

KaabaIcon.displayName = 'KaabaIcon';
export default KaabaIcon;
