import React from 'react';
import config from '../config';

interface BedBunkIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BedBunkIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bed-bunk)
 * @see {@link https://clicons.dev/icon/bed-bunk}
 */
const BedBunkIcon = React.forwardRef<SVGSVGElement, BedBunkIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 11H17'
    }
  ],
  [
    'path',
    {
      d: 'M2 8H22'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 5C5.8956 5 5.32433 5.1287 4.81768 5.35753C4.48573 5.50746 4.31975 5.58242 4.15988 5.83005C4 6.07769 4 6.32443 4 6.8179V8H9V6.8179C9 6.32443 9 6.07769 8.84013 5.83005C8.68025 5.58242 8.51427 5.50746 8.18232 5.35753C7.67567 5.1287 7.1044 5 6.5 5Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 14C5.79893 14 5.14245 14.1732 4.57968 14.4749C4.47363 14.5317 4.4206 14.5602 4.33052 14.6414C4.20736 14.7524 4.06861 14.9842 4.02898 15.1452C4 15.2629 4 15.3595 4 15.5525C4 15.9692 4 16.1776 4.06113 16.3443C4.16232 16.6202 4.37978 16.8377 4.65572 16.9389C4.82243 17 5.03079 17 5.44751 17H7.55249C7.96921 17 8.17757 17 8.34428 16.9389C8.62022 16.8377 8.83768 16.6202 8.93887 16.3443C9 16.1776 9 15.9692 9 15.5525C9 15.3595 9 15.2629 8.97102 15.1452C8.93139 14.9842 8.79263 14.7524 8.66948 14.6414C8.5794 14.5602 8.52637 14.5317 8.42032 14.4749C7.85755 14.1732 7.20107 14 6.5 14Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 17H17'
    }
  ],
  [
    'path',
    {
      d: 'M2 20H22'
    }
  ],
  [
    'path',
    {
      d: 'M17 12L22 12'
    }
  ],
  [
    'path',
    {
      d: 'M17 16L22 16'
    }
  ],
  [
    'path',
    {
      d: 'M22 4L22 22'
    }
  ],
  [
    'path',
    {
      d: 'M17 4L17 22'
    }
  ],
  [
    'path',
    {
      d: 'M2 4L2 22'
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

BedBunkIcon.displayName = 'BedBunkIcon';
export default BedBunkIcon;
