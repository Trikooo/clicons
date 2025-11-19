import React from 'react';
import config from '../config';

interface LaurelWreathLeft3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LaurelWreathLeft3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/laurel-wreath-left3)
 * @see {@link https://clicons.dev/icon/laurel-wreath-left3}
 */
const LaurelWreathLeft3Icon = React.forwardRef<SVGSVGElement, LaurelWreathLeft3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.9889 6.5C10.9889 6.5 12.821 6.4339 13.6618 4.9339C14.5025 3.4339 13.5111 2 13.5111 2C13.5111 2 11.6789 2.0661 10.8382 3.5661C9.9975 5.0661 10.9889 6.5 10.9889 6.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.1829 6.5C9.71953 8.59896 7.86589 13.475 12.1585 16.1875C17.5243 19.5781 18.0122 20.5469 18.5 22'
    }
  ],
  [
    'path',
    {
      d: 'M16.0321 18.5C16.0321 18.5 12.4597 17.1364 14.5012 13.5C14.5012 13.5 18.5838 14.8636 16.0321 18.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 19.0001C16 19.0001 13.6326 15.9252 10.5 19.1051C10.5 19.1051 13.0077 22.6818 16 19.0001Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.49057 12.9391C9.49057 12.9391 9.88764 8.85377 5.52987 9.00405C5.52987 9.00405 4.89393 13.5764 9.49057 12.9391Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.50943 12.5001C9.50943 12.5001 9.11236 8.41482 13.4701 8.5651C13.4701 8.5651 14.1061 13.1374 9.50943 12.5001Z'
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

LaurelWreathLeft3Icon.displayName = 'LaurelWreathLeft3Icon';
export default LaurelWreathLeft3Icon;
