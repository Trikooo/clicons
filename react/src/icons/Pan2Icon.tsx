import React from 'react';
import config from '../config';

interface Pan2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Pan2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pan2)
 * @see {@link https://clicons.dev/icon/pan2}
 */
const Pan2Icon = React.forwardRef<SVGSVGElement, Pan2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.5556 13H9.44444C9.19898 13 9 13.2487 9 13.5556C9 16.0102 10.5919 18 12.5556 18H17.4444C19.4081 18 21 16.0102 21 13.5556C21 13.2487 20.801 13 20.5556 13Z'
    }
  ],
  [
    'path',
    {
      d: 'M9 13L7 11'
    }
  ],
  [
    'path',
    {
      d: 'M2.36797 6.36797C2.85859 5.87734 3.65404 5.87734 4.14466 6.36797L6.63203 8.85534C7.12266 9.34596 7.12266 10.1414 6.63203 10.632C6.14141 11.1227 5.34596 11.1227 4.85534 10.632L2.36797 8.14466C1.87734 7.65404 1.87734 6.85859 2.36797 6.36797Z'
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

Pan2Icon.displayName = 'Pan2Icon';
export default Pan2Icon;
