import React from 'react';
import config from '../config';

interface PlayListAddIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PlayListAddIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/play-list-add)
 * @see {@link https://clicons.dev/icon/play-list-add}
 */
const PlayListAddIcon = React.forwardRef<SVGSVGElement, PlayListAddIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M1.99988 7H20.9999'
    }
  ],
  [
    'path',
    {
      d: 'M16.4999 2L13.4999 7'
    }
  ],
  [
    'path',
    {
      d: 'M9.49988 2L6.49988 7'
    }
  ],
  [
    'path',
    {
      d: 'M11.5001 21C7.02172 21 4.78255 21 3.3913 19.6088C2.00006 18.2175 2.00006 15.9783 2.00006 11.5C2.00006 7.02166 2.00006 4.78249 3.3913 3.39124C4.78255 2 7.02172 2 11.5001 2C15.9784 2 18.2176 2 19.6088 3.39124C21.0001 4.78249 21.0001 7.02166 21.0001 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M14 18H22M18 22L18 14'
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

PlayListAddIcon.displayName = 'PlayListAddIcon';
export default PlayListAddIcon;
