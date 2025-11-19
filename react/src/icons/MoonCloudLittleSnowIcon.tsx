import React from 'react';
import config from '../config';

interface MoonCloudLittleSnowIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MoonCloudLittleSnowIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/moon-cloud-little-snow)
 * @see {@link https://clicons.dev/icon/moon-cloud-little-snow}
 */
const MoonCloudLittleSnowIcon = React.forwardRef<SVGSVGElement, MoonCloudLittleSnowIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.4776 10.9869C17.485 10.9868 17.4925 10.9868 17.5 10.9868C19.9853 10.9868 22 12.9971 22 15.4768C22 17.2398 20.9817 18.7654 19.5 19.5001M17.4776 10.9869C17.4924 10.8225 17.5 10.6561 17.5 10.4879C17.5 7.45709 15.0376 5.00012 12 5.00012C9.12324 5.00012 6.76233 7.20384 6.52042 10.0117M17.4776 10.9869C17.395 11.9015 16.9769 12.6885 16.5 13.4182M6.52042 10.0117C3.98398 10.2525 2 12.384 2 14.9779C2 16.8245 3.0055 18.4368 4.5 19.2994M6.52042 10.0117C6.67826 9.99669 6.83823 9.98903 7 9.98903C8.12582 9.98903 9.16474 10.3603 10.0005 10.9868'
    }
  ],
  [
    'path',
    {
      d: 'M11 16L13 18M13 16L11 18'
    }
  ],
  [
    'path',
    {
      d: 'M15 20L17 22M17 20L15 22'
    }
  ],
  [
    'path',
    {
      d: 'M7 20L9 22M9 20L7 22'
    }
  ],
  [
    'path',
    {
      d: 'M10 5.13829C9.91652 4.70849 9.76249 4.28506 9.53351 3.88456C8.98606 2.92704 8.11203 2.27864 7.13552 2C7.28642 3.22635 6.71543 4.48154 5.58897 5.13829C4.46251 5.79504 3.10057 5.66681 2.1243 4.92166C1.87501 5.91497 1.99406 7.00354 2.54151 7.96107C3.48512 9.61151 5.39904 10.3436 7.13552 9.84664'
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

MoonCloudLittleSnowIcon.displayName = 'MoonCloudLittleSnowIcon';
export default MoonCloudLittleSnowIcon;
