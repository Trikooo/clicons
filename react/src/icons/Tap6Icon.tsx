import React from 'react';
import config from '../config';

interface Tap6IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Tap6Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tap6)
 * @see {@link https://clicons.dev/icon/tap6}
 */
const Tap6Icon = React.forwardRef<SVGSVGElement, Tap6IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.50952 14.3526V6.09638C7.50952 5.27475 8.11882 4.50586 8.94199 4.50586C9.76515 4.50586 10.519 5.15854 10.519 5.98017V10.2612M10.519 10.2612L10.5104 11.437M10.519 10.2612C11.0812 8.14404 13.6712 8.95626 13.5126 10.6167C13.5097 10.6461 13.5126 11.355 13.5126 11.355M13.5126 11.355V12.4956M13.5126 11.355C13.7959 9.44431 16.935 9.39199 16.5347 12.3053M16.5347 12.3053L16.5119 12.9935M16.5347 12.3053C17.0039 10.2952 19.5697 10.7279 19.5016 12.5806V16.2679C19.4989 17.8445 19.1909 18.5983 18.3768 19.547C18.2169 19.7333 18.0613 19.926 17.9447 20.142C17.5165 20.9353 17.7129 21.1529 17.6417 21.9926M7.50952 10.4132C6.18966 11.607 5.30133 12.6969 5.03525 13.0223C4.14531 14.3745 4.37154 15.26 5.63625 17.0622C6.57744 18.4033 7.44202 19.3674 7.50815 19.4422C8.18123 20.2036 8.12175 20.7057 8.12175 22.0006'
    }
  ],
  [
    'path',
    {
      d: 'M13.0343 6C13.0343 3.79086 11.2392 2 9.02494 2C6.81065 2 5.01562 3.79086 5.01562 6'
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

Tap6Icon.displayName = 'Tap6Icon';
export default Tap6Icon;
