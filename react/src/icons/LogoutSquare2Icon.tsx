import React from 'react';
import config from '../config';

interface LogoutSquare2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LogoutSquare2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/logout-square2)
 * @see {@link https://clicons.dev/icon/logout-square2}
 */
const LogoutSquare2Icon = React.forwardRef<SVGSVGElement, LogoutSquare2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.9999 6.99974C19.923 5.58247 19.7124 4.66414 19.1363 3.96217C18.9701 3.75963 18.7844 3.57392 18.5819 3.4077C17.4755 2.49974 15.8318 2.49974 12.5443 2.49974L11.9999 2.4999C8.22871 2.4999 6.34309 2.4999 5.17152 3.67147C3.99994 4.84305 3.99994 6.72866 3.99994 10.4999V13.4999C3.99994 17.2711 3.99994 19.1568 5.17152 20.3283C6.34309 21.4999 8.22871 21.4999 11.9999 21.4999L12.5443 21.4997C15.8318 21.4997 17.4755 21.4997 18.5819 20.5918C18.7844 20.4256 18.9701 20.2399 19.1363 20.0373C19.7124 19.3353 19.923 18.417 19.9999 16.9997'
    }
  ],
  [
    'path',
    {
      d: 'M16 7.99991C16 7.99991 20 10.9459 20 11.9999C20 13.054 16 15.9999 16 15.9999M19.5 11.9999H9'
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

LogoutSquare2Icon.displayName = 'LogoutSquare2Icon';
export default LogoutSquare2Icon;
