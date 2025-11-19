import React from 'react';
import config from '../config';

interface BilliardIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BilliardIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/billiard)
 * @see {@link https://clicons.dev/icon/billiard}
 */
const BilliardIcon = React.forwardRef<SVGSVGElement, BilliardIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.07089 10C8.02417 9.6734 8 9.33952 8 9C8 5.13401 11.134 2 15 2C18.866 2 22 5.13401 22 9C22 12.866 18.866 16 15 16C14.7024 16 14.4091 15.9814 14.1212 15.9454'
    }
  ],
  [
    'path',
    {
      d: 'M18.8684 10C19.2035 8.6899 18.8933 7.01849 18 6'
    }
  ],
  [
    'path',
    {
      d: 'M2 19.0966L10.2253 11.5568M4.90338 22L12.6046 13.5987M12.6046 13.5987C12.6046 12.3221 11.677 11.3543 10.2253 11.5568M12.6046 13.5987L14.6243 11.3954C15.1414 10.8312 15.1225 9.95985 14.5813 9.41868C14.0402 8.87752 13.1688 8.85858 12.6046 9.37573L10.2253 11.5568'
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

BilliardIcon.displayName = 'BilliardIcon';
export default BilliardIcon;
