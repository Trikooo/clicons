import React from 'react';
import config from '../config';

interface SlidersVerticalIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SlidersVerticalIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sliders-vertical)
 * @see {@link https://clicons.dev/icon/sliders-vertical}
 */
const SlidersVerticalIcon = React.forwardRef<SVGSVGElement, SlidersVerticalIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.00018 20.0001L4.99994 14.0001'
    }
  ],
  [
    'path',
    {
      d: 'M4.99994 11.0001V4.00006'
    }
  ],
  [
    'path',
    {
      d: 'M8.99994 8.00006H14.9999'
    }
  ],
  [
    'path',
    {
      d: 'M1.99994 14.0001H7.99994'
    }
  ],
  [
    'path',
    {
      d: 'M15.9999 12.0001H21.9999'
    }
  ],
  [
    'path',
    {
      d: 'M11.9997 8.00006L11.9999 4.00006'
    }
  ],
  [
    'path',
    {
      d: 'M12.0002 20.0001L11.9999 11.0001'
    }
  ],
  [
    'path',
    {
      d: 'M18.9999 12.0001L18.9999 4.00006'
    }
  ],
  [
    'path',
    {
      d: 'M19.0002 20.0001L18.9999 15.0001'
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

SlidersVerticalIcon.displayName = 'SlidersVerticalIcon';
export default SlidersVerticalIcon;
