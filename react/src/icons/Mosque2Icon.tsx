import React from 'react';
import config from '../config';

interface Mosque2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Mosque2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mosque2)
 * @see {@link https://clicons.dev/icon/mosque2}
 */
const Mosque2Icon = React.forwardRef<SVGSVGElement, Mosque2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.96474 13C2.84824 9.5 8.16448 7.75 9.5 6C10.8357 7.75 16.152 9.5 13.0354 13H5.96474Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.2631 7C16.204 4.5 18.8676 3.25 19.75 2C20.6325 3.25 23.296 4.5 21.2369 7H18.2631Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 3.65685C10.288 3.86887 9.99509 4 9.67157 4C9.02453 4 8.5 3.47547 8.5 2.82843C8.5 2.50491 8.63113 2.21201 8.84315 2'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 4V5V6'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 17V22H4.64286C3.6327 22 3.12763 22 2.81381 21.7071C2.5 21.4142 2.5 20.9428 2.5 20V17C2.5 15.1144 2.5 14.1716 3.12763 13.5858C3.75526 13 4.76541 13 6.78571 13H13.2143C15.2346 13 16.2447 13 16.8724 13.5858C17.5 14.1716 17.5 15.1144 17.5 17Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 22H18.1871C20.3378 22 21.4131 22 22.0333 21.342C22.6535 20.684 22.5465 19.6567 22.3325 17.602L21.2283 7H18.1038L17.1317 13.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.50009 22V20C7.48279 17 10 16 10 16C10 16 12.5172 17 12.4999 20V22'
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

Mosque2Icon.displayName = 'Mosque2Icon';
export default Mosque2Icon;
