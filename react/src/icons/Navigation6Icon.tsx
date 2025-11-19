import React from 'react';
import config from '../config';

interface Navigation6IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Navigation6Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/navigation6)
 * @see {@link https://clicons.dev/icon/navigation6}
 */
const Navigation6Icon = React.forwardRef<SVGSVGElement, Navigation6IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6.73726 10.4584C9.00955 5.81947 10.1457 3.5 12 3.5C13.8543 3.5 14.9904 5.81946 17.2627 10.4584L18.8101 13.6174C20.5552 17.18 21.4277 18.9613 20.7934 19.8178C20.6228 20.0481 20.398 20.238 20.1366 20.3729C19.1643 20.8743 17.3794 19.8641 13.8096 17.8436C13.0178 17.3954 12.6219 17.1713 12.1889 17.1312C12.0633 17.1196 11.9367 17.1196 11.8111 17.1312C11.3781 17.1713 10.9822 17.3954 10.1904 17.8436C6.62059 19.8641 4.83571 20.8743 3.86337 20.3729C3.60196 20.238 3.37719 20.0481 3.20664 19.8178C2.57226 18.9613 3.44481 17.18 5.1899 13.6174L6.73726 10.4584Z'
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

Navigation6Icon.displayName = 'Navigation6Icon';
export default Navigation6Icon;
