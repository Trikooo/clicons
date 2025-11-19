import React from 'react';
import config from '../config';

interface SineIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SineIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sine)
 * @see {@link https://clicons.dev/icon/sine}
 */
const SineIcon = React.forwardRef<SVGSVGElement, SineIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.00148 14C5.00185 11.7778 4.81561 4 8.50178 4C10.4342 4 12.0007 7.58172 12.0007 12C12.0007 16.4183 13.5672 20 15.4996 20C19.1858 20 19 12.2222 19 10'
    }
  ],
  [
    'path',
    {
      d: 'M2 12H5'
    }
  ],
  [
    'path',
    {
      d: 'M19 12H22'
    }
  ],
  [
    'path',
    {
      d: 'M8 12H16'
    }
  ],
  [
    'path',
    {
      d: 'M20.9146 2.83333C20.7087 2.34784 20.1531 2 19.5 2C18.6716 2 18 2.55964 18 3.25C18 3.94036 18.6716 4.5 19.5 4.5C20.3284 4.5 21 5.05964 21 5.75C21 6.44036 20.3284 7 19.5 7C18.8469 7 18.2913 6.65216 18.0854 6.16667'
    }
  ],
  [
    'path',
    {
      d: 'M5.54393 17C4.69124 17 4 17.6716 4 18.5V20.5C4 21.3284 4.69124 22 5.54393 22M5.54393 17C6.21616 17 6.78805 17.4174 7 18M5.54393 17C4.87169 17 4.2998 17.4174 4.08785 18M5.54393 22C4.87169 22 4.2998 21.5826 4.08785 21M5.54393 22C6.21616 22 6.78805 21.5826 7 21'
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

SineIcon.displayName = 'SineIcon';
export default SineIcon;
