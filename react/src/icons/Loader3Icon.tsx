import React from 'react';
import config from '../config';

interface Loader3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Loader3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/loader3)
 * @see {@link https://clicons.dev/icon/loader3}
 */
const Loader3Icon = React.forwardRef<SVGSVGElement, Loader3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 12C22 13.3261 21.4732 14.5979 20.5355 15.5355C19.5979 16.4732 18.3261 17 17 17C15.6739 17 14.4021 16.4732 13.4645 15.5355C12.5268 14.5979 12 13.3261 12 12C12 10.6739 11.4732 9.40215 10.5355 8.46447C9.59785 7.52678 8.32608 7 7 7C5.67392 7 4.40215 7.52678 3.46447 8.46447C2.52678 9.40215 2 10.6739 2 12'
    }
  ],
  [
    'path',
    {
      d: 'M7.00002 20.7C5.84633 20.037 5.00328 18.9428 4.65634 17.6582C4.3094 16.3735 4.48698 15.0037 5.15002 13.85C5.81306 12.6963 6.90725 11.8533 8.19187 11.5063C9.4765 11.1594 10.8463 11.337 12 12C12.5647 12.3283 13.1885 12.5422 13.8359 12.6294C14.4832 12.7166 15.1414 12.6755 15.7728 12.5084C16.4043 12.3412 16.9966 12.0513 17.516 11.6553C18.0354 11.2592 18.4717 10.7647 18.8 10.2C19.1283 9.63534 19.3422 9.01152 19.4294 8.36418C19.5166 7.71685 19.4755 7.05867 19.3083 6.42723C19.1412 5.79579 18.8513 5.20346 18.4553 4.68405C18.0592 4.16464 17.5647 3.72833 17 3.40002'
    }
  ],
  [
    'path',
    {
      d: 'M7 3.30004C8.14043 2.637 9.49754 2.45415 10.7728 2.79172C12.048 3.12928 13.137 3.95961 13.8 5.10004C14.463 6.24047 14.6459 7.59759 14.3083 8.87284C13.9708 10.1481 13.1404 11.237 12 11.9C10.8596 12.5631 10.0292 13.652 9.69167 14.9273C9.35411 16.2025 9.53696 17.5596 10.2 18.7C10.863 19.8405 11.952 20.6708 13.2272 21.0084C14.5025 21.3459 15.8596 21.1631 17 20.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
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

Loader3Icon.displayName = 'Loader3Icon';
export default Loader3Icon;
