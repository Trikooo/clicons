import React from 'react';
import config from '../config';

interface Tap7IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Tap7Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tap7)
 * @see {@link https://clicons.dev/icon/tap7}
 */
const Tap7Icon = React.forwardRef<SVGSVGElement, Tap7IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13 6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6'
    }
  ],
  [
    'path',
    {
      d: 'M10.3182 8.92095V6.36364C10.3182 5.61052 9.70766 5 8.95455 5C8.20143 5 7.59091 5.61052 7.59091 6.36364V14.2556L6.11791 12.8013C5.47161 12.1632 4.40702 12.2214 3.83605 12.9261C3.39916 13.4653 3.38709 14.228 3.80671 14.7804L6.53761 18.3753C7.15737 19.1912 7.46726 19.5991 7.84017 19.9162C8.4091 20.3999 9.09086 20.7364 9.82417 20.8956C10.3048 20.9999 10.8213 20.9999 11.8542 20.9999C13.8238 20.9999 14.8086 20.9999 15.5926 20.7028C16.7915 20.2484 17.7388 19.3131 18.199 18.1294C18.5 17.3554 18.5 16.3831 18.5 14.4385V12.2263C18.5 11.3516 17.8574 10.605 16.9807 10.4612L16.6694 10.4101C16.2 10.3331 15.7727 10.6894 15.7727 11.1578M10.3182 8.92095L10.8434 8.6625C11.0958 8.53826 11.3782 8.45807 11.6527 8.52283C12.4516 8.71133 13.0455 9.41894 13.0455 10.2631M10.3182 8.92095V11.1578M13.0455 10.2631V11.1578M13.0455 10.2631C13.0455 9.76891 13.4525 9.36832 13.9545 9.36832C14.9587 9.36832 15.7727 10.1695 15.7727 11.1578M15.7727 11.1578V12.0525'
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

Tap7Icon.displayName = 'Tap7Icon';
export default Tap7Icon;
