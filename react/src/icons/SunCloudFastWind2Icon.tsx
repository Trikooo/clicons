import React from 'react';
import config from '../config';

interface SunCloudFastWind2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SunCloudFastWind2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sun-cloud-fast-wind2)
 * @see {@link https://clicons.dev/icon/sun-cloud-fast-wind2}
 */
const SunCloudFastWind2Icon = React.forwardRef<SVGSVGElement, SunCloudFastWind2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.11137 8.39442C2.44471 5.97492 3.92123 3.48798 6.40926 2.83967M3.11137 8.39442L2.24792 8.61941M3.11137 8.39442C3.27715 8.99608 3.55985 9.53692 3.92933 10M6.40926 2.83967L6.17789 2M6.40926 2.83967C8.24797 2.36056 10.1246 3.01972 11.2479 4.37299M3.57677 4.95375L2.66588 4.44113M10.4745 2.40645L9.94923 3.29328'
    }
  ],
  [
    'path',
    {
      d: 'M14.4018 21.9146C14.5461 21.9699 14.7015 22 14.8633 22C15.628 22 16.2479 21.3284 16.2479 20.5C16.2479 19.6716 15.628 19 14.8633 19C14.5918 19 14.3386 19.0846 14.1249 19.2309C13.0637 20.0225 11.0979 21.0378 8.86327 21.301M6.09406 21.1936C5.47584 21.0635 4.85659 20.8541 4.24792 20.5478'
    }
  ],
  [
    'path',
    {
      d: 'M19.2479 21C19.506 21 20.2036 21 21.2479 21'
    }
  ],
  [
    'path',
    {
      d: 'M17.4619 9.81274C17.4693 9.8127 17.4768 9.81269 17.4843 9.81269C19.9696 9.81269 21.752 11.7 21.752 13.8C21.728 16.62 18.968 17.88 17.468 17.772M17.4619 9.81274C17.4767 9.65635 17.4843 9.49797 17.4843 9.33791C17.4619 6.66869 15.1077 4.5 12.308 4.5C9.50839 4.5 7.26802 6.42 7.06483 8.94M17.4619 9.81274C17.288 10.92 16.988 11.616 16.268 12.48M7.06483 8.94C4.52839 9.16919 2.76802 11.1 2.74402 13.38C2.88802 15.84 4.62802 16.8439 5.94802 17.4C9.30802 18.72 12.8 17.76 14 15.84C14.468 14.76 13.688 13.56 12.608 13.38C11.888 13.2 10.394 13.608 10.352 15.12M7.06483 8.94C7.22267 8.92574 7.41906 8.91844 7.58083 8.91844C8.70802 8.94 9.63202 9.324 10.352 9.804'
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

SunCloudFastWind2Icon.displayName = 'SunCloudFastWind2Icon';
export default SunCloudFastWind2Icon;
