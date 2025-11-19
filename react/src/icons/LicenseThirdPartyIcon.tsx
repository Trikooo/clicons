import React from 'react';
import config from '../config';

interface LicenseThirdPartyIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LicenseThirdPartyIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/license-third-party)
 * @see {@link https://clicons.dev/icon/license-third-party}
 */
const LicenseThirdPartyIcon = React.forwardRef<SVGSVGElement, LicenseThirdPartyIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.4999 10C19.4999 6.22876 19.4999 4.34315 18.3284 3.17157C17.1568 2 15.2712 2 11.4999 2H10.5C6.72883 2 4.84323 2 3.67166 3.17156C2.50008 4.34312 2.50007 6.22872 2.50004 9.99993L2.5 13.9999C2.49997 17.7712 2.49995 19.6568 3.67153 20.8284C4.8431 22 6.72873 22 10.5 22H12'
    }
  ],
  [
    'path',
    {
      d: 'M7 7H15M7 12H13.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.8613 22H20.1387C21.0238 22 21.7723 21.3987 21.4039 20.753C20.8135 19.7186 19.5114 19 18 19C16.4886 19 15.1865 19.7186 14.5961 20.753C14.2277 21.3987 14.9762 22 15.8613 22Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.9969 16.5C18.9639 16.5 19.7477 15.7165 19.7477 14.75C19.7477 13.7835 18.9639 13 17.9969 13C17.03 13 16.2461 13.7835 16.2461 14.75C16.2461 15.7165 17.03 16.5 17.9969 16.5Z'
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

LicenseThirdPartyIcon.displayName = 'LicenseThirdPartyIcon';
export default LicenseThirdPartyIcon;
