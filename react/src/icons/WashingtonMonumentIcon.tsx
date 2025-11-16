import React from 'react';
import config from '../config';

interface WashingtonMonumentIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WashingtonMonumentIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/washington-monument)
 * @see {@link https://clicons.dev/icon/washington-monument}
 */
const WashingtonMonumentIcon = React.forwardRef<SVGSVGElement, WashingtonMonumentIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 19L8.76762 6.62668C8.88311 5.81824 8.94085 5.41402 9.10135 5.04395C9.26184 4.67389 9.51749 4.35549 10.0288 3.71871L10.5858 3.02497C11.2524 2.34166 11.5858 2 12 2C12.4142 2 12.7475 2.34166 13.4142 3.02497L13.9712 3.71871C14.4825 4.35549 14.7382 4.67389 14.8987 5.04395C15.0591 5.41402 15.1169 5.81825 15.2324 6.62668L17 19'
    }
  ],
  [
    'path',
    {
      d: 'M3 22H21'
    }
  ],
  [
    'path',
    {
      d: 'M20 22L19.7812 21.6718C18.9093 20.3639 18.4733 19.71 17.81 19.355C17.1467 19 16.3608 19 14.7889 19H9.2111C7.63921 19 6.85326 19 6.18998 19.355C5.5267 19.71 5.09073 20.3639 4.2188 21.6718L4 22'
    }
  ],
  [
    'path',
    {
      d: 'M9 6H15'
    }
  ],
  [
    'path',
    {
      d: 'M12 19L12 13'
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

WashingtonMonumentIcon.displayName = 'WashingtonMonumentIcon';
export default WashingtonMonumentIcon;
