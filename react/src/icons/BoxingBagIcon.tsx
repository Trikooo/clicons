import React from 'react';
import config from '../config';

interface BoxingBagIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BoxingBagIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/boxing-bag)
 * @see {@link https://clicons.dev/icon/boxing-bag}
 */
const BoxingBagIcon = React.forwardRef<SVGSVGElement, BoxingBagIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 17.5C14 18.8333 10 18.8333 6 17.5M18 10.5C14 9.16667 10 9.16667 6 10.5'
    }
  ],
  [
    'path',
    {
      d: 'M16 6.5L13.4948 3.68167C12.7977 2.89736 12.4491 2.5052 12 2.5052C11.5509 2.5052 11.2023 2.89736 10.5052 3.68167L8 6.5'
    }
  ],
  [
    'path',
    {
      d: 'M18 2L6 2'
    }
  ],
  [
    'path',
    {
      d: 'M9.1114 21.7682C11.0371 22.0773 12.9629 22.0773 14.8886 21.7682C17.517 21.3464 18 20.4678 18 18.2919V9.70813C18 7.53225 17.517 6.65357 14.8886 6.23178C12.9629 5.92274 11.0371 5.92274 9.1114 6.23178C6.48303 6.65357 6 7.53225 6 9.70813V18.2919C6 20.4678 6.48303 21.3464 9.1114 21.7682Z'
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

BoxingBagIcon.displayName = 'BoxingBagIcon';
export default BoxingBagIcon;
