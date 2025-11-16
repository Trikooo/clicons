import React from 'react';
import config from '../config';

interface BubbleTea2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BubbleTea2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bubble-tea2)
 * @see {@link https://clicons.dev/icon/bubble-tea2}
 */
const BubbleTea2Icon = React.forwardRef<SVGSVGElement, BubbleTea2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 9L16.5218 18.4136C16.2728 19.9992 16.1483 20.7921 15.5864 21.2644C14.3865 22.273 9.54699 22.217 8.41358 21.2644C7.85167 20.7921 7.72718 19.9992 7.47819 18.4136L6 9'
    }
  ],
  [
    'path',
    {
      d: 'M6 9L6.89443 7.21115C7.43234 6.13531 7.7013 5.5974 8.18461 5.2987C8.66791 5 9.26932 5 10.4721 5L13.5279 5C14.7307 5 15.3321 5 15.8154 5.2987C16.2987 5.5974 16.5677 6.13531 17.1056 7.21115L18 9'
    }
  ],
  [
    'path',
    {
      d: 'M5 9H19'
    }
  ],
  [
    'path',
    {
      d: 'M12 9V2'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 13.0112C6.77548 12.5167 8.61157 11.7101 9.93388 12.1057C11.5868 12.6002 15.0207 15.4838 17.5 13.0113'
    }
  ],
  [
    'path',
    {
      d: 'M10.0078 17L9.99883 17'
    }
  ],
  [
    'path',
    {
      d: 'M14.0078 19L13.9988 19'
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

BubbleTea2Icon.displayName = 'BubbleTea2Icon';
export default BubbleTea2Icon;
