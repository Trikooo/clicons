import React from 'react';
import config from '../config';

interface Joystick4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Joystick4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/joystick4)
 * @see {@link https://clicons.dev/icon/joystick4}
 */
const Joystick4Icon = React.forwardRef<SVGSVGElement, Joystick4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9.32486 12C9.15779 12.0809 8.98076 12.1675 8.79195 12.2599L7.26844 13.0053C5.75615 13.7452 5 14.1152 5 14.575C5 15.0347 5.75615 15.4047 7.26844 16.1446L8.79195 16.8901C10.3042 17.63 11.0604 18 12 18C12.9396 18 13.6958 17.63 15.2081 16.8901L16.7316 16.1446C18.2439 15.4047 19 15.0347 19 14.575C19 14.1152 18.2439 13.7452 16.7316 13.0053L15.2081 12.2599C15.0192 12.1675 14.8422 12.0809 14.6751 12'
    }
  ],
  [
    'path',
    {
      d: 'M19 14.5V18.2667C19 18.7678 18.2439 19.1711 16.7316 19.9776L15.2081 20.7902C13.6958 21.5967 12.9396 22 12 22C11.0604 22 10.3042 21.5967 8.79195 20.7902L7.26844 19.9776C5.75615 19.1711 5 18.7678 5 18.2667V14.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 5.5C15.5 7.433 13.933 9 12 9C10.067 9 8.5 7.433 8.5 5.5C8.5 3.567 10.067 2 12 2C13.933 2 15.5 3.567 15.5 5.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 9V14.5'
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

Joystick4Icon.displayName = 'Joystick4Icon';
export default Joystick4Icon;
