import React from 'react';
import config from '../config';

interface CookBookIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CookBookIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cook-book)
 * @see {@link https://clicons.dev/icon/cook-book}
 */
const CookBookIcon = React.forwardRef<SVGSVGElement, CookBookIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21 16.9286V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H12C8.22876 2 6.34315 2 5.17157 3.17157C4 4.34315 4 6.22876 4 10V19.5'
    }
  ],
  [
    'path',
    {
      d: 'M21 17H6.5C5.11929 17 4 18.1193 4 19.5C4 20.8807 5.11929 22 6.5 22H21'
    }
  ],
  [
    'path',
    {
      d: 'M21 22C19.6193 22 18.5 20.8807 18.5 19.5C18.5 18.1193 19.6193 17 21 17'
    }
  ],
  [
    'path',
    {
      d: 'M14.3877 6.84933C14.7057 6.63424 15.0883 6.50878 15.5 6.50878C16.6046 6.50878 17.5 7.41206 17.5 8.52633C17.5 9.62271 16.5957 10.54 15.5 10.54V11.5C15.5 12.4428 15.5 12.9142 15.2071 13.2071C14.9142 13.5 14.4428 13.5 13.5 13.5H11.5C10.5572 13.5 10.0858 13.5 9.79289 13.2071C9.5 12.9142 9.5 12.4428 9.5 11.5V10.665C8.33217 10.665 7.5 9.79515 7.5 8.52633C7.5 7.41206 8.39543 6.50878 9.5 6.50878C9.91166 6.50878 10.2943 6.63424 10.6123 6.84933C10.8857 6.06347 11.6276 5.5 12.5 5.5C13.3724 5.5 14.1143 6.06347 14.3877 6.84933ZM14.3877 6.84933C14.4604 7.05846 14.5 7.28335 14.5 7.51755'
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

CookBookIcon.displayName = 'CookBookIcon';
export default CookBookIcon;
