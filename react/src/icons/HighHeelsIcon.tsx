import React from 'react';
import config from '../config';

interface HighHeelsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HighHeelsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/high-heels)
 * @see {@link https://clicons.dev/icon/high-heels}
 */
const HighHeelsIcon = React.forwardRef<SVGSVGElement, HighHeelsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 4C8.6875 5.19078 12.64 6.35832 16 5.89682'
    }
  ],
  [
    'path',
    {
      d: 'M5 6C5.7541 8.5 8.94471 9.4448 7.72525 10.6777C7.28926 11.1184 6.5883 11.5592 5.43579 12'
    }
  ],
  [
    'path',
    {
      d: 'M18 18C17.0323 18.6667 15.6894 19.8667 16.0645 22'
    }
  ],
  [
    'path',
    {
      d: 'M13 21.9683C10 21.9683 9.69937 14.6936 4.63833 11.5941C3.83539 11.1024 2.8748 10.4546 3.01345 9.37349C3.22024 7.76102 4.68698 6.14069 6.15287 5.38185C7.25347 4.81211 7.71834 3.28124 7.89533 2.44206C7.94076 2.22661 7.91253 2.06997 7.99079 2.01837C7.99141 2.01797 7.98986 2.01898 8.03882 2.01405C8.08777 2.00911 8.10475 2.01593 8.1387 2.02957C13.0252 3.99222 15.5405 3.53236 15.5789 3.72981C15.7171 4.44081 15.928 6.21675 15.353 8.89112C14.3829 13.403 15.1463 16.8054 17.2898 17.915C18.2583 18.4163 22.1303 18.9176 20.6777 20.9229C19.6916 22.2842 13 21.9683 13 21.9683Z'
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

HighHeelsIcon.displayName = 'HighHeelsIcon';
export default HighHeelsIcon;
