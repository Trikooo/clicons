import React from 'react';
import config from '../config';

interface TwinTowerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TwinTowerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/twin-tower)
 * @see {@link https://clicons.dev/icon/twin-tower}
 */
const TwinTowerIcon = React.forwardRef<SVGSVGElement, TwinTowerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9 19L12 15L15 19M9 14H15'
    }
  ],
  [
    'path',
    {
      d: 'M2 22V14C2 13.0572 2 12.5858 2.29289 12.2929C2.58579 12 3.05719 12 4 12H7C7.94281 12 8.41421 12 8.70711 12.2929C9 12.5858 9 13.0572 9 14V22'
    }
  ],
  [
    'path',
    {
      d: 'M3 12V10C3 9.05719 3 8.58579 3.29289 8.29289C3.58579 8 4.05719 8 5 8H6C6.94281 8 7.41421 8 7.70711 8.29289C8 8.58579 8 9.05719 8 10V12'
    }
  ],
  [
    'path',
    {
      d: 'M4 8V5.5C4 5.03406 4 4.80109 4.07612 4.61732C4.17761 4.37229 4.37229 4.17761 4.61732 4.07612C4.80109 4 5.03406 4 5.5 4C5.96594 4 6.19891 4 6.38268 4.07612C6.62771 4.17761 6.82239 4.37229 6.92388 4.61732C7 4.80109 7 5.03406 7 5.5V8'
    }
  ],
  [
    'path',
    {
      d: 'M15 22V14C15 13.0572 15 12.5858 15.2929 12.2929C15.5858 12 16.0572 12 17 12H20C20.9428 12 21.4142 12 21.7071 12.2929C22 12.5858 22 13.0572 22 14V22'
    }
  ],
  [
    'path',
    {
      d: 'M2 22H22'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 4V2'
    }
  ],
  [
    'path',
    {
      d: 'M16 12V10C16 9.05719 16 8.58579 16.2929 8.29289C16.5858 8 17.0572 8 18 8H19C19.9428 8 20.4142 8 20.7071 8.29289C21 8.58579 21 9.05719 21 10V12'
    }
  ],
  [
    'path',
    {
      d: 'M17 8V5.5C17 5.03406 17 4.80109 17.0761 4.61732C17.1776 4.37229 17.3723 4.17761 17.6173 4.07612C17.8011 4 18.0341 4 18.5 4C18.9659 4 19.1989 4 19.3827 4.07612C19.6277 4.17761 19.8224 4.37229 19.9239 4.61732C20 4.80109 20 5.03406 20 5.5V8'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 4V2'
    }
  ],
  [
    'path',
    {
      d: 'M5.5 22V20'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 22V20'
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

TwinTowerIcon.displayName = 'TwinTowerIcon';
export default TwinTowerIcon;
