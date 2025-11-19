import React from 'react';
import config from '../config';

interface HierarchyIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HierarchyIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hierarchy)
 * @see {@link https://clicons.dev/icon/hierarchy}
 */
const HierarchyIcon = React.forwardRef<SVGSVGElement, HierarchyIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.89128 7.55559C9.34109 7.8715 7.89853 8.51654 8.77715 9.32371C9.20634 9.71801 9.68436 10 10.2853 10H13.7147C14.3156 10 14.7937 9.71801 15.2229 9.32371C16.1015 8.51654 14.6589 7.8715 14.1087 7.55559C12.8185 6.8148 11.1815 6.8148 9.89128 7.55559Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.3913 19.5556C15.8411 19.8715 14.3985 20.5165 15.2771 21.3237C15.7063 21.718 16.1844 22 16.7853 22H20.2147C20.8156 22 21.2937 21.718 21.7229 21.3237C22.6015 20.5165 21.1589 19.8715 20.6087 19.5556C19.3185 18.8148 17.6815 18.8148 16.3913 19.5556Z'
    }
  ],
  [
    'path',
    {
      d: 'M20 15.5C20 16.3284 19.3284 17 18.5 17C17.6716 17 17 16.3284 17 15.5C17 14.6716 17.6716 14 18.5 14C19.3284 14 20 14.6716 20 15.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M3.39128 19.5556C2.84109 19.8715 1.39853 20.5165 2.27715 21.3237C2.70634 21.718 3.18436 22 3.78534 22H7.21466C7.81564 22 8.29366 21.718 8.72285 21.3237C9.60147 20.5165 8.15891 19.8715 7.60872 19.5556C6.31854 18.8148 4.68146 18.8148 3.39128 19.5556Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 15.5C7 16.3284 6.32843 17 5.5 17C4.67157 17 4 16.3284 4 15.5C4 14.6716 4.67157 14 5.5 14C6.32843 14 7 14.6716 7 15.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 13V15.5M12 15.5L14.5 17M12 15.5L9.5 17'
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

HierarchyIcon.displayName = 'HierarchyIcon';
export default HierarchyIcon;
