import React from 'react';
import config from '../config';

interface SortingAZIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SortingAZIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sorting-az)
 * @see {@link https://clicons.dev/icon/sorting-az}
 */
const SortingAZIcon = React.forwardRef<SVGSVGElement, SortingAZIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.9367 2L16.417 2.45852C16.8461 2.8682 17.0606 3.07305 16.9851 3.2471C16.9096 3.42115 16.6062 3.42115 15.9993 3.42115H8.56617C5.49108 3.42115 2.88649 5.34451 2 8'
    }
  ],
  [
    'path',
    {
      d: 'M8.02139 22L7.58291 21.5792C7.15391 21.1674 6.93942 20.9616 7.01491 20.7866C7.0904 20.6117 7.39375 20.6117 8.00043 20.6117H15.432C18.5102 20.6117 21.1169 18.6739 22 16'
    }
  ],
  [
    'path',
    {
      d: 'M15 9.5H17.9474C18.5675 9.5 18.8775 9.5 18.9601 9.70009C19.0427 9.90019 18.8317 10.1402 18.4098 10.6203L15.9846 13.3797C15.5627 13.8598 15.3517 14.0998 15.4343 14.2999C15.5169 14.5 15.8269 14.5 16.447 14.5H19'
    }
  ],
  [
    'path',
    {
      d: 'M3 14.5L4.75464 10.5877C5.07987 9.86258 5.24249 9.5 5.5 9.5C5.75751 9.5 5.92013 9.86258 6.24536 10.5877L8 14.5'
    }
  ],
  [
    'path',
    {
      d: 'M11 12H12'
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

SortingAZIcon.displayName = 'SortingAZIcon';
export default SortingAZIcon;
