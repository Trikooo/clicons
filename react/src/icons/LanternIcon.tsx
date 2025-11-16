import React from 'react';
import config from '../config';

interface LanternIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LanternIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/lantern)
 * @see {@link https://clicons.dev/icon/lantern}
 */
const LanternIcon = React.forwardRef<SVGSVGElement, LanternIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'rect',
    {
      x: '6.5',
      y: '7.5',
      width: '12',
      height: '11'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 7.5C7.21663 5.40983 9.22856 4 11.4947 4H13.5053C15.7714 4 17.7834 5.40983 18.5 7.5H6.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 18.5C17.7834 20.5902 15.7714 22 13.5053 22L11.4947 22C9.22855 22 7.21663 20.5902 6.5 18.5L18.5 18.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 7.5H5.5L6.5 8.5M18.5 7.5H19.5L18.5 8.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 18.5L19.5 18.5L18.5 17.5M6.5 18.5L5.5 18.5L6.5 17.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 11L22.5 10.5M21.5 15L22.5 15.5'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 11L2.5 10.5M3.5 15L2.5 15.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 12V14'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 2V4'
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

LanternIcon.displayName = 'LanternIcon';
export default LanternIcon;
