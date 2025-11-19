import React from 'react';
import config from '../config';

interface NavigationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name NavigationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/navigation)
 * @see {@link https://clicons.dev/icon/navigation}
 */
const NavigationIcon = React.forwardRef<SVGSVGElement, NavigationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M2.00019 12.0504C1.96622 11.0147 6.45448 8.57937 6.87722 9.06275C7.3566 9.61089 6.21047 11.2397 5.95232 11.7584C5.79708 12.0703 5.80134 12.2056 5.97785 12.5172C6.77726 13.9283 7.17382 14.6313 6.92737 14.9352C6.53453 15.4197 2.03334 13.0611 2.00019 12.0504Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9496 21.9997C12.9853 22.0337 15.4206 17.5454 14.9373 17.1227C14.3891 16.6433 12.7603 17.7894 12.2416 18.0476C11.9297 18.2028 11.7944 18.1985 11.4828 18.022C10.0717 17.2226 9.36869 16.8261 9.06478 17.0725C8.58035 17.4653 10.9389 21.9665 11.9496 21.9997Z'
    }
  ],
  [
    'path',
    {
      d: 'M21.9998 12.0504C22.0338 11.0147 17.5455 8.57937 17.1228 9.06275C16.6434 9.61089 17.7895 11.2397 18.0477 11.7584C18.2029 12.0703 18.1987 12.2056 18.0221 12.5172C17.2227 13.9283 16.8262 14.6313 17.0726 14.9352C17.4655 15.4197 21.9667 13.0611 21.9998 12.0504Z'
    }
  ],
  [
    'path',
    {
      d: 'M11.9496 2.00007C12.9853 1.9661 15.4206 6.45436 14.9373 6.8771C14.3891 7.35648 12.7603 6.21035 12.2416 5.9522C11.9297 5.79696 11.7944 5.80121 11.4828 5.97773C10.0717 6.77714 9.36869 7.1737 9.06478 6.92725C8.58035 6.53441 10.9389 2.03322 11.9496 2.00007Z'
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

NavigationIcon.displayName = 'NavigationIcon';
export default NavigationIcon;
