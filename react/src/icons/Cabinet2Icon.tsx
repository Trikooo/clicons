import React from 'react';
import config from '../config';

interface Cabinet2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Cabinet2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cabinet2)
 * @see {@link https://clicons.dev/icon/cabinet2}
 */
const Cabinet2Icon = React.forwardRef<SVGSVGElement, Cabinet2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.5 16L5 20M17.5 16L19 20'
    }
  ],
  [
    'path',
    {
      d: 'M21 4H3L3.21498 9.15955C3.3499 12.3977 3.41736 14.0167 4.28607 15.0084C5.15478 16 6.50569 16 9.2075 16H14.7925C17.4943 16 18.8452 16 19.7139 15.0084C20.5826 14.0167 20.6501 12.3977 20.785 9.15955L21 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 16V4'
    }
  ],
  [
    'path',
    {
      d: 'M22 4H2'
    }
  ],
  [
    'path',
    {
      d: 'M8.99981 10L9.00879 10'
    }
  ],
  [
    'path',
    {
      d: 'M14.9998 10L15.0088 10'
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

Cabinet2Icon.displayName = 'Cabinet2Icon';
export default Cabinet2Icon;
