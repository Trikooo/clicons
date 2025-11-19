import React from 'react';
import config from '../config';

interface CpuSettingsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CpuSettingsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cpu-settings)
 * @see {@link https://clicons.dev/icon/cpu-settings}
 */
const CpuSettingsIcon = React.forwardRef<SVGSVGElement, CpuSettingsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20 10C19.9641 7.52043 19.7801 6.11466 18.8365 5.17157C17.6643 4 15.7776 4 12.0043 4C8.23106 4 6.34442 4 5.17221 5.17157C4 6.34315 4 8.22876 4 12C4 15.7712 4 17.6569 5.17221 18.8284C6.23545 19.8911 7.88646 19.9899 11 19.9991'
    }
  ],
  [
    'path',
    {
      d: 'M18 19.7143V21M18 19.7143C16.8432 19.7143 15.8241 19.1461 15.2263 18.2833M18 19.7143C19.1568 19.7143 20.1759 19.1461 20.7737 18.2833M18 13.2857C19.1569 13.2857 20.1761 13.854 20.7738 14.7169M18 13.2857C16.8431 13.2857 15.8239 13.854 15.2262 14.7169M18 13.2857V12M22 13.9286L20.7738 14.7169M14.0004 19.0714L15.2263 18.2833M14 13.9286L15.2262 14.7169M21.9996 19.0714L20.7737 18.2833M20.7738 14.7169C21.1273 15.2271 21.3333 15.8403 21.3333 16.5C21.3333 17.1597 21.1272 17.773 20.7737 18.2833M15.2262 14.7169C14.8727 15.2271 14.6667 15.8403 14.6667 16.5C14.6667 17.1597 14.8728 17.773 15.2263 18.2833'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 2V4'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 2V4'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 20V22'
    }
  ],
  [
    'path',
    {
      d: 'M4 9.5L2 9.5'
    }
  ],
  [
    'path',
    {
      d: 'M4 14.5L2 14.5'
    }
  ],
  [
    'path',
    {
      d: 'M22 9.5L20 9.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 8H8'
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

CpuSettingsIcon.displayName = 'CpuSettingsIcon';
export default CpuSettingsIcon;
