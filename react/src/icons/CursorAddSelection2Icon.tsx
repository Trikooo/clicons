import React from 'react';
import config from '../config';

interface CursorAddSelection2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CursorAddSelection2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cursor-add-selection2)
 * @see {@link https://clicons.dev/icon/cursor-add-selection2}
 */
const CursorAddSelection2Icon = React.forwardRef<SVGSVGElement, CursorAddSelection2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.0469 4.44865L14.4101 6.54728L14.4101 6.54728C17.5034 7.75771 19.05 8.36293 18.9988 9.32296C18.9475 10.283 17.3334 10.7232 14.1051 11.6036C13.1439 11.8658 12.6633 11.9969 12.3301 12.3301C11.9969 12.6633 11.8658 13.1439 11.6036 14.1051C10.7232 17.3334 10.283 18.9475 9.32296 18.9988C8.36293 19.05 7.75771 17.5034 6.54728 14.4101L6.54728 14.4101L4.44865 9.0469C3.18138 5.80831 2.54774 4.18901 3.36837 3.36837C4.18901 2.54774 5.80831 3.18138 9.0469 4.44865Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 14V21M21 17.5L14 17.5'
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

CursorAddSelection2Icon.displayName = 'CursorAddSelection2Icon';
export default CursorAddSelection2Icon;
