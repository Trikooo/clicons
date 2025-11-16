import React from 'react';
import config from '../config';

interface HatIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HatIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hat)
 * @see {@link https://clicons.dev/icon/hat}
 */
const HatIcon = React.forwardRef<SVGSVGElement, HatIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.5 14L2.34718 15.7223C2.12774 15.8978 2 16.1636 2 16.4446C2 16.7864 2.18686 17.1029 2.49648 17.2477C4.78892 18.3202 8.19601 19 12 19C15.804 19 19.2111 18.3202 21.5035 17.2477C21.8131 17.1029 22 16.7864 22 16.4446C22 16.1636 21.8723 15.8978 21.6528 15.7223L19.5 14'
    }
  ],
  [
    'path',
    {
      d: 'M12 15C15.0669 15 17.7898 14.6072 19.5 14L19.093 10.3374C18.811 7.79862 18.6699 6.52923 17.8156 5.76462C16.9614 5 15.6842 5 13.1297 5H10.8703C8.31585 5 7.03864 5 6.18436 5.76462C5.33009 6.52923 5.18904 7.79862 4.90695 10.3374L4.5 14C6.21023 14.6072 8.93312 15 12 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 10H13'
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

HatIcon.displayName = 'HatIcon';
export default HatIcon;
