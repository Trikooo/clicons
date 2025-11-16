import React from 'react';
import config from '../config';

interface MilkCartonIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MilkCartonIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/milk-carton)
 * @see {@link https://clicons.dev/icon/milk-carton}
 */
const MilkCartonIcon = React.forwardRef<SVGSVGElement, MilkCartonIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.17157 6.82843L7 5L8.82843 6.82843C9.40649 7.40649 9.69552 7.69552 9.84776 8.06306C10 8.4306 10 8.83935 10 9.65685V22H8C6.11438 22 5.17157 22 4.58579 21.4142C4 20.8284 4 19.8856 4 18V9.65685C4 8.83935 4 8.4306 4.15224 8.06306C4.30448 7.69552 4.59351 7.40649 5.17157 6.82843Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 5.00379V4.60429C7 3.38019 7 2.76814 7.38076 2.38786C7.76152 2.00758 8.37435 2.00758 9.6 2.00758H15.1535C15.8599 2.00758 16.7765 1.89489 17.2487 2.53866C17.7502 3.22243 17.3216 4.1621 17.5388 4.91785C17.6049 5.14763 17.7681 5.32509 17.9184 5.50519L20 8'
    }
  ],
  [
    'path',
    {
      d: 'M10 8H20V18C20 19.8856 20 20.8284 19.4142 21.4142C18.8284 22 17.8856 22 16 22H10'
    }
  ],
  [
    'path',
    {
      d: 'M10 13C10.4762 13.5 11.7434 13.4761 12.4869 13.2789C13.0054 13.1415 13.564 13.3027 13.9154 13.7639L14.6025 14.6658C14.9978 15.1846 15.5969 15.4309 16.1871 15.3173L17.0567 15.1499C17.5352 15.0578 18.011 15.2904 18.3367 15.7055C19.3522 17 20 17 20 17'
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

MilkCartonIcon.displayName = 'MilkCartonIcon';
export default MilkCartonIcon;
