import React from 'react';
import config from '../config';

interface Yoga3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Yoga3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/yoga3)
 * @see {@link https://clicons.dev/icon/yoga3}
 */
const Yoga3Icon = React.forwardRef<SVGSVGElement, Yoga3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9 10C9 13.866 12 17 12 17C12 17 15 13.866 15 10C15 6.13401 12 3 12 3C12 3 9 6.13401 9 10Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.33095 8C4.11419 7.04619 2 7 2 7C2 7 2.09572 11.3814 4.85714 14.1429C7.61857 16.9043 12 17 12 17C12 17 16.3814 16.9043 19.1429 14.1429C21.9043 11.3814 22 7 22 7C22 7 19.8858 7.04619 17.6691 8'
    }
  ],
  [
    'path',
    {
      d: 'M12.0207 17C11.8544 18.3333 12.6604 21 15.5135 21C17.5093 21 18.5072 19 22 21C21.6 18.9999 20.7998 17.7199 19.6329 17M11.9793 17C12.1456 18.3333 11.3396 21 8.48654 21C6.49068 21 5.49275 19 2 21C2.40005 18.9999 3.20018 17.7199 4.36707 17'
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

Yoga3Icon.displayName = 'Yoga3Icon';
export default Yoga3Icon;
