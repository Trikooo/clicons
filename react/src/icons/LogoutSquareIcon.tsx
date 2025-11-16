import React from 'react';
import config from '../config';

interface LogoutSquareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LogoutSquareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/logout-square)
 * @see {@link https://clicons.dev/icon/logout-square}
 */
const LogoutSquareIcon = React.forwardRef<SVGSVGElement, LogoutSquareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5 6C14.4534 4.90658 14.3147 4.20985 13.9025 3.67376C13.7426 3.46574 13.5561 3.27954 13.3476 3.11992C12.5381 2.5 11.363 2.5 9.01286 2.5H8.51184C5.67786 2.5 4.26087 2.5 3.38046 3.37867C2.50006 4.25734 2.50004 5.67157 2.50003 8.49997L2.50002 15.5C2.50001 18.3284 2.5 19.7426 3.38042 20.6213C4.26083 21.5 5.67783 21.5 8.51184 21.5H9.01281C11.363 21.5 12.5381 21.5 13.3476 20.8801C13.556 20.7205 13.7426 20.5343 13.9025 20.3263C14.3147 19.7901 14.4534 19.0933 14.5 17.9996'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 11.9999H8.50002M18 15.5C18 15.5 21.5 12.9223 21.5 12C21.5 11.0777 18 8.5 18 8.5'
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

LogoutSquareIcon.displayName = 'LogoutSquareIcon';
export default LogoutSquareIcon;
