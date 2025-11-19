import React from 'react';
import config from '../config';

interface Sorting19IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Sorting19Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/sorting19)
 * @see {@link https://clicons.dev/icon/sorting19}
 */
const Sorting19Icon = React.forwardRef<SVGSVGElement, Sorting19IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 9.99936V3.94812C7 3.3736 7 3.08634 6.76959 3.01485C6.26306 2.85769 5.5 3.99902 5.5 3.99902M7 9.99936H5.5M7 9.99936H8.5'
    }
  ],
  [
    'path',
    {
      d: 'M9 17.4991V15.7491C9 14.9242 9 14.5117 8.70711 14.2554C8.41421 13.9991 7.94281 13.9991 7 13.9991C6.05719 13.9991 5.58579 13.9991 5.29289 14.2554C5 14.5117 5 14.9242 5 15.7491C5 16.5741 5 16.9866 5.29289 17.2429C5.58579 17.4991 6.05719 17.4991 7 17.4991H9ZM9 17.4991V18.3741C9 19.6116 9 20.2303 8.56066 20.6147C8.12132 20.9991 7.41421 20.9991 6 20.9991H5'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 19.9991V3.99915M16.5 19.9991C15.7998 19.9991 14.4915 18.0048 14 17.4991M16.5 19.9991C17.2002 19.9991 18.5085 18.0048 19 17.4991'
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

Sorting19Icon.displayName = 'Sorting19Icon';
export default Sorting19Icon;
