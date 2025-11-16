import React from 'react';
import config from '../config';

interface BlackHoleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BlackHoleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/black-hole)
 * @see {@link https://clicons.dev/icon/black-hole}
 */
const BlackHoleIcon = React.forwardRef<SVGSVGElement, BlackHoleIconProps>(
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
      cy: '13',
      rx: '10',
      ry: '5'
    }
  ],
  [
    'path',
    {
      d: 'M18.6017 12C17.6407 13.1652 15.0478 14 12 14C8.95216 14 6.35927 13.1652 5.39832 12'
    }
  ],
  [
    'path',
    {
      d: 'M10.063 13.5C10.0219 13.3402 10 13.1726 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13C14 13.1726 13.9781 13.3402 13.937 13.5'
    }
  ],
  [
    'path',
    {
      d: 'M6 4L9 13.5M7 20L9 18'
    }
  ],
  [
    'path',
    {
      d: 'M17 6L15 13.5M17 20L15 18'
    }
  ],
  [
    'path',
    {
      d: 'M12 2V11M12 22V18'
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

BlackHoleIcon.displayName = 'BlackHoleIcon';
export default BlackHoleIcon;
