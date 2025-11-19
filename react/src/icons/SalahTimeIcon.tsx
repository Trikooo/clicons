import React from 'react';
import config from '../config';

interface SalahTimeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SalahTimeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/salah-time)
 * @see {@link https://clicons.dev/icon/salah-time}
 */
const SalahTimeIcon = React.forwardRef<SVGSVGElement, SalahTimeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.5092 5.00159C14.2435 3.18742 11.8856 2.00044 9.50543 2.00044C5.63698 2.00044 2.50098 5.13565 2.50098 9.00311C2.50098 12.7024 5.37016 15.7493 9.00511 16.0058'
    }
  ],
  [
    'path',
    {
      d: 'M9.50486 7.00244V9.5034L8.00391 10.5038'
    }
  ],
  [
    'path',
    {
      d: 'M13.1148 15.5486C11.7537 13.8925 11.5215 12.2295 13.469 10.2102C15.5149 8.38506 16.6931 7.52188 17.007 7.00244C17.3209 7.52188 18.5182 8.38506 20.5641 10.2102C22.4183 11.8643 22.3017 13.8925 20.9405 15.5486M13.1148 15.5486H12.5923M13.1148 15.5486H20.9405M20.9405 15.5486H21.4009M11.5215 15.5486H12.5923M12.5923 15.5486V21.0934C12.6323 21.7611 12.5923 22.0727 13.8035 21.9852H16.9881M21.4009 15.5486H22.5001M21.4009 15.5486V21.1949C21.5177 22.1018 20.7956 21.9427 20.3338 21.9852H16.9881M16.9881 21.9852L17.0235 19.8507'
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

SalahTimeIcon.displayName = 'SalahTimeIcon';
export default SalahTimeIcon;
