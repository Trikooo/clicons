import React from 'react';
import config from '../config';

interface NintendoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name NintendoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/nintendo)
 * @see {@link https://clicons.dev/icon/nintendo}
 */
const NintendoIcon = React.forwardRef<SVGSVGElement, NintendoIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16 19.5H8C5.17157 19.5 3.75736 19.5 2.87868 18.5586C2 17.6171 2 16.1019 2 13.0714V10.9286C2 7.89811 2 6.38288 2.87868 5.44144C3.75736 4.5 5.17157 4.5 8 4.5H16C18.8284 4.5 20.2426 4.5 21.1213 5.44144C22 6.38288 22 7.89811 22 10.9286V13.0714C22 16.1019 22 17.6171 21.1213 18.5586C20.2426 19.5 18.8284 19.5 16 19.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 4.5V19.5'
    }
  ],
  [
    'path',
    {
      d: 'M7 4.5V19.5'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 15.5L19.491 15.5'
    }
  ],
  [
    'path',
    {
      d: 'M4.50801 8.5L4.49902 8.5'
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

NintendoIcon.displayName = 'NintendoIcon';
export default NintendoIcon;
