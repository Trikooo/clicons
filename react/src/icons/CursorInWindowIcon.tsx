import React from 'react';
import config from '../config';

interface CursorInWindowIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CursorInWindowIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cursor-in-window)
 * @see {@link https://clicons.dev/icon/cursor-in-window}
 */
const CursorInWindowIcon = React.forwardRef<SVGSVGElement, CursorInWindowIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V12C2 15.7712 2 17.6569 3.17157 18.8284C4.23467 19.8915 5.8857 19.99 9 19.9991H9.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.5285 21.0596C12.8812 21.1735 11.249 13.4909 12.3697 12.37C13.4905 11.2491 21.1736 12.8801 21.0598 14.5274C20.9814 15.6063 19.1553 16.033 19.2086 16.9918C19.2243 17.2726 19.579 17.5286 20.2885 18.0404C20.7815 18.3961 21.2841 18.7415 21.7687 19.1086C21.9621 19.2551 22.0385 19.5015 21.9817 19.7337C21.7089 20.8491 20.854 21.7078 19.7341 21.9817C19.5018 22.0385 19.2555 21.9621 19.109 21.7686C18.742 21.284 18.3967 20.7813 18.041 20.2882C17.5292 19.5786 17.2733 19.2239 16.9925 19.2082C16.0339 19.1549 15.6072 20.9812 14.5285 21.0596Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 7H20'
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

CursorInWindowIcon.displayName = 'CursorInWindowIcon';
export default CursorInWindowIcon;
