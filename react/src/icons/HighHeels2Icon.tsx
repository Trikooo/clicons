import React from 'react';
import config from '../config';

interface HighHeels2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HighHeels2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/high-heels2)
 * @see {@link https://clicons.dev/icon/high-heels2}
 */
const HighHeels2Icon = React.forwardRef<SVGSVGElement, HighHeels2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.94 20C20.7001 19.5608 20.5461 18.7733 20.7747 17.9828C21.072 16.9548 21.2166 16.6616 20.2832 16.1146L18.8943 15.3006C18.0159 14.7858 17.8318 14.9376 17.1901 15.7146C16.4066 16.6636 15.0099 17.7544 13 18.2276'
    }
  ],
  [
    'path',
    {
      d: 'M2 7V5.2C2 4.2072 2.17267 4 3 4H8C8.9076 4 9 4.55496 9 5.5C9 6.44504 8.9076 7 8 7H2ZM2 7V12'
    }
  ],
  [
    'path',
    {
      d: 'M2 12H3C5.45356 12 6.68034 12 7.73607 12.5279C8.7918 13.0557 9.52786 14.0372 11 16C13.9754 19.9672 17.4727 20 22 20'
    }
  ],
  [
    'path',
    {
      d: 'M2 12L3.46941 19.8369C3.48715 19.9315 3.56974 20 3.66599 20H4.3C4.41046 20 4.5004 19.914 4.50314 19.8036C4.52912 18.7574 4.7698 13.8381 7 12.5'
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

HighHeels2Icon.displayName = 'HighHeels2Icon';
export default HighHeels2Icon;
