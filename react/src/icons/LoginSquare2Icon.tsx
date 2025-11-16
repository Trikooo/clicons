import React from 'react';
import config from '../config';

interface LoginSquare2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LoginSquare2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/login-square2)
 * @see {@link https://clicons.dev/icon/login-square2}
 */
const LoginSquare2Icon = React.forwardRef<SVGSVGElement, LoginSquare2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.9999 6.99976C19.923 5.58248 19.7124 4.66416 19.1363 3.96219C18.9701 3.75965 18.7844 3.57394 18.5819 3.40772C17.4755 2.49976 15.8318 2.49976 12.5443 2.49976L11.9999 2.49992C8.22871 2.49992 6.34309 2.49992 5.17152 3.67149C3.99994 4.84307 3.99994 6.72868 3.99994 10.4999V13.4999C3.99994 17.2712 3.99994 19.1568 5.17152 20.3283C6.34309 21.4999 8.22871 21.4999 11.9999 21.4999L12.5443 21.4998C15.8318 21.4998 17.4755 21.4998 18.5819 20.5918C18.7844 20.4256 18.9701 20.2399 19.1363 20.0373C19.7124 19.3354 19.923 18.417 19.9999 16.9998'
    }
  ],
  [
    'path',
    {
      d: 'M13 7.99992C13 7.99992 9.00001 10.9459 9 12C8.99999 13.054 13 15.9999 13 15.9999M9.5 12H20'
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

LoginSquare2Icon.displayName = 'LoginSquare2Icon';
export default LoginSquare2Icon;
