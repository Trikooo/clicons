import React from 'react';
import config from '../config';

interface Tree6IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Tree6Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tree6)
 * @see {@link https://clicons.dev/icon/tree6}
 */
const Tree6Icon = React.forwardRef<SVGSVGElement, Tree6IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 22V9'
    }
  ],
  [
    'path',
    {
      d: 'M9.00195 18.002C7.3451 18.002 6.00195 16.6234 6.00195 14.9665C4.30581 14.7239 3.00195 13.2652 3.00195 11.502C3.00195 10.0052 3.94147 8.7279 5.26293 8.22759C5.09522 7.85339 5.00195 7.43856 5.00195 7.00195C5.00195 5.3451 6.3451 4.00195 8.00195 4.00195C8.3922 4.00195 8.76505 4.07647 9.10703 4.21204C9.45374 2.93842 10.6185 2.00195 12.002 2.00195C13.3854 2.00195 14.5502 2.93842 14.8969 4.21204C15.2389 4.07647 15.6117 4.00195 16.002 4.00195C17.6588 4.00195 19.002 5.3451 19.002 7.00195C19.002 7.43856 18.9087 7.85339 18.741 8.22759C20.0624 8.7279 21.002 10.0052 21.002 11.502C21.002 13.2653 19.698 14.724 18.0017 14.9665C18.0017 16.6234 16.6588 18.002 15.002 18.002'
    }
  ],
  [
    'path',
    {
      d: 'M12 15L14.5 12.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 13L9.5 10.5'
    }
  ],
  [
    'path',
    {
      d: 'M10 22H14'
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

Tree6Icon.displayName = 'Tree6Icon';
export default Tree6Icon;
