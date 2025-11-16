import React from 'react';
import config from '../config';

interface TabletPenIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TabletPenIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tablet-pen)
 * @see {@link https://clicons.dev/icon/tablet-pen}
 */
const TabletPenIcon = React.forwardRef<SVGSVGElement, TabletPenIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 12C2 7.75736 2 5.63604 3.31802 4.31802C4.63604 3 6.75736 3 11 3H13C17.2426 3 19.364 3 20.682 4.31802C22 5.63604 22 7.75736 22 12C22 16.2426 22 18.364 20.682 19.682C19.364 21 17.2426 21 13 21H11C6.75736 21 4.63604 21 3.31802 19.682C2 18.364 2 16.2426 2 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 3V21'
    }
  ],
  [
    'path',
    {
      d: 'M17.0058 8.88441L17.614 9.49021C18.1286 10.0028 18.1286 10.8338 17.6141 11.3463L14.4275 14.5799C14.1768 14.8296 13.8561 14.9979 13.5077 15.0627L11.5327 15.4898C11.2209 15.5572 10.9432 15.2814 11.01 14.9706L11.4304 13.0148C11.4955 12.6677 11.6645 12.3483 11.9151 12.0987L15.1423 8.88441C15.6569 8.37186 16.4912 8.37186 17.0058 8.88441Z'
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

TabletPenIcon.displayName = 'TabletPenIcon';
export default TabletPenIcon;
