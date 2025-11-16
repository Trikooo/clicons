import React from 'react';
import config from '../config';

interface FinsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FinsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/fins)
 * @see {@link https://clicons.dev/icon/fins}
 */
const FinsIcon = React.forwardRef<SVGSVGElement, FinsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.4711 19.9634C10.8851 15.8356 11.4912 7.3524 10.6271 3.69484L9 4.5C9 4.5 7.76992 3 6.49953 3C5.22914 3 4 4.5 4 4.5L2.3727 3.69484C1.5086 7.35252 2.11482 15.8358 4.52945 19.9634C5.33792 21.3455 7.66279 21.3456 8.4711 19.9634Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.5289 4.03657C13.1149 8.1644 12.5088 16.6476 13.3729 20.3052L15 19.5C15 19.5 16.2301 21 17.5005 21C18.7709 21 20 19.5 20 19.5L21.6273 20.3052C22.4914 16.6475 21.8852 8.16425 19.4706 4.03657C18.6621 2.65454 16.3372 2.6544 15.5289 4.03657Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 17V16'
    }
  ],
  [
    'path',
    {
      d: 'M17.5 8V7'
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

FinsIcon.displayName = 'FinsIcon';
export default FinsIcon;
