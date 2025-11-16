import React from 'react';
import config from '../config';

interface CargoShipIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CargoShipIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cargo-ship)
 * @see {@link https://clicons.dev/icon/cargo-ship}
 */
const CargoShipIcon = React.forwardRef<SVGSVGElement, CargoShipIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 21.494C3.2945 21.5899 4.38367 20.5 5.33333 20.5C6.283 20.5 7.82473 21.5053 8.66667 21.494C9.67699 21.5025 10.8604 20.5 12 20.5C13.1396 20.5 14.323 21.5025 15.3333 21.494C16.6278 21.5899 17.717 20.5 18.6667 20.5C19.6163 20.5 21.1581 21.5053 22 21.494'
    }
  ],
  [
    'path',
    {
      d: 'M6 20.5C4.58214 18.7336 3.58286 16.4728 3.15734 15.2748C3.0224 14.8949 2.95494 14.705 3.03329 14.5234C3.11163 14.3419 3.30377 14.2568 3.68803 14.0866L11.1772 10.7692C11.5824 10.5897 11.785 10.5 12 10.5C12.215 10.5 12.4176 10.5897 12.8228 10.7692L20.312 14.0866C20.6962 14.2568 20.8884 14.3419 20.9667 14.5234C21.0451 14.705 20.9776 14.8949 20.8427 15.2748C20.4171 16.4728 19.4179 18.7336 18 20.5'
    }
  ],
  [
    'path',
    {
      d: 'M6 13L6.21591 10.1932C6.35068 8.44115 6.41807 7.56511 6.99316 7.03256C7.56826 6.5 8.44688 6.5 10.2041 6.5H13.7959C15.5531 6.5 16.4317 6.5 17.0068 7.03256C17.5819 7.56511 17.6493 8.44115 17.7841 10.1932L18 13'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 6.5L8.67151 5.1279C8.82792 3.87661 8.90613 3.25097 9.33147 2.87548C9.75681 2.5 10.3873 2.5 11.6483 2.5H12.3517C13.6127 2.5 14.2432 2.5 14.6685 2.87548C15.0939 3.25097 15.1721 3.87661 15.3285 5.1279L15.5 6.5'
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

CargoShipIcon.displayName = 'CargoShipIcon';
export default CargoShipIcon;
