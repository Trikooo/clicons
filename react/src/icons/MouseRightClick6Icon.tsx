import React from 'react';
import config from '../config';

interface MouseRightClick6IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MouseRightClick6Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mouse-right-click6)
 * @see {@link https://clicons.dev/icon/mouse-right-click6}
 */
const MouseRightClick6Icon = React.forwardRef<SVGSVGElement, MouseRightClick6IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.5 5.5V2M10.5 12V9'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 22C16.5 22 18 17.49 18 12C18 6.50998 16.5 2 10.5 2C4.49993 2 3 6.50996 3 12C3 17.49 4.49993 22 10.5 22Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 12L3 12'
    }
  ],
  [
    'path',
    {
      d: 'M19 3.16746L19.3811 2M19.9713 5.56746L21 6'
    }
  ],
  [
    'path',
    {
      d: 'M9 7C9 6.53406 9 6.30109 9.07612 6.11732C9.17761 5.87229 9.37229 5.67761 9.61732 5.57612C9.80109 5.5 10.0341 5.5 10.5 5.5C10.9659 5.5 11.1989 5.5 11.3827 5.57612C11.6277 5.67761 11.8224 5.87229 11.9239 6.11732C12 6.30109 12 6.53406 12 7V7.5C12 7.96594 12 8.19891 11.9239 8.38268C11.8224 8.62771 11.6277 8.82239 11.3827 8.92388C11.1989 9 10.9659 9 10.5 9C10.0341 9 9.80109 9 9.61732 8.92388C9.37229 8.82239 9.17761 8.62771 9.07612 8.38268C9 8.19891 9 7.96594 9 7.5V7Z'
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

MouseRightClick6Icon.displayName = 'MouseRightClick6Icon';
export default MouseRightClick6Icon;
