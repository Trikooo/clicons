import React from 'react';
import config from '../config';

interface MagnetIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MagnetIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/magnet)
 * @see {@link https://clicons.dev/icon/magnet}
 */
const MagnetIcon = React.forwardRef<SVGSVGElement, MagnetIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16 12V11C16 10.0572 16 9.58579 16.2929 9.29289C16.5858 9 17.0572 9 18 9C18.9428 9 19.4142 9 19.7071 9.29289C20 9.58579 20 10.0572 20 11V12M16 12V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V12M16 12H20M20 12V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V12M8 12V11C8 10.0572 8 9.58579 7.70711 9.29289C7.41421 9 6.94281 9 6 9C5.05719 9 4.58579 9 4.29289 9.29289C4 9.58579 4 10.0572 4 11V12M8 12L4 12'
    }
  ],
  [
    'path',
    {
      d: 'M18 2V6M20 4H16'
    }
  ],
  [
    'path',
    {
      d: 'M8 4H4'
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

MagnetIcon.displayName = 'MagnetIcon';
export default MagnetIcon;
