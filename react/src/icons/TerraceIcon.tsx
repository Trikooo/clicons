import React from 'react';
import config from '../config';

interface TerraceIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TerraceIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/terrace)
 * @see {@link https://clicons.dev/icon/terrace}
 */
const TerraceIcon = React.forwardRef<SVGSVGElement, TerraceIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 14L4 19M4 19L3 22M4 19H6.65287C7.35734 19 7.52345 19.1407 7.63927 19.8356L8 22'
    }
  ],
  [
    'path',
    {
      d: 'M21 14L20 19M20 19L21 22M20 19H17.3471C16.6427 19 16.4765 19.1407 16.3607 19.8356L16 22'
    }
  ],
  [
    'path',
    {
      d: 'M12 10V22'
    }
  ],
  [
    'path',
    {
      d: 'M4.60045 7.40727C6.67011 6.43818 8.75263 4.89851 10.2888 3.36403C11.1992 2.45468 11.6543 2 12 2C12.3457 2 12.8008 2.45468 13.7112 3.36403C15.2474 4.89851 17.3299 6.43818 19.3995 7.40727C20.1034 7.73682 20.5328 8.14335 20.873 8.9348C21.1333 9.54022 21.0165 10 20.3071 10H3.69295C2.98348 10 2.86672 9.54022 3.12697 8.9348C3.46718 8.14335 3.89663 7.73683 4.60045 7.40727Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 22H13'
    }
  ],
  [
    'path',
    {
      d: 'M9 15H15'
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

TerraceIcon.displayName = 'TerraceIcon';
export default TerraceIcon;
