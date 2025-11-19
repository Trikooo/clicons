import React from 'react';
import config from '../config';

interface Doctor2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Doctor2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/doctor2)
 * @see {@link https://clicons.dev/icon/doctor2}
 */
const Doctor2Icon = React.forwardRef<SVGSVGElement, Doctor2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4 22.0002V21.0002C4 19.131 4 18.1964 4.40192 17.5002C4.66523 17.0442 5.04394 16.6655 5.5 16.4022C6.19615 16.0002 7.13077 16.0002 9 16.0002L12 20.0002L15 16.0002C16.8692 16.0002 17.8038 16.0002 18.5 16.4022C18.9561 16.6655 19.3348 17.0442 19.5981 17.5002C20 18.1964 20 19.131 20 21.0002V22.0002'
    }
  ],
  [
    'path',
    {
      d: 'M15.9374 7.99976L16.9552 3.86408C17.1882 2.91735 16.4833 2.00024 15.5228 2.00024H8.47724C7.51665 2.00024 6.81182 2.91735 7.04482 3.86407L8.06263 7.99976M15.9374 7.99976V9.99976C15.9374 12.2089 14.1745 13.9998 12 13.9998C9.82545 13.9998 8.06263 12.2089 8.06263 9.99976V7.99976M15.9374 7.99976H8.06263'
    }
  ],
  [
    'path',
    {
      d: 'M11.9998 4.00024V5.99976M12.9995 5L11 5'
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

Doctor2Icon.displayName = 'Doctor2Icon';
export default Doctor2Icon;
