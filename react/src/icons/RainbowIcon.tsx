import React from 'react';
import config from '../config';

interface RainbowIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RainbowIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rainbow)
 * @see {@link https://clicons.dev/icon/rainbow}
 */
const RainbowIcon = React.forwardRef<SVGSVGElement, RainbowIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 15V12C2 7.58172 5.58172 4 10 4C13.3574 4 16.3229 6.06817 17.5 9'
    }
  ],
  [
    'path',
    {
      d: 'M5 15V12C5 9.23858 7.23858 7 10 7C11.8507 7 13.6488 8.0055 14.5 9.5'
    }
  ],
  [
    'path',
    {
      d: 'M8 15V12C8 10.8954 8.89543 10 10 10C10.9319 10 11.778 10.6374 12 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M19.5127 15.2C19.5168 15.2 19.5209 15.2 19.525 15.2C20.8919 15.2 22 16.2745 22 17.6C22 18.9255 20.8919 20 19.525 20H13.75C12.2312 20 11 18.8061 11 17.3333C11 15.9469 12.0912 14.8075 13.4862 14.6788M19.5127 15.2C19.5208 15.1122 19.525 15.0232 19.525 14.9333C19.525 13.3133 18.1707 12 16.5 12C14.9178 12 13.6193 13.1779 13.4862 14.6788M19.5127 15.2C19.4564 15.8051 19.2107 16.3571 18.8336 16.8M13.4862 14.6788C13.573 14.6708 13.661 14.6667 13.75 14.6667C14.3692 14.6667 14.9406 14.8651 15.4003 15.2'
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

RainbowIcon.displayName = 'RainbowIcon';
export default RainbowIcon;
