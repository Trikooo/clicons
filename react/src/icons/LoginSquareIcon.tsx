import React from 'react';
import config from '../config';

interface LoginSquareIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LoginSquareIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/login-square)
 * @see {@link https://clicons.dev/icon/login-square}
 */
const LoginSquareIcon = React.forwardRef<SVGSVGElement, LoginSquareIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9 6C9.04665 4.90658 9.18531 4.20985 9.59747 3.67376C9.7574 3.46574 9.94396 3.27954 10.1524 3.11992C10.9619 2.5 12.137 2.5 14.4872 2.5H14.9882C17.8222 2.5 19.2391 2.5 20.1196 3.37867C21 4.25734 21 5.67157 21 8.49997L21 15.5C21 18.3284 21 19.7426 20.1196 20.6213C19.2392 21.5 17.8222 21.5 14.9882 21.5H14.4872C12.137 21.5 10.9619 21.5 10.1524 20.8801C9.94398 20.7205 9.75744 20.5343 9.59752 20.3263C9.1853 19.7901 9.04664 19.0933 9 17.9996'
    }
  ],
  [
    'path',
    {
      d: 'M15 12H3M12.5 15.5001C12.5 15.5001 16 12.9224 16 12.0001C16 11.0778 12.5 8.50011 12.5 8.50011'
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

LoginSquareIcon.displayName = 'LoginSquareIcon';
export default LoginSquareIcon;
