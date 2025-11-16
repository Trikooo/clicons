import React from 'react';
import config from '../config';

interface EiffelTowerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name EiffelTowerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/eiffel-tower)
 * @see {@link https://clicons.dev/icon/eiffel-tower}
 */
const EiffelTowerIcon = React.forwardRef<SVGSVGElement, EiffelTowerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 22C7.67798 16.3864 9.95978 9.8784 10.8382 4.98644C10.8643 4.84129 10.8773 4.76868 10.8931 4.71553C11.0101 4.32106 11.3323 4.05162 11.7412 4.00613C11.7963 4 11.8642 4 12 4C12.1358 4 12.2037 4 12.2588 4.00613C12.6677 4.05162 12.9899 4.32106 13.1069 4.71553C13.1227 4.76868 13.1357 4.84129 13.1618 4.98644C14.0402 9.8784 16.322 16.3864 21 22'
    }
  ],
  [
    'path',
    {
      d: 'M12 4V2'
    }
  ],
  [
    'path',
    {
      d: 'M8 11H16'
    }
  ],
  [
    'path',
    {
      d: 'M6 15H18'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 22C15.2904 20.959 15.1855 20.4386 14.9348 19.9979C14.822 19.7995 14.6881 19.6148 14.5358 19.447C14.1973 19.0744 13.7412 18.8227 12.8289 18.3194C12.48 18.1269 12.3055 18.0306 12.1198 18.0074C12.0402 17.9975 11.9598 17.9975 11.8802 18.0074C11.6945 18.0306 11.52 18.1269 11.1711 18.3194C10.2588 18.8227 9.8027 19.0744 9.46424 19.447C9.31188 19.6148 9.17804 19.7995 9.06518 19.9979C8.81446 20.4386 8.70964 20.959 8.5 22'
    }
  ],
  [
    'path',
    {
      d: 'M15 22L22 22'
    }
  ],
  [
    'path',
    {
      d: 'M2 22H9'
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

EiffelTowerIcon.displayName = 'EiffelTowerIcon';
export default EiffelTowerIcon;
