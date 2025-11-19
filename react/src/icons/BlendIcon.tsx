import React from 'react';
import config from '../config';

interface BlendIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BlendIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/blend)
 * @see {@link https://clicons.dev/icon/blend}
 */
const BlendIcon = React.forwardRef<SVGSVGElement, BlendIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '17',
      cy: '17',
      r: '5'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 13H6.4C4.32582 13 3.28873 13 2.64437 12.3556C2 11.7113 2 10.6742 2 8.6V6.4C2 4.32582 2 3.28873 2.64437 2.64437C3.28873 2 4.32582 2 6.4 2H8.6C10.6742 2 11.7113 2 12.3556 2.64437C13 3.28873 13 4.32582 13 6.4V7.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.0348 19C9.17734 18.5206 7 16.0355 7 13.0418C7 9.70499 9.70499 7 13.0418 7C16.0355 7 18.5206 9.17734 19 12.0348'
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

BlendIcon.displayName = 'BlendIcon';
export default BlendIcon;
