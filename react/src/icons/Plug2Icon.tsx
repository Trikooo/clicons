import React from 'react';
import config from '../config';

interface Plug2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Plug2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/plug2)
 * @see {@link https://clicons.dev/icon/plug2}
 */
const Plug2Icon = React.forwardRef<SVGSVGElement, Plug2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14 8V11M10 11V8'
    }
  ],
  [
    'path',
    {
      d: 'M8.00297 12.0267C7.95812 11.4726 8.42638 11 9.02009 11H14.9799C15.5736 11 16.0419 11.4726 15.997 12.0267L15.8745 13.5403C15.7864 14.6285 15.4008 15.6771 14.7546 16.5856L14.3541 17.1487C13.9759 17.6805 13.3385 18 12.6558 18H11.3442C10.6615 18 10.0241 17.6805 9.64588 17.1487L9.24535 16.5856C8.59923 15.6771 8.2136 14.6285 8.12551 13.5403L8.00297 12.0267Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 21.2109C19.5318 19.6644 22 16.1323 22 12.0224C22 6.4872 17.5228 2 12 2C6.47715 2 2 6.4872 2 12.0224C2 17.2199 5.94741 21.4933 11.0014 21.9955C11.551 22.0501 12 21.5962 12 21.0426V18.0359'
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

Plug2Icon.displayName = 'Plug2Icon';
export default Plug2Icon;
