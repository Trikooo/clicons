import React from 'react';
import config from '../config';

interface LicensePinIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LicensePinIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/license-pin)
 * @see {@link https://clicons.dev/icon/license-pin}
 */
const LicensePinIcon = React.forwardRef<SVGSVGElement, LicensePinIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 7H15M7 12H12.5M7 17L11 17'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 11V10C19.5 6.22876 19.5 4.34315 18.3284 3.17157C17.1569 2 15.2712 2 11.5 2H10.5001C6.7289 2 4.84329 2 3.67172 3.17156C2.50015 4.34312 2.50014 6.22872 2.5001 9.99993L2.50007 13.9999C2.50004 17.7712 2.50002 19.6568 3.67159 20.8284C4.84317 22 6.7288 22 10.5001 22H14'
    }
  ],
  [
    'path',
    {
      d: 'M18.5 19H17.0754C16.1713 19 15.7192 19 15.5534 18.7463C15.3875 18.4927 15.6201 18.157 16.0853 17.4855L16.5384 16.8315C16.6519 16.6677 16.7086 16.5858 16.727 16.4938C16.7454 16.4019 16.7238 16.3083 16.6805 16.1209L16.4669 15.1961C16.3391 14.6427 16.2753 14.366 16.4485 14.183C16.6217 14 16.9475 14 17.5992 14H19.4008C20.0525 14 20.3783 14 20.5515 14.183C20.7248 14.366 20.6609 14.6427 20.5331 15.1961L20.3195 16.1209C20.2762 16.3083 20.2546 16.4019 20.273 16.4938C20.2914 16.5858 20.3481 16.6677 20.4616 16.8315L20.9147 17.4855C21.3799 18.157 21.6125 18.4927 21.4466 18.7463C21.2808 19 20.8287 19 19.9246 19H18.5ZM18.5 19V22'
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

LicensePinIcon.displayName = 'LicensePinIcon';
export default LicensePinIcon;
