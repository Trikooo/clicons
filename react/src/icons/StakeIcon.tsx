import React from 'react';
import config from '../config';

interface StakeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name StakeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/stake)
 * @see {@link https://clicons.dev/icon/stake}
 */
const StakeIcon = React.forwardRef<SVGSVGElement, StakeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 6C11.3137 6 14 5.10457 14 4C14 2.89543 11.3137 2 8 2C4.68629 2 2 2.89543 2 4C2 5.10457 4.68629 6 8 6Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 9C11.9102 9 9 11.9101 9 15.5C9 19.0898 11.9102 22 15.5 22C19.0898 22 22 19.0899 22 15.5C22 11.9101 19.0898 9 15.5 9Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 19C15.6047 19 15.702 18.9505 15.8967 18.8516L17.4614 18.0564C18.1538 17.7045 18.5 17.5286 18.5 17.25V13.75M15.5 19C15.3953 19 15.298 18.9505 15.1033 18.8516L13.5386 18.0564C12.8462 17.7045 12.5 17.5286 12.5 17.25V13.75M15.5 19V15.5M18.5 13.75C18.5 13.4714 18.1538 13.2955 17.4614 12.9436L15.8967 12.1484C15.702 12.0495 15.6047 12 15.5 12C15.3953 12 15.298 12.0495 15.1033 12.1484L13.5386 12.9436C12.8462 13.2955 12.5 13.4714 12.5 13.75M18.5 13.75C18.5 14.0286 18.1538 14.2045 17.4614 14.5564L15.8967 15.3516C15.702 15.4505 15.6047 15.5 15.5 15.5M12.5 13.75C12.5 14.0286 12.8462 14.2045 13.5386 14.5564L15.1033 15.3516C15.298 15.4505 15.3953 15.5 15.5 15.5'
    }
  ],
  [
    'path',
    {
      d: 'M2 4V8.02171V12.0434C2 12.7473 3.17834 13.6328 6.12981 14M2.10726 8.54768C3.31161 9.60965 5.45881 10.0602 7.75359 10.0602M13.9884 4.12134V6.13597'
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

StakeIcon.displayName = 'StakeIcon';
export default StakeIcon;
