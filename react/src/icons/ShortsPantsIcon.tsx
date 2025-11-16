import React from 'react';
import config from '../config';

interface ShortsPantsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ShortsPantsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/shorts-pants)
 * @see {@link https://clicons.dev/icon/shorts-pants}
 */
const ShortsPantsIcon = React.forwardRef<SVGSVGElement, ShortsPantsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.9876 15.1231L10.2566 20.2254C10.0233 21.8538 9.63333 22.1467 8.0011 21.9433L3.79203 21.4186C2.20615 21.221 1.90147 20.854 2.0244 19.2605L2.76037 9.72027C2.81727 8.98263 2.84572 8.61382 2.91847 8.25272C3.10263 7.33855 3.61242 6.53567 3.82223 5.63542C3.94435 5.11145 3.90106 4.55591 3.90106 4.01893C3.90106 2.34611 4.25316 2 5.92579 2H18.0742C19.7468 2 20.0989 2.34611 20.0989 4.01893C20.0989 4.55591 20.0557 5.11145 20.1778 5.63542C20.3876 6.53567 20.8974 7.33855 21.0815 8.25272C21.7973 11.8057 21.6973 15.6526 21.9756 19.2605C22.0985 20.854 21.7938 21.221 20.208 21.4186L15.9989 21.9433C14.3667 22.1467 13.9767 21.8538 13.7434 20.2254L13.0124 15.1231'
    }
  ],
  [
    'path',
    {
      d: 'M9 13.5C9.76053 14.2605 10.1976 15 11.3284 15H12.6716C13.8024 15 14.2395 14.2605 15 13.5'
    }
  ],
  [
    'path',
    {
      d: 'M4 5H20'
    }
  ],
  [
    'path',
    {
      d: 'M3 11C7 11.0068 7 7.00225 7 5'
    }
  ],
  [
    'path',
    {
      d: 'M17 5C17 7.00225 17 11.0068 21 11'
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

ShortsPantsIcon.displayName = 'ShortsPantsIcon';
export default ShortsPantsIcon;
