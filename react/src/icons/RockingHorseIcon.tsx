import React from 'react';
import config from '../config';

interface RockingHorseIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RockingHorseIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rocking-horse)
 * @see {@link https://clicons.dev/icon/rocking-horse}
 */
const RockingHorseIcon = React.forwardRef<SVGSVGElement, RockingHorseIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 17C4.45659 19.455 8.02658 21 12 21C15.9734 21 19.5434 19.455 22 17'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 17.5L18.9445 15.6852C18.0124 14.5977 17.5 13.2127 17.5 11.7805V9L18 8L21 9L22 7.5L18.5 4.5V3L17 4.5C17 4.5 14.7581 5.62096 14.1504 8.5089C13.9798 9.31958 13.3284 10 12.5 10H10.042C8.63807 10 7.5 11.1381 7.5 12.542C7.5 13.4948 7.23223 14.4284 6.72724 15.2364L4.5 18.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.5 10.5C8.5 10.5 7.86936 10.2387 7.51246 9.52492C7.15556 8.81112 6.55638 8.5 5.8541 8.5C4.83011 8.5 4 9.33011 4 10.3541V11.5858C4 12.4913 3.64029 13.3597 3 14'
    }
  ],
  [
    'path',
    {
      d: 'M19 19L16.5383 16.2306C15.5598 15.1298 14.1573 14.5 12.6846 14.5C11.002 14.5 9.42536 15.3209 8.4605 16.6993L6.5 19.5'
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

RockingHorseIcon.displayName = 'RockingHorseIcon';
export default RockingHorseIcon;
