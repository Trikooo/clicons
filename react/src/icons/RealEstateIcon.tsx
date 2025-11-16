import React from 'react';
import config from '../config';

interface RealEstateIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RealEstateIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/real-estate)
 * @see {@link https://clicons.dev/icon/real-estate}
 */
const RealEstateIcon = React.forwardRef<SVGSVGElement, RealEstateIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21 7.4849C21 6.38738 21 5.83862 20.7239 5.37551C20.4478 4.9124 19.9392 4.608 18.9219 3.99921L17.6276 3.22461C16.0308 2.26893 15.2323 1.7911 14.6162 2.08712C14 2.38315 14 3.24459 14 4.96746V22H21V7.4849Z'
    }
  ],
  [
    'path',
    {
      d: 'M22 22H2'
    }
  ],
  [
    'path',
    {
      d: 'M14 9H10'
    }
  ],
  [
    'path',
    {
      d: 'M14 15H10'
    }
  ],
  [
    'path',
    {
      d: 'M3 7.4849C3 6.38738 3 5.83862 3.27609 5.37551C3.55219 4.9124 4.06081 4.608 5.07807 3.99921L6.37237 3.22461C7.96923 2.26893 8.76767 1.7911 9.38383 2.08712C10 2.38315 10 3.24459 10 4.96746V22H3V7.4849Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.50117 8L6.49219 8M6.50117 12H6.49219M6.50117 16H6.49219'
    }
  ],
  [
    'path',
    {
      d: 'M17.5012 8L17.4922 8M17.5012 12H17.4922M17.5012 16H17.4922'
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

RealEstateIcon.displayName = 'RealEstateIcon';
export default RealEstateIcon;
