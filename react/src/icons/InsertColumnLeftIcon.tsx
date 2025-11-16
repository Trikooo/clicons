import React from 'react';
import config from '../config';

interface InsertColumnLeftIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name InsertColumnLeftIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/insert-column-left)
 * @see {@link https://clicons.dev/icon/insert-column-left}
 */
const InsertColumnLeftIcon = React.forwardRef<SVGSVGElement, InsertColumnLeftIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.8125 18C3.01415 18.8888 3.34564 19.5638 3.89059 20.1088C5.28184 21.5 7.52101 21.5 11.9994 21.5C16.4777 21.5 18.7169 21.5 20.1081 20.1088C21.4993 18.7175 21.4993 16.4783 21.4993 12C21.4993 7.52166 21.4993 5.28249 20.1081 3.89124C18.7169 2.5 16.4777 2.5 11.9994 2.5C7.52101 2.5 5.28184 2.5 3.89059 3.89124C3.34564 4.4362 3.01415 5.11125 2.8125 6.00001'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 9L2.5 12L5.5 15M3.5 12L10.5 12'
    }
  ],
  [
    'path',
    {
      d: 'M15 2.49805L15 21.498'
    }
  ],
  [
    'path',
    {
      d: 'M21.5 8.49805H15M21.5 15.498H15'
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

InsertColumnLeftIcon.displayName = 'InsertColumnLeftIcon';
export default InsertColumnLeftIcon;
