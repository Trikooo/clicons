import React from 'react';
import config from '../config';

interface PrayerRugIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PrayerRugIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/prayer-rug)
 * @see {@link https://clicons.dev/icon/prayer-rug}
 */
const PrayerRugIcon = React.forwardRef<SVGSVGElement, PrayerRugIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.5 21L16.5 21C18.3856 21 19.3284 21 19.9142 20.4142C20.5 19.8284 20.5 18.8856 20.5 17L20.5 11C20.5 9.11438 20.5 8.17157 19.9142 7.58579C19.3284 7 18.3856 7 16.5 7L8.5 7'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 21H4.5C3.39543 21 2.5 20.1046 2.5 19M2.5 19C2.5 17.8954 3.39543 17 4.5 17V17C6.38562 17 7.32843 17 7.91421 16.4142C8.5 15.8284 8.5 14.8856 8.5 13V8C8.5 6.11438 8.5 5.17157 7.91421 4.58579C7.32843 4 6.38562 4 4.5 4V4C3.39543 4 2.5 4.89543 2.5 6V19Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.5 16.3569H11.831C12.1209 16.3569 12.2658 16.3569 12.388 16.3856C12.5102 16.4144 12.7427 16.5307 13.2077 16.7634C14.8103 17.5655 15.8792 16.1625 16.8037 15.0273C17.2679 14.4572 17.5 14.1722 17.5 13.9999C17.5 13.8277 17.2679 13.5427 16.8036 12.9726C15.8792 11.8374 14.8103 10.4345 13.2077 11.2366C12.7427 11.4693 12.5102 11.5856 12.388 11.6144C12.2658 11.6431 12.1209 11.6431 11.831 11.6431L11.5 11.6431'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 16L22.5 16'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 20L22.5 20'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 12L22.5 12'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 8L22.5 8'
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

PrayerRugIcon.displayName = 'PrayerRugIcon';
export default PrayerRugIcon;
