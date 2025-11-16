import React from 'react';
import config from '../config';

interface PizzaCutterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PizzaCutterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/pizza-cutter)
 * @see {@link https://clicons.dev/icon/pizza-cutter}
 */
const PizzaCutterIcon = React.forwardRef<SVGSVGElement, PizzaCutterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.0079 7.00648L18.0016 7.00013'
    }
  ],
  [
    'path',
    {
      d: 'M20.8284 9.82843C19.2663 11.3905 16.7337 11.3905 15.1716 9.82843C13.6095 8.26633 13.6095 5.73367 15.1716 4.17157C16.7337 2.60948 19.2663 2.60948 20.8284 4.17157C22.3905 5.73367 22.3905 8.26633 20.8284 9.82843Z'
    }
  ],
  [
    'path',
    {
      d: 'M2.83987 20.2031C3.9597 21.2656 5.77529 21.2656 6.89512 20.2031C7.48089 19.6473 7.76025 18.9108 7.7332 18.1827C7.72646 18.0014 7.78437 17.8202 7.91493 17.6963L10.661 15.0907C10.8334 14.9272 11.0887 14.8998 11.3071 14.9902C12.3445 15.4194 13.6057 15.3298 14.6155 15.105C15.1172 14.9933 15.1194 14.3649 14.672 14.1221C14.066 13.7932 13.4955 13.3832 12.978 12.8922C12.3251 12.2727 11.8081 11.5731 11.4271 10.8266C11.023 10.0349 9.85237 9.70148 9.19682 10.3235L2.83987 16.3553C1.72004 17.4178 1.72004 19.1405 2.83987 20.2031Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 8.5L11.5 10.5M16 11L13.5 13'
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

PizzaCutterIcon.displayName = 'PizzaCutterIcon';
export default PizzaCutterIcon;
