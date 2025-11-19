import React from 'react';
import config from '../config';

interface ElectricPlugsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ElectricPlugsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/electric-plugs)
 * @see {@link https://clicons.dev/icon/electric-plugs}
 */
const ElectricPlugsIcon = React.forwardRef<SVGSVGElement, ElectricPlugsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M9 2L9 5'
    }
  ],
  [
    'path',
    {
      d: 'M15 2L15 5'
    }
  ],
  [
    'path',
    {
      d: 'M12 18L12 22'
    }
  ],
  [
    'path',
    {
      d: 'M12.6939 8.5L10.6029 10.6749C10.3788 10.9079 10.5394 11.2433 10.9048 11.3053L13.0952 11.6773C13.4848 11.7434 13.6334 12.1147 13.361 12.3413L10.7666 14.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.3066 5L9.69342 5C7.5551 5 6.48594 5 5.89527 5.69774C5.3046 6.39548 5.46717 7.46639 5.79232 9.60823L6.31604 13.0581C6.83606 16.4836 8.28588 18 12 18C15.7141 18 17.1639 16.4836 17.684 13.0581L18.2077 9.60823C18.5328 7.46639 18.6954 6.39548 18.1047 5.69774C17.5141 5 16.4449 5 14.3066 5Z'
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

ElectricPlugsIcon.displayName = 'ElectricPlugsIcon';
export default ElectricPlugsIcon;
