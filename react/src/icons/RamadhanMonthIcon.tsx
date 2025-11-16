import React from 'react';
import config from '../config';

interface RamadhanMonthIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RamadhanMonthIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ramadhan-month)
 * @see {@link https://clicons.dev/icon/ramadhan-month}
 */
const RamadhanMonthIcon = React.forwardRef<SVGSVGElement, RamadhanMonthIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.5 2V4M6.5 2V4'
    }
  ],
  [
    'path',
    {
      d: 'M3 12.2432C3 7.88594 3 5.70728 4.25212 4.35364C5.50424 3 7.51949 3 11.55 3H13.45C17.4805 3 19.4958 3 20.7479 4.35364C22 5.70728 22 7.88594 22 12.2432V12.7568C22 17.1141 22 19.2927 20.7479 20.6464C19.4958 22 17.4805 22 13.45 22H11.55C7.51949 22 5.50424 22 4.25212 20.6464C3 19.2927 3 17.1141 3 12.7568V12.2432Z'
    }
  ],
  [
    'path',
    {
      d: 'M3.5 8H21.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 16.4343C14.9347 17.3725 13.906 18 12.7308 18C10.9465 18 9.5 16.5535 9.5 14.7692C9.5 13.594 10.1275 12.5653 11.0657 12'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 13H14.509'
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

RamadhanMonthIcon.displayName = 'RamadhanMonthIcon';
export default RamadhanMonthIcon;
