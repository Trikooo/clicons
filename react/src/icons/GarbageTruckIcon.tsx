import React from 'react';
import config from '../config';

interface GarbageTruckIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GarbageTruckIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/garbage-truck)
 * @see {@link https://clicons.dev/icon/garbage-truck}
 */
const GarbageTruckIcon = React.forwardRef<SVGSVGElement, GarbageTruckIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'circle',
    {
      cx: '17',
      cy: '18',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '7',
      cy: '18',
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M11 9V12'
    }
  ],
  [
    'path',
    {
      d: 'M7 10V12'
    }
  ],
  [
    'path',
    {
      d: 'M17 4H15M15 4H9.48528C8.25903 4 7.6459 4 7.09459 4.22836C6.54328 4.45672 6.10973 4.89027 5.24264 5.75736L3.46446 7.53554C2.74189 8.25811 2.3806 8.6194 2.1903 9.07883C2 9.53825 2 10.0492 2 11.0711V13C2 15.357 2 16.5355 2.73223 17.2678C3.2191 17.7546 3.90328 17.9178 5 17.9724M15 4V8C15 9.88562 15 10.8284 15.5858 11.4142C16.1716 12 17.1144 12 19 12H22V13C22 15.357 22 16.5355 21.2678 17.2678C20.7809 17.7546 20.0967 17.9178 19 17.9724M9 18H15'
    }
  ],
  [
    'path',
    {
      d: 'M15 7H16.6998C18.0581 7 18.7373 7 19.29 7.35371C19.8427 7.70742 20.1647 8.34811 20.8087 9.6295L22 12'
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

GarbageTruckIcon.displayName = 'GarbageTruckIcon';
export default GarbageTruckIcon;
