import React from 'react';
import config from '../config';

interface MochiIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MochiIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mochi)
 * @see {@link https://clicons.dev/icon/mochi}
 */
const MochiIcon = React.forwardRef<SVGSVGElement, MochiIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 21C20.7514 20.3192 22 19.0219 22 16.7771C22 13.0188 18.5 9 15 9C11.5 9 8 13.0188 8 16.7771C8 19.0219 9.24858 20.3192 11 21'
    }
  ],
  [
    'path',
    {
      d: 'M16 9.00935C15.4708 5.45852 12.2544 2 9.03788 2C5.51894 2 2 6.13953 2 10.0107C2 13.61 5.04202 14.8444 8.29768 15'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 5L6.5 6'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 5L11.5 6'
    }
  ],
  [
    'path',
    {
      d: 'M15 12C17 12 19 14.226 19 16.3077C19 17.5561 18.1523 18.2754 17.0951 18.6513C16.6449 18.8113 16.3021 19.2104 16.3021 19.6882V20.718C16.3021 21.426 15.7281 22 15.0201 22C14.312 22 13.7381 21.426 13.7381 20.718V19.6882C13.7381 19.2104 13.3955 18.8109 12.9447 18.6526C11.8758 18.2771 11 17.5575 11 16.3077C11 14.226 13 12 15 12Z'
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

MochiIcon.displayName = 'MochiIcon';
export default MochiIcon;
