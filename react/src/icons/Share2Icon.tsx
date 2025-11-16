import React from 'react';
import config from '../config';

interface Share2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Share2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/share2)
 * @see {@link https://clicons.dev/icon/share2}
 */
const Share2Icon = React.forwardRef<SVGSVGElement, Share2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9 4.5C5.50442 5.70104 3 8.94175 3 12.7511C3 13.9579 3.25134 15.1076 3.70591 16.1534M15 4.5C18.4956 5.70104 21 8.94175 21 12.7511C21 13.7736 20.8195 14.7552 20.4879 15.6674M16.5 20.3296C15.1762 21.074 13.6393 21.5 12 21.5C10.3607 21.5 8.82378 21.074 7.5 20.3296'
    }
  ],
  [
    'path',
    {
      d: 'M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z'
    }
  ],
  [
    'circle',
    {
      cx: '5',
      cy: '19',
      r: '3'
    }
  ],
  [
    'circle',
    {
      cx: '19',
      cy: '19',
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

Share2Icon.displayName = 'Share2Icon';
export default Share2Icon;
