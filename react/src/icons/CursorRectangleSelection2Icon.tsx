import React from 'react';
import config from '../config';

interface CursorRectangleSelection2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CursorRectangleSelection2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cursor-rectangle-selection2)
 * @see {@link https://clicons.dev/icon/cursor-rectangle-selection2}
 */
const CursorRectangleSelection2Icon = React.forwardRef<SVGSVGElement, CursorRectangleSelection2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5352 11.0865L18.5575 12.6605C20.8775 13.5683 22.0375 14.0222 21.9991 14.7422C21.9606 15.4622 20.75 15.7924 18.3288 16.4527C17.6079 16.6493 17.2475 16.7476 16.9976 16.9976C16.7476 17.2475 16.6493 17.6079 16.4527 18.3288C15.7924 20.75 15.4622 21.9606 14.7422 21.9991C14.0222 22.0375 13.5683 20.8775 12.6605 18.5575L11.0865 14.5352C10.136 12.1062 9.6608 10.8918 10.2763 10.2763C10.8918 9.6608 12.1062 10.136 14.5352 11.0865Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 8.5V11.5M11.5 2H8.5M8.5 18H9M18 9V8.5M4.5 18C3.11929 18 2 16.8807 2 15.5M2 4.5C2 3.11929 3.11929 2 4.5 2M18 4.5C18 3.11929 16.8807 2 15.5 2'
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

CursorRectangleSelection2Icon.displayName = 'CursorRectangleSelection2Icon';
export default CursorRectangleSelection2Icon;
