import React from 'react';
import config from '../config';

interface CheeseCake2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CheeseCake2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/cheese-cake2)
 * @see {@link https://clicons.dev/icon/cheese-cake2}
 */
const CheeseCake2Icon = React.forwardRef<SVGSVGElement, CheeseCake2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.5 7C17.4335 7.42441 18 7.9819 18 8.59247C18 9.92211 15.3137 11 12 11C8.68629 11 6 9.92211 6 8.59247C6 7.9819 6.56645 7.42441 7.5 7'
    }
  ],
  [
    'path',
    {
      d: 'M6 13C6 14.1046 8.68629 15 12 15C15.3137 15 18 14.1046 18 13'
    }
  ],
  [
    'path',
    {
      d: 'M18 9V17C18 18.1046 15.3137 19 12 19C8.68629 19 6 18.1046 6 17V9'
    }
  ],
  [
    'path',
    {
      d: 'M20.5 16C21.4509 16.6013 22 17.3109 22 18.0708C22 20.2409 17.5228 22 12 22C6.47715 22 2 20.2409 2 18.0708C2 17.3109 2.54913 16.6013 3.5 16'
    }
  ],
  [
    'path',
    {
      d: 'M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4ZM12 4C12 3.5 12.4 2.4 14 2'
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

CheeseCake2Icon.displayName = 'CheeseCake2Icon';
export default CheeseCake2Icon;
