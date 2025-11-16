import React from 'react';
import config from '../config';

interface Triangle3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Triangle3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/triangle3)
 * @see {@link https://clicons.dev/icon/triangle3}
 */
const Triangle3Icon = React.forwardRef<SVGSVGElement, Triangle3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 17.3362V7.10375C3 5.22156 3 4.28046 3.56858 4.04626C4.13717 3.81205 4.80633 4.47751 6.14468 5.80841L18.2764 17.8728C19.6148 19.2037 20.2839 19.8692 20.0484 20.4346C19.8129 21 18.8665 21 16.9739 21H6.68422C4.94747 21 4.07908 21 3.53955 20.4635C3 19.9269 3 19.0634 3 17.3362Z'
    }
  ],
  [
    'path',
    {
      d: 'M20.9159 12.8369L17.4805 9.42001M20.9159 12.8369C21.078 12.6772 20.9581 11.3527 20.9461 10.5134M20.9159 12.8369C20.7539 12.9967 19.9987 12.8894 18.6077 12.8184'
    }
  ],
  [
    'path',
    {
      d: 'M11.129 3.08307L14.5645 6.5M11.129 3.08307C10.967 3.24282 11.0868 4.56733 11.0988 5.40659M11.129 3.08307C11.2911 2.92332 12.0462 3.03064 13.4372 3.10157'
    }
  ],
  [
    'path',
    {
      d: 'M20.9087 3.08363L17.4727 6.5M20.9087 3.08363C20.748 2.92247 19.4161 3.04169 18.5722 3.05362M20.9087 3.08363C21.0693 3.24479 20.9614 3.99571 20.8901 5.37903'
    }
  ],
  [
    'ellipse',
    {
      cx: '16.0878',
      cy: '8.01465',
      rx: '1.38268',
      ry: '1.375'
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

Triangle3Icon.displayName = 'Triangle3Icon';
export default Triangle3Icon;
