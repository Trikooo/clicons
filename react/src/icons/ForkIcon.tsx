import React from 'react';
import config from '../config';

interface ForkIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ForkIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/fork)
 * @see {@link https://clicons.dev/icon/fork}
 */
const ForkIcon = React.forwardRef<SVGSVGElement, ForkIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 5L15.5 8.5M13.5 6.5L17.5 10.5'
    }
  ],
  [
    'path',
    {
      d: 'M22 6.68722L17.7971 10.8898C16.9852 11.7016 15.8891 12.1657 14.741 12.1836L14.3982 12.1889C13.7949 12.1983 13.2213 12.4527 12.8093 12.8935L4.77175 21.4921C4.15326 22.1537 3.10957 22.1713 2.46911 21.5309C1.82872 20.8906 1.84625 19.8471 2.50778 19.2287L11.106 11.1901C11.5467 10.7781 11.8009 10.2047 11.8103 9.60146L11.8157 9.25855C11.8335 8.11046 12.2976 7.01438 13.1096 6.20246L17.3124 2'
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

ForkIcon.displayName = 'ForkIcon';
export default ForkIcon;
