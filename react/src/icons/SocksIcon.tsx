import React from 'react';
import config from '../config';

interface SocksIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SocksIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/socks)
 * @see {@link https://clicons.dev/icon/socks}
 */
const SocksIcon = React.forwardRef<SVGSVGElement, SocksIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.5 6V5C13.5 4.05719 13.5 3.58579 13.7929 3.29289C14.0858 3 14.5572 3 15.5 3H18.5C19.4428 3 19.9142 3 20.2071 3.29289C20.5 3.58579 20.5 4.05719 20.5 5V6H13.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 6V13.3395C20.5 14.4025 20.0769 15.4218 19.3241 16.1723L15.5161 19.9685C14.1398 21.3438 11.9085 21.3438 10.5322 19.9685C9.15593 18.5933 9.15594 16.3635 10.5322 14.9882L13.5 12V6'
    }
  ],
  [
    'path',
    {
      d: 'M10.5 6H7.5V5C7.5 4.05719 7.5 3.58579 7.79289 3.29289C8.08579 3 8.55719 3 9.5 3H10.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 6V12L4.5322 14.9882C3.15594 16.3635 3.15593 18.5933 4.5322 19.9685C5.34165 20.7774 6.4469 21.1105 7.5 20.9679'
    }
  ],
  [
    'path',
    {
      d: 'M11 14.5L16 19.5'
    }
  ],
  [
    'path',
    {
      d: 'M5 14.5L7 16.5'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 12C18.8431 12 17.5 13.3431 17.5 15C17.5 15.7684 17.7889 16.4692 18.2639 17'
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

SocksIcon.displayName = 'SocksIcon';
export default SocksIcon;
