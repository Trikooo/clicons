import React from 'react';
import config from '../config';

interface CursorRemoveSelection2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CursorRemoveSelection2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cursor-remove-selection2)
 * @see {@link https://clicons.dev/icon/cursor-remove-selection2}
 */
const CursorRemoveSelection2Icon = React.forwardRef<SVGSVGElement, CursorRemoveSelection2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.0469 5.44865L14.4101 7.54728L14.4101 7.54728C17.5034 8.75771 19.05 9.36293 18.9988 10.323C18.9475 11.283 17.3334 11.7232 14.1051 12.6036C13.1439 12.8658 12.6633 12.9969 12.3301 13.3301C11.9969 13.6633 11.8658 14.1439 11.6036 15.1051C10.7232 18.3334 10.283 19.9475 9.32296 19.9988C8.36293 20.05 7.75771 18.5034 6.54728 15.4101L6.54728 15.4101L4.44865 10.0469C3.18138 6.80831 2.54774 5.18901 3.36837 4.36837C4.18901 3.54774 5.80831 4.18138 9.0469 5.44865Z'
    }
  ],
  [
    'path',
    {
      d: 'M21 18.5L14 18.5'
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

CursorRemoveSelection2Icon.displayName = 'CursorRemoveSelection2Icon';
export default CursorRemoveSelection2Icon;
