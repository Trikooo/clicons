import React from 'react';
import config from '../config';

interface MouseRightClick5IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MouseRightClick5Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mouse-right-click5)
 * @see {@link https://clicons.dev/icon/mouse-right-click5}
 */
const MouseRightClick5Icon = React.forwardRef<SVGSVGElement, MouseRightClick5IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M11 5.5V2M11 12V9'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 2.31844C12.7694 2.11067 11.9399 2 11 2C5 2 3.5 6.50998 3.5 12C3.5 17.49 5 22 11 22C17.0001 22 18.5 17.49 18.5 12C18.5 11.4906 18.4871 10.9897 18.4589 10.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 7C12.5 6.53406 12.5 6.30109 12.4239 6.11732C12.3224 5.87229 12.1277 5.67761 11.8827 5.57612C11.6989 5.5 11.4659 5.5 11 5.5C10.5341 5.5 10.3011 5.5 10.1173 5.57612C9.87229 5.67761 9.67761 5.87229 9.57612 6.11732C9.5 6.30109 9.5 6.53406 9.5 7V7.5C9.5 7.96594 9.5 8.19891 9.57612 8.38268C9.67761 8.62771 9.87229 8.82239 10.1173 8.92388C10.3011 9 10.5341 9 11 9C11.4659 9 11.6989 9 11.8827 8.92388C12.1277 8.82239 12.3224 8.62771 12.4239 8.38268C12.5 8.19891 12.5 7.96594 12.5 7.5V7Z'
    }
  ],
  [
    'path',
    {
      d: 'M4 12H18'
    }
  ],
  [
    'circle',
    {
      cx: '18',
      cy: '5.5',
      r: '2.5'
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

MouseRightClick5Icon.displayName = 'MouseRightClick5Icon';
export default MouseRightClick5Icon;
