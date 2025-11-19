import React from 'react';
import config from '../config';

interface HandBag2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HandBag2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hand-bag2)
 * @see {@link https://clicons.dev/icon/hand-bag2}
 */
const HandBag2Icon = React.forwardRef<SVGSVGElement, HandBag2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.9933 10.5C20.8401 12.9778 23.118 17.458 21.3419 19.8804C19.0536 23.0016 4.50551 22.3952 2.66177 19.8804C0.885738 17.458 3.15325 12.9778 4 10.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 15C13.2636 15 14.9984 17.5713 13.2796 17.8929C12.5102 18.0368 11.4776 18.0346 10.7204 17.8929C9.00158 17.5713 10.7364 15 12 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 15C5.72205 13.8047 4.61134 12.0921 4.17261 10.0698C3.98648 9.21181 3.89341 8.78282 4.19523 8.39141C4.49706 8 4.98753 8 5.96846 8H18.0315C19.0125 8 19.5029 8 19.8048 8.39141C20.1066 8.78282 20.0135 9.21181 19.8274 10.0698C19.3887 12.0921 18.278 13.8047 16.5 15'
    }
  ],
  [
    'path',
    {
      d: 'M12 15V8'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 8C7.0699 3.99202 9.316 1 12 1C14.684 1 16.9301 3.99202 17.5 8'
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

HandBag2Icon.displayName = 'HandBag2Icon';
export default HandBag2Icon;
