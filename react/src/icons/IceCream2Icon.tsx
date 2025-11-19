import React from 'react';
import config from '../config';

interface IceCream2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name IceCream2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ice-cream2)
 * @see {@link https://clicons.dev/icon/ice-cream2}
 */
const IceCream2Icon = React.forwardRef<SVGSVGElement, IceCream2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.5 12L8.32693 14.6957C9.82073 19.5652 10.5676 22 12 22C13.4324 22 14.1793 19.5652 15.6731 14.6957L16.5 12'
    }
  ],
  [
    'path',
    {
      d: 'M12 8.66667C12 9.26343 12.1647 9.82357 12.4531 10.3081M12.4531 10.3081C11.7173 11.3298 10.4825 12 9.08333 12C6.82817 12 5 10.2589 5 8.11111C5 6.22776 6.40574 4.6571 8.27244 4.2989C8.91067 2.94384 10.3396 2 12 2C14.0719 2 15.7833 3.46957 16.0479 5.37393M12.4531 10.3081C13.0544 11.3183 14.1936 12 15.5 12C17.433 12 19 10.5076 19 8.66667C19 7.00322 17.7206 5.62436 16.0479 5.37393M15.6904 7.55556C15.9423 7.05041 16.0833 6.48533 16.0833 5.88889C16.0833 5.71431 16.0713 5.54242 16.0479 5.37393'
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

IceCream2Icon.displayName = 'IceCream2Icon';
export default IceCream2Icon;
