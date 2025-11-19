import React from 'react';
import config from '../config';

interface CastboxIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CastboxIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/castbox)
 * @see {@link https://clicons.dev/icon/castbox}
 */
const CastboxIcon = React.forwardRef<SVGSVGElement, CastboxIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.5273 5.54369L12.931 2.25342C12.6488 2.08749 12.3274 2 12 2C11.6726 2 11.3512 2.08749 11.069 2.25342L5.47268 5.54369C4.50957 6.10994 4.02802 6.39307 3.76401 6.85455C3.5 7.31603 3.5 7.87465 3.5 8.99188V15.0081C3.5 16.1254 3.5 16.684 3.76401 17.1455C4.02802 17.6069 4.50957 17.8901 5.47268 18.4563L11.069 21.7466C11.3512 21.9125 11.6726 22 12 22C12.3274 22 12.6488 21.9125 12.931 21.7466L18.5273 18.4563C19.4904 17.8901 19.972 17.6069 20.236 17.1455C20.5 16.684 20.5 16.1254 20.5 15.0081V8.99188C20.5 7.87465 20.5 7.31603 20.236 6.85455C19.972 6.39307 19.4904 6.10994 18.5273 5.54369Z'
    }
  ],
  [
    'path',
    {
      d: 'M17 12.5V13.5M15 11.5V14M13 14.5V10M11 9.5V14M9 10.5V15.5M7 11.5V13.5M9.5 12H10.5M11.5 12.5H12.5M7.5 12.5H8.5'
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

CastboxIcon.displayName = 'CastboxIcon';
export default CastboxIcon;
