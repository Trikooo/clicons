import React from 'react';
import config from '../config';

interface FingerPrintMinusIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FingerPrintMinusIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/finger-print-minus)
 * @see {@link https://clicons.dev/icon/finger-print-minus}
 */
const FingerPrintMinusIcon = React.forwardRef<SVGSVGElement, FingerPrintMinusIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.92857 20.6058C3.85602 19.1977 2.5 16.8583 2.5 14.2103V9.75757C2.5 8.57285 2.77144 7.44988 3.25704 6.44444M9.35714 21.9236C10.2589 22.0493 11.1494 22.0167 12 21.8493M17.7301 6.41803C15.636 2.12432 9.89955 0.664089 5.92857 3.36201M18.5 10.3333V11.5M10.5 6C12.7091 6 14.5 7.8804 14.5 10.2M6.88493 8.4C6.63811 8.94555 6.5 9.55584 6.5 10.2V13.8C6.5 16.1196 8.29086 18 10.5 18C10.6693 18 10.8362 17.989 11 17.9675M10.5 10.5V13.5'
    }
  ],
  [
    'path',
    {
      d: 'M18.8333 18H16.1667M21.5 18C21.5 20.2091 19.7091 22 17.5 22C15.2909 22 13.5 20.2091 13.5 18C13.5 15.7909 15.2909 14 17.5 14C19.7091 14 21.5 15.7909 21.5 18Z'
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

FingerPrintMinusIcon.displayName = 'FingerPrintMinusIcon';
export default FingerPrintMinusIcon;
