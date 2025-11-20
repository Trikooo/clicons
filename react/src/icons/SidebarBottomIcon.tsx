import React from 'react';
import config from '../config';

interface SidebarBottomIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SidebarBottomIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sidebar-bottom)
 * @see {@link https://clicons.dev/icon/sidebar-bottom}
 */
const SidebarBottomIcon = React.forwardRef<SVGSVGElement, SidebarBottomIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.7208 21 5.0812 21 3.9189 20.0845C3.4889 19.7457 3.1149 19.325 2.8138 18.8412C2 17.5337 2 15.6891 2 12C2 8.31092 2 6.46632 2.8138 5.15882C3.1149 4.67502 3.4889 4.25432 3.9189 3.91552C5.0812 3.00002 6.7208 3.00002 10 3.00002H14C17.2792 3.00002 18.9188 3.00002 20.0811 3.91552C20.5111 4.25432 20.8851 4.67502 21.1862 5.15882C22 6.46632 22 8.31092 22 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 15L2 15'
    }
  ],
  [
    'path',
    {
      d: 'M15 18H14M11 18H10M7 18H6'
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

SidebarBottomIcon.displayName = 'SidebarBottomIcon';
export default SidebarBottomIcon;
