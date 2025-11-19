import React from 'react';
import config from '../config';

interface KeyGeneratorFobIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KeyGeneratorFobIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/key-generator-fob)
 * @see {@link https://clicons.dev/icon/key-generator-fob}
 */
const KeyGeneratorFobIcon = React.forwardRef<SVGSVGElement, KeyGeneratorFobIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 22C15.866 22 19 18.8659 19 15C19 12.5994 18.2288 8.16743 17.6442 5.15254C17.3548 3.66024 17.2101 2.91408 16.6559 2.45704C16.1018 2 15.3282 2 13.7811 2H10.2189C8.6718 2 7.89823 2 7.34406 2.45704C6.78988 2.91408 6.64519 3.66023 6.35582 5.15254C5.7712 8.16743 5 12.5994 5 15C5 18.8659 8.13399 22 12 22Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 15C16 17.2091 14.2091 19 12 19C9.79085 19 8 17.2091 8 15C8 12.7909 9.79085 11 12 11C14.2091 11 16 12.7909 16 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 5V6'
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

KeyGeneratorFobIcon.displayName = 'KeyGeneratorFobIcon';
export default KeyGeneratorFobIcon;
