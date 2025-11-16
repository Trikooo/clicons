import React from 'react';
import config from '../config';

interface MilkBottleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MilkBottleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/milk-bottle)
 * @see {@link https://clicons.dev/icon/milk-bottle}
 */
const MilkBottleIcon = React.forwardRef<SVGSVGElement, MilkBottleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.7273 5C15.631 5 16.3636 4.32843 16.3636 3.5C16.3636 2.67157 15.631 2 14.7273 2H9.27273C8.36899 2 7.63636 2.67157 7.63636 3.5C7.63636 4.32843 8.36899 5 9.27273 5M15.2459 4.92311C16.8664 7.89408 18 10.3773 18 13.7771V18C18 21.3093 17.2465 22 13.6364 22H10.3636C6.75345 22 6 21.3093 6 18V13.7771C6 10.3773 7.10674 7.88562 8.72727 4.91465'
    }
  ],
  [
    'path',
    {
      d: 'M6 12C6.57143 12.5 8.09206 12.4761 8.98433 12.2789C9.60646 12.1415 10.2768 12.3027 10.6984 12.7639L11.523 13.6658C11.9973 14.1846 12.7163 14.4309 13.4245 14.3173L14.4681 14.1499C15.0422 14.0578 15.6132 14.2904 16.004 14.7055C17.2226 16 18 16 18 16'
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

MilkBottleIcon.displayName = 'MilkBottleIcon';
export default MilkBottleIcon;
