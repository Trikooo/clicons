import React from 'react';
import config from '../config';

interface BorobudurIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BorobudurIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/borobudur)
 * @see {@link https://clicons.dev/icon/borobudur}
 */
const BorobudurIcon = React.forwardRef<SVGSVGElement, BorobudurIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 9L8.26176 7.62577C8.51935 6.27341 8.84975 6 10.2264 6H13.7736C15.1502 6 15.4806 6.27341 15.7382 7.62578L16 9'
    }
  ],
  [
    'path',
    {
      d: 'M17.8377 19H6.16228C4.855 19 4.20136 19 3.66635 19.2728C2.62687 19.8028 2.34358 20.9693 2 22H22C21.6564 20.9693 21.3731 19.8028 20.3337 19.2728C19.7986 19 19.145 19 17.8377 19Z'
    }
  ],
  [
    'path',
    {
      d: 'M9 12.5V13.5'
    }
  ],
  [
    'path',
    {
      d: 'M15 12.5V13.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 15V16'
    }
  ],
  [
    'path',
    {
      d: 'M10 6L10.8106 2.75746C10.9682 2.12724 11.1312 2 11.7808 2H12.2192C12.8688 2 13.0318 2.12724 13.1894 2.75746L14 6'
    }
  ],
  [
    'path',
    {
      d: 'M4 19C4.58059 18.2259 4.93646 16.8525 5.1479 15.3437C5.60299 12.0963 5.83053 10.4725 6.67717 9.73626C7.5238 9 8.92945 9 11.7407 9H12.2593C15.0706 9 16.4762 9 17.3228 9.73626C18.1695 10.4725 18.397 12.0963 18.8521 15.3437C19.0635 16.8525 19.4194 18.2259 20 19'
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

BorobudurIcon.displayName = 'BorobudurIcon';
export default BorobudurIcon;
