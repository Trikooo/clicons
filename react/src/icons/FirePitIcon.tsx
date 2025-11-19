import React from 'react';
import config from '../config';

interface FirePitIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FirePitIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/fire-pit)
 * @see {@link https://clicons.dev/icon/fire-pit}
 */
const FirePitIcon = React.forwardRef<SVGSVGElement, FirePitIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.10448 17.5C8.33359 16.5723 8.42384 15.1986 8.69771 14.3155C13.1751 16.5 13.7595 12.5 13.4229 11.5C14.9282 12.5 16.3877 15.9189 14.8371 17.5'
    }
  ],
  [
    'path',
    {
      d: 'M8.81631 17.5C5.5924 16.4286 4.76862 11.5478 6.12929 8.92857C7.12501 11.0714 8.75001 11.0714 8.75001 11.0714C7.66668 6.78571 9.83335 3.57143 14.0108 2.5C13.1918 4.001 12.5366 6.34631 14.197 7.84902C14.5485 7.18039 15.7296 5.71429 17.4167 5.71429C17.4167 5.71429 16.1196 8.01619 17.5273 10.0221C19.152 12.3372 18.736 15.7851 16.3196 17.5'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 17.5H3.5L4.1601 19.9851C4.4949 21.2455 4.84122 21.5 6.22165 21.5H17.7783C19.1588 21.5 19.5051 21.2455 19.8399 19.9851L20.5 17.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M3.55556 17.5H2.5M20.4444 17.5H21.5'
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

FirePitIcon.displayName = 'FirePitIcon';
export default FirePitIcon;
