import React from 'react';
import config from '../config';

interface ToiletIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ToiletIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/toilet)
 * @see {@link https://clicons.dev/icon/toilet}
 */
const ToiletIcon = React.forwardRef<SVGSVGElement, ToiletIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 11H17.1351C18.6001 11 19.3326 11 19.7749 11.7353C20.2172 12.4706 19.9567 12.9393 19.4357 13.8769C18.4017 15.738 16.3955 17 14.0901 17C12.5456 17 11.1353 16.4335 10.0618 15.5'
    }
  ],
  [
    'path',
    {
      d: 'M8 11V4C8 3.05719 8 2.58579 7.70711 2.29289C7.41421 2 6.94281 2 6 2C5.05719 2 4.58579 2 4.29289 2.29289C4 2.58579 4 3.05719 4 4V11C4 11.9428 4 12.4142 4.29289 12.7071C4.58579 13 5.05719 13 6 13C6.94281 13 7.41421 13 7.70711 12.7071C8 12.4142 8 11.9428 8 11Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 7L10 7'
    }
  ],
  [
    'path',
    {
      d: 'M16 17C15 18 16 21 17.9996 22H4C5 21 6.7 17.8 5.5 13'
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

ToiletIcon.displayName = 'ToiletIcon';
export default ToiletIcon;
