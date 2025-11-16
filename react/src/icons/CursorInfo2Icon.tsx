import React from 'react';
import config from '../config';

interface CursorInfo2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CursorInfo2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cursor-info2)
 * @see {@link https://clicons.dev/icon/cursor-info2}
 */
const CursorInfo2Icon = React.forwardRef<SVGSVGElement, CursorInfo2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.0469 3.44865L15.4101 5.54728L15.4101 5.54728C18.5034 6.75771 20.05 7.36293 19.9988 8.32296C19.9475 9.28299 18.3334 9.7232 15.1051 10.6036C14.1439 10.8658 13.6633 10.9969 13.3301 11.3301C12.9969 11.6633 12.8658 12.1439 12.6036 13.1051C11.7232 16.3334 11.283 17.9475 10.323 17.9988C9.36293 18.05 8.75771 16.5034 7.54728 13.4101L7.54728 13.4101L5.44865 8.0469C4.18138 4.80831 3.54774 3.18901 4.36837 2.36837C5.18901 1.54774 6.80831 2.18138 10.0469 3.44865Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 21.99V22M16 15.9976C16 14.8944 16.8954 14 18 14C19.1046 14 20 14.8944 20 15.9976C20 16.5747 19.755 17.0946 19.3632 17.4593C18.7572 18.0234 18 18.666 18 19.4935'
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

CursorInfo2Icon.displayName = 'CursorInfo2Icon';
export default CursorInfo2Icon;
