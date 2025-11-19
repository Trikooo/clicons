import React from 'react';
import config from '../config';

interface Mining3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Mining3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mining3)
 * @see {@link https://clicons.dev/icon/mining3}
 */
const Mining3Icon = React.forwardRef<SVGSVGElement, Mining3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.9445 20.6667V15.3333M18.5051 15.3333V14M18.5051 22V20.6667M16.9445 18H20.0657M20.0657 18C20.5829 18 21.0021 18.4477 21.0021 19V19.6667C21.0021 20.219 20.5829 20.6667 20.0657 20.6667H16.0081M20.0657 18C20.5829 18 21.0021 17.5523 21.0021 17V16.3333C21.0021 15.781 20.5829 15.3333 20.0657 15.3333H16.0081'
    }
  ],
  [
    'path',
    {
      d: 'M14.6956 4.18605C13.2951 3.31449 9.70071 1.64154 6.46295 2.06854C8.42146 3.43854 9.45179 4.17541 12.2313 6.68896M18.5672 8.11851C18.9392 8.73509 19.5616 9.92878 19.9974 11.1718M16.103 10.6214C16.3448 10.8972 16.6389 11.3118 16.8495 11.5563M10.355 10.4183L3.41465 17.4677C2.85168 18.0395 2.86014 18.9751 3.43353 19.5575C4.00693 20.1399 4.92813 20.1485 5.4911 19.5767L12.4315 12.5274M11.8454 8.22564L14.59 11.0134C14.8948 11.3229 15.3878 11.3241 15.6912 11.0159L19.0915 7.5622C19.3949 7.25405 19.3938 6.75331 19.089 6.44376L16.3444 3.65604C16.0396 3.34649 15.5466 3.34535 15.2432 3.6535L11.8429 7.10721C11.5395 7.41535 11.5406 7.91609 11.8454 8.22564Z'
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

Mining3Icon.displayName = 'Mining3Icon';
export default Mining3Icon;
