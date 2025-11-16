import React from 'react';
import config from '../config';

interface OilBarrelIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name OilBarrelIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/oil-barrel)
 * @see {@link https://clicons.dev/icon/oil-barrel}
 */
const OilBarrelIcon = React.forwardRef<SVGSVGElement, OilBarrelIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'ellipse',
    {
      cx: '12',
      cy: '4',
      rx: '8',
      ry: '2'
    }
  ],
  [
    'path',
    {
      d: 'M12 12.5C12.8284 12.5 13.5 11.8284 13.5 11C13.5 10 12 8.5 12 8.5C12 8.5 10.5 10 10.5 11C10.5 11.8284 11.1716 12.5 12 12.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M19 5V10.5465C19.6372 10.9771 20 11.4727 20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12C4 11.4727 4.36284 10.9771 5 10.5465V5'
    }
  ],
  [
    'path',
    {
      d: 'M19 13.5V17.5465C19.6372 17.9771 20 18.4727 20 19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19C4 18.4727 4.36284 17.9771 5 17.5465V13.5'
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

OilBarrelIcon.displayName = 'OilBarrelIcon';
export default OilBarrelIcon;
