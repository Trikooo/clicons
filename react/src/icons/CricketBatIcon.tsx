import React from 'react';
import config from '../config';

interface CricketBatIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CricketBatIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cricket-bat)
 * @see {@link https://clicons.dev/icon/cricket-bat}
 */
const CricketBatIcon = React.forwardRef<SVGSVGElement, CricketBatIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 14.4733C7 14.9338 7 15.1641 7.08576 15.3711C7.17152 15.5782 7.33434 15.741 7.65998 16.0666L7.93335 16.34C8.25899 16.6657 8.42181 16.8285 8.62886 16.9142C8.83591 17 9.06617 17 9.52669 17H10.38C11.0708 17 11.4162 17 11.7267 16.8714C12.0373 16.7427 12.2815 16.4985 12.77 16.01L20.5434 8.23666C21.2858 7.49425 21.657 7.12305 21.8285 6.70896C22.0572 6.15683 22.0572 5.53647 21.8285 4.98435C21.657 4.57025 21.2858 4.19905 20.5434 3.45665C19.8009 2.71425 19.4297 2.34305 19.0157 2.17152C18.4635 1.94283 17.8432 1.94283 17.291 2.17152C16.8769 2.34305 16.5057 2.71425 15.7633 3.45665L7.98997 11.23C7.50151 11.7185 7.25728 11.9627 7.12864 12.2733C7 12.5838 7 12.9292 7 13.62V14.4733Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.92517 15L2.42971 19.4955C1.85676 20.0684 1.85676 20.9973 2.42971 21.5703C3.00266 22.1432 3.93159 22.1432 4.50454 21.5703L9 17.0748'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 20L4 17.5'
    }
  ],
  [
    'circle',
    {
      cx: '2.5',
      cy: '2.5',
      r: '2.5',
      transform: 'matrix(-1 0 0 1 21 16)'
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

CricketBatIcon.displayName = 'CricketBatIcon';
export default CricketBatIcon;
