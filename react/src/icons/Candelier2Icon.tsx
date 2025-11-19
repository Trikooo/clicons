import React from 'react';
import config from '../config';

interface Candelier2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Candelier2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/candelier2)
 * @see {@link https://clicons.dev/icon/candelier2}
 */
const Candelier2Icon = React.forwardRef<SVGSVGElement, Candelier2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 3H22'
    }
  ],
  [
    'path',
    {
      d: 'M12 3V16'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 3V11'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 3V11'
    }
  ],
  [
    'path',
    {
      d: 'M4.5 11.0001C2.7846 11.0001 1.7947 13.512 2.03594 14.9903C2.24261 16.2568 6.73167 16.4143 6.96406 14.9903C7.2053 13.512 6.21541 11.0001 4.5 11.0001Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 16C10.2846 16 9.2947 18.5119 9.53594 19.9902C9.74261 21.2567 14.2317 21.4142 14.4641 19.9902C14.7053 18.5119 13.7154 16 12 16Z'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 11.0001C17.7846 11.0001 16.7947 13.512 17.0359 14.9903C17.2426 16.2568 21.7317 16.4143 21.9641 14.9903C22.2053 13.512 21.2154 11.0001 19.5 11.0001Z'
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

Candelier2Icon.displayName = 'Candelier2Icon';
export default Candelier2Icon;
