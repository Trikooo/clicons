import React from 'react';
import config from '../config';

interface PrisonIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PrisonIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/prison)
 * @see {@link https://clicons.dev/icon/prison}
 */
const PrisonIcon = React.forwardRef<SVGSVGElement, PrisonIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 3V21'
    }
  ],
  [
    'path',
    {
      d: 'M9 3V21'
    }
  ],
  [
    'path',
    {
      d: 'M15 15L15 21'
    }
  ],
  [
    'path',
    {
      d: 'M15 3L15 9'
    }
  ],
  [
    'path',
    {
      d: 'M21 3V21'
    }
  ],
  [
    'path',
    {
      d: 'M2 3H22'
    }
  ],
  [
    'path',
    {
      d: 'M21 9H15C14.0572 9 13.5858 9 13.2929 9.29289C13 9.58579 13 10.0572 13 11V13C13 13.9428 13 14.4142 13.2929 14.7071C13.5858 15 14.0572 15 15 15L21 15'
    }
  ],
  [
    'path',
    {
      d: 'M2 21H22'
    }
  ],
  [
    'path',
    {
      d: 'M17 12L16 12'
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

PrisonIcon.displayName = 'PrisonIcon';
export default PrisonIcon;
