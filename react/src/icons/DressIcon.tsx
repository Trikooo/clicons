import React from 'react';
import config from '../config';

interface DressIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DressIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/dress)
 * @see {@link https://clicons.dev/icon/dress}
 */
const DressIcon = React.forwardRef<SVGSVGElement, DressIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.61 2.1479L7.80042 2.10885C8.28808 2.00885 8.53191 1.95884 8.6895 2.04202C8.84709 2.1252 8.97976 2.43749 9.24511 3.06207C9.72042 4.18086 10.8245 4.96673 12 4.96673C13.1755 4.96673 14.2796 4.18086 14.7549 3.06207C15.0202 2.43749 15.1529 2.1252 15.3105 2.04202C15.4681 1.95884 15.7119 2.00885 16.1996 2.10885L16.39 2.1479C17.6491 2.37803 17.6688 2.3895 18.5326 3.39285C19.2624 4.2406 20.3084 5.10689 20.8298 6.1272C21.2138 6.87865 20.8865 7.52289 20.4556 8.11988C19.9173 8.86555 19.2184 9.58171 18.272 9.00152C17.6678 8.63104 17.1859 7.84916 16.7173 7.30825C16.7173 7.30825 17 10.9246 16 11.9315C16.9077 12.5863 18.3424 13.858 19.4805 16.4642C19.8862 17.3933 20.4317 18.4519 19.8937 19.4437C18.0646 22.8154 5.97514 22.8887 4.10625 19.4437C3.56824 18.452 4.11378 17.3933 4.51948 16.4642C5.65756 13.858 7.0923 12.5863 8 11.9315C7 10.9246 7.2827 7.30825 7.2827 7.30825C6.81411 7.84916 6.33223 8.63104 5.72796 9.00152C4.78163 9.58171 4.08274 8.86554 3.54444 8.11988C3.11346 7.52289 2.78615 6.87864 3.17016 6.1272C3.69156 5.10689 4.73757 4.2406 5.46741 3.39285C6.33123 2.38948 6.35093 2.37803 7.61 2.1479Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 12H16'
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

DressIcon.displayName = 'DressIcon';
export default DressIcon;
