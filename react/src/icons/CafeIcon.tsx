import React from 'react';
import config from '../config';

interface CafeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CafeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cafe)
 * @see {@link https://clicons.dev/icon/cafe}
 */
const CafeIcon = React.forwardRef<SVGSVGElement, CafeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 7.79197C18.883 7.40618 19.5 6.52513 19.5 5.5L18 3H6L4.5 5.5C4.5 6.52513 5.11705 7.40618 6 7.79197M18 7.79197C17.6938 7.92577 17.3556 8 17 8C15.6193 8 14.5 6.88067 14.5 5.5C14.5 6.88067 13.3807 8 12 8C10.6193 8 9.5 6.88067 9.5 5.5C9.5 6.88067 8.38072 8 7 8C6.64445 8 6.30623 7.92577 6 7.79197M18 7.79197V11M6 7.79197V11'
    }
  ],
  [
    'path',
    {
      d: 'M3 12V17M3 17H5C6.41421 17 7.12132 17 7.56066 17.4393C8 17.8787 8 18.5858 8 20V21M3 17V21'
    }
  ],
  [
    'path',
    {
      d: 'M21 12V17M21 17H19C17.5858 17 16.8787 17 16.4393 17.4393C16 17.8787 16 18.5858 16 20V21M21 17V21'
    }
  ],
  [
    'path',
    {
      d: 'M7 14H12M17 14H12M12 14V21M12 21H11M12 21H13'
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

CafeIcon.displayName = 'CafeIcon';
export default CafeIcon;
