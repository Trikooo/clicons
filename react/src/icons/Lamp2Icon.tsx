import React from 'react';
import config from '../config';

interface Lamp2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Lamp2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/lamp2)
 * @see {@link https://clicons.dev/icon/lamp2}
 */
const Lamp2Icon = React.forwardRef<SVGSVGElement, Lamp2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.9244 12.102C20.3882 11.4385 18.588 9.20647 18.0742 8.81246C17.6051 8.45281 17 8.27446 15.7896 7.91776C14.5811 7.56161 13.2866 7 12 7C10.7134 7 9.41894 7.56161 8.21043 7.91776C7.00005 8.27446 6.39486 8.45281 5.92582 8.81246C5.41197 9.20647 3.61181 11.4385 4.07564 12.102C4.96428 13.3732 19.1407 13.2231 19.9244 12.102Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.9999 13C8.9999 14.6569 10.343 16 11.9999 16C13.6568 16 14.9999 14.6569 14.9999 13'
    }
  ],
  [
    'path',
    {
      d: 'M12.0001 20V22M14.9999 19L16.9999 20.4999M8.9999 19L6.9999 20.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.9999 7V2'
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

Lamp2Icon.displayName = 'Lamp2Icon';
export default Lamp2Icon;
