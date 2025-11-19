import React from 'react';
import config from '../config';

interface Napkins2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Napkins2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/napkins2)
 * @see {@link https://clicons.dev/icon/napkins2}
 */
const Napkins2Icon = React.forwardRef<SVGSVGElement, Napkins2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.129 9.93457L15.5593 6.7402C14.0063 3.5797 13.2297 1.99945 12 1.99945C10.7703 1.99945 9.99374 3.5797 8.44067 6.7402L6.87095 9.93457C6.22703 11.245 5.90506 11.9002 6.02457 12.5651C6.14407 13.2301 6.67308 13.7269 7.7311 14.7207L9.30082 16.195C10.5816 17.398 11.222 17.9995 12 17.9995C12.778 17.9995 13.4184 17.398 14.6992 16.195L16.2689 14.7207C17.3269 13.7269 17.8559 13.2301 17.9754 12.5651C18.0949 11.9002 17.773 11.245 17.129 9.93457Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.129 13.9346C17.773 15.245 18.0949 15.9002 17.9754 16.5651C17.8559 17.2301 17.3269 17.7269 16.2689 18.7207L14.6992 20.195C13.4184 21.398 12.778 21.9995 12 21.9995C11.222 21.9995 10.5816 21.398 9.30082 20.195L7.7311 18.7207C6.67308 17.7269 6.14407 17.2301 6.02457 16.5651C5.90506 15.9002 6.22703 15.245 6.87095 13.9346'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 9.5L12 14L7.5 9.5'
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

Napkins2Icon.displayName = 'Napkins2Icon';
export default Napkins2Icon;
