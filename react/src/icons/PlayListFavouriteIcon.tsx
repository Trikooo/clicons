import React from 'react';
import config from '../config';

interface PlayListFavouriteIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PlayListFavouriteIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/play-list-favourite)
 * @see {@link https://clicons.dev/icon/play-list-favourite}
 */
const PlayListFavouriteIcon = React.forwardRef<SVGSVGElement, PlayListFavouriteIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M20.9977 12C21 11.5299 21 12.0307 21 11.5C21 7.02166 21 4.78249 19.6088 3.39124C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.39124C2 4.78249 2 7.02166 2 11.5C2 15.9783 2 18.2175 3.39124 19.6088C4.78249 21 7.02166 21 11.5 21C11.6699 21 11.8365 21 12 20.9999'
    }
  ],
  [
    'path',
    {
      d: 'M2 7H21'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 2L13.5 7'
    }
  ],
  [
    'path',
    {
      d: 'M9.5 2L6.5 7'
    }
  ],
  [
    'path',
    {
      d: 'M15.015 15.3866C16.0876 14.7469 17.0238 15.0047 17.5863 15.4153C17.8169 15.5837 17.9322 15.6679 18 15.6679C18.0678 15.6679 18.1831 15.5837 18.4137 15.4153C18.9762 15.0047 19.9124 14.7469 20.985 15.3866C22.3928 16.2261 22.7113 18.9958 19.4642 21.3324C18.8457 21.7775 18.5365 22 18 22C17.4635 22 17.1543 21.7775 16.5358 21.3324C13.2887 18.9958 13.6072 16.2261 15.015 15.3866Z'
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

PlayListFavouriteIcon.displayName = 'PlayListFavouriteIcon';
export default PlayListFavouriteIcon;
