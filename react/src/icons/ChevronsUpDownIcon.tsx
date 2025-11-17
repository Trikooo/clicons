import React from 'react';
import config from '../config';

interface ChevronsUpDownIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
}

/**
 * @name ChevronsUpDownIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chevrons-up-down)
 * @see {@link https://clicons.dev/icon/chevrons-up-down}
 */
const ChevronsUpDownIcon = React.forwardRef<SVGSVGElement, ChevronsUpDownIconProps>(
  ({ size, color, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      d: 'M18 10C18 10 13.581 4.00001 11.9999 4C10.4188 3.99999 6 10 6 10',
      stroke: 'black'
    }
  ],
  [
    'path',
    {
      d: 'M6.00005 14C6.00005 14 10.419 20 12.0001 20C13.5812 20 18 14 18 14',
      stroke: 'black'
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
        if (!processedAttrs.fill) processedAttrs.fill = finalColor;
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

ChevronsUpDownIcon.displayName = 'ChevronsUpDownIcon';
export default ChevronsUpDownIcon;
