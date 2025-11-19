import React from 'react';
import config from '../config';

interface HierarchySquare6IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HierarchySquare6Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hierarchy-square6)
 * @see {@link https://clicons.dev/icon/hierarchy-square6}
 */
const HierarchySquare6Icon = React.forwardRef<SVGSVGElement, HierarchySquare6IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10 2H14C15.8152 2 16 2.92494 16 4.5C16 6.07506 15.8152 7 14 7H10C8.1848 7 8 6.07506 8 4.5C8 2.92494 8.1848 2 10 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 19.5C2 18.3215 2 17.7322 2.36612 17.3661C2.73223 17 3.32149 17 4.5 17C5.67851 17 6.26777 17 6.63388 17.3661C7 17.7322 7 18.3215 7 19.5C7 20.6785 7 21.2678 6.63388 21.6339C6.26777 22 5.67851 22 4.5 22C3.32149 22 2.73223 22 2.36612 21.6339C2 21.2678 2 20.6785 2 19.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 19.5C17 18.3215 17 17.7322 17.3661 17.3661C17.7322 17 18.3215 17 19.5 17C20.6785 17 21.2678 17 21.6339 17.3661C22 17.7322 22 18.3215 22 19.5C22 20.6785 22 21.2678 21.6339 21.6339C21.2678 22 20.6785 22 19.5 22C18.3215 22 17.7322 22 17.3661 21.6339C17 21.2678 17 20.6785 17 19.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 12.5C14.5 13.8807 13.3807 15 12 15C10.6193 15 9.5 13.8807 9.5 12.5C9.5 11.1193 10.6193 10 12 10C13.3807 10 14.5 11.1193 14.5 12.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 7V10M9.5 13L4.5 17M14.5 13L19.5 17'
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

HierarchySquare6Icon.displayName = 'HierarchySquare6Icon';
export default HierarchySquare6Icon;
