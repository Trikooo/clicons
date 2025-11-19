import React from 'react';
import config from '../config';

interface CursorProgress3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CursorProgress3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cursor-progress3)
 * @see {@link https://clicons.dev/icon/cursor-progress3}
 */
const CursorProgress3Icon = React.forwardRef<SVGSVGElement, CursorProgress3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.5469 3.94865L13.9101 6.04728L13.9101 6.04728C17.0034 7.25771 18.55 7.86293 18.4988 8.82296C18.4475 9.78299 16.8334 10.2232 13.6051 11.1036C12.6439 11.3658 12.1633 11.4969 11.8301 11.8301C11.4969 12.1633 11.3658 12.6439 11.1036 13.6051C10.2232 16.8334 9.78299 18.4475 8.82296 18.4988C7.86293 18.55 7.25771 17.0034 6.04728 13.9101L6.04728 13.9101L3.94865 8.5469C2.68138 5.30831 2.04774 3.68901 2.86837 2.86837C3.68901 2.04774 5.30831 2.68138 8.5469 3.94865Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.2585 13.531C18.0919 13.5106 17.9222 13.5001 17.75 13.5001C17.5778 13.5001 17.4081 13.5106 17.2415 13.531M18.2585 21.4691C18.0919 21.4895 17.9222 21.5001 17.75 21.5001C17.5778 21.5001 17.4081 21.4895 17.2415 21.4691M21.5 15.9492C21.4347 15.7972 21.3591 15.6474 21.273 15.5007C21.1869 15.3541 21.0928 15.2148 20.9915 15.0832M14.5085 19.9183C14.4072 19.7866 14.3131 19.6474 14.227 19.5007C14.1409 19.3541 14.0653 19.2043 14 19.0523M14.5085 15.0829C14.4072 15.2146 14.3131 15.3538 14.227 15.5005C14.1409 15.6471 14.0653 15.7969 14 15.949M21.5 19.052C21.4347 19.2041 21.3591 19.3538 21.273 19.5005C21.1869 19.6471 21.0928 19.7864 20.9915 19.918'
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

CursorProgress3Icon.displayName = 'CursorProgress3Icon';
export default CursorProgress3Icon;
