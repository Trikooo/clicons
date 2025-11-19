import React from 'react';
import config from '../config';

interface HackerrankIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HackerrankIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hackerrank)
 * @see {@link https://clicons.dev/icon/hackerrank}
 */
const HackerrankIcon = React.forwardRef<SVGSVGElement, HackerrankIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.1598 5.98403C18.0713 5.12444 15.9777 3.70911 12.9877 2.72647C12.5283 2.57549 12.2986 2.5 12 2.5C11.7014 2.5 11.4717 2.57549 11.0123 2.72647C8.02225 3.70911 5.92875 5.12444 4.84015 5.98403C4.45813 6.28569 4.26712 6.43652 4.08284 6.76015C3.89856 7.08378 3.86229 7.34868 3.78974 7.87849C3.65684 8.84907 3.5 10.3451 3.5 12C3.5 13.6549 3.65684 15.1509 3.78974 16.1215C3.86229 16.6513 3.89856 16.9162 4.08284 17.2398C4.26712 17.5635 4.45813 17.7143 4.84015 18.016C5.92875 18.8756 8.02225 20.2909 11.0123 21.2735C11.4717 21.4245 11.7014 21.5 12 21.5C12.2986 21.5 12.5283 21.4245 12.9877 21.2735C15.9777 20.2909 18.0713 18.8756 19.1598 18.016C19.5419 17.7143 19.7329 17.5635 19.9172 17.2398C20.1014 16.9162 20.1377 16.6513 20.2103 16.1215C20.3432 15.1509 20.5 13.6549 20.5 12C20.5 10.3451 20.3432 8.84907 20.2103 7.87849C20.1377 7.34868 20.1014 7.08378 19.9172 6.76015C19.7329 6.43652 19.5419 6.28569 19.1598 5.98403Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 8V15'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 12H14.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 16H13.5L14.5 17L15.5 16Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 8L10.5 8L9.5 7L8.5 8Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 9V16'
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

HackerrankIcon.displayName = 'HackerrankIcon';
export default HackerrankIcon;
