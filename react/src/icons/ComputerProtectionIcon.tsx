import React from 'react';
import config from '../config';

interface ComputerProtectionIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ComputerProtectionIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/computer-protection)
 * @see {@link https://clicons.dev/icon/computer-protection}
 */
const ComputerProtectionIcon = React.forwardRef<SVGSVGElement, ComputerProtectionIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 13C21.9221 14.8723 21.671 16.0203 20.8614 16.8284C19.6878 18 17.7989 18 14.021 18H10.014C6.23617 18 4.34725 18 3.17362 16.8284C2 15.6569 2 13.7712 2 10C2 6.22876 2 4.34315 3.17362 3.17157C4.34725 2 6.23617 2 10.014 2H11'
    }
  ],
  [
    'path',
    {
      d: 'M12 18V22'
    }
  ],
  [
    'path',
    {
      d: 'M8 22H16'
    }
  ],
  [
    'path',
    {
      d: 'M11 15H13'
    }
  ],
  [
    'path',
    {
      d: 'M22 5.5V3C20 3 18.5 2 18.5 2C18.5 2 17 3 15 3V5.5C15 9 18.5 10 18.5 10C18.5 10 22 9 22 5.5Z'
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

ComputerProtectionIcon.displayName = 'ComputerProtectionIcon';
export default ComputerProtectionIcon;
