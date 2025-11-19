import React from 'react';
import config from '../config';

interface HandSanitizerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HandSanitizerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hand-sanitizer)
 * @see {@link https://clicons.dev/icon/hand-sanitizer}
 */
const HandSanitizerIcon = React.forwardRef<SVGSVGElement, HandSanitizerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.6565 16.1618L15.3119 13.9419C15.2092 13.2801 15.1578 12.9492 15.0787 12.666C14.5317 10.7079 12.8437 9.27248 10.8078 9.03444C10.5133 9 10.1755 9 9.5 9C8.82446 9 8.48668 9 8.19218 9.03444C6.15634 9.27248 4.46826 10.7079 3.92131 12.666C3.84219 12.9492 3.79083 13.2801 3.68811 13.9419L3.34352 16.1618C3.00313 18.3547 2.83293 19.4512 3.22851 20.2812C3.4607 20.7685 3.82102 21.1847 4.27159 21.4863C5.03922 22 6.15851 22 8.39711 22H10.6029C12.8415 22 13.9608 22 14.7284 21.4863C15.179 21.1847 15.5393 20.7685 15.7715 20.2812C16.1671 19.4512 15.9969 18.3547 15.6565 16.1618Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 13.5V17.5M11.5 15.5L7.5 15.5'
    }
  ],
  [
    'path',
    {
      d: 'M12.5 9.5V9C12.5 7.58579 12.5 6.87868 12.0607 6.43934C11.6213 6 10.9142 6 9.5 6V6C8.08579 6 7.37868 6 6.93934 6.43934C6.5 6.87868 6.5 7.58579 6.5 9V9.5'
    }
  ],
  [
    'path',
    {
      d: 'M11 6V3.5C11 2.67157 10.3284 2 9.5 2V2C8.67157 2 8 2.67157 8 3.5L8 6'
    }
  ],
  [
    'path',
    {
      d: 'M11 4.21885L13.7173 3.49523C15.2293 3.09261 15.9852 2.8913 16.6861 3.05968C17.3869 3.22807 17.8331 3.71821 18.7255 4.69848L19 5'
    }
  ],
  [
    'path',
    {
      d: 'M21 10.5C21 11.6046 20.25 12 19.5 12C18.75 12 18 11.6046 18 10.5C18 9.39543 19.5 8 19.5 8C19.5 8 21 9.39543 21 10.5Z'
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

HandSanitizerIcon.displayName = 'HandSanitizerIcon';
export default HandSanitizerIcon;
